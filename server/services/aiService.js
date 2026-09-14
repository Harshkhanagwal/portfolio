const Groq = require("groq-sdk");

const AI_SYSTEM_PROMPT = require("../config/aiPrompt");
const AI_RESPONSE_SCHEMA = require("../config/aiResponseSchema");

const {
  experienceTool,
  getExperience,
} = require("./aiTools/experience");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const tools = [
  experienceTool,
];

const generateResponse = async (message) => {

  const completion = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL,

    messages: [
      {
        role: "system",
        content: AI_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],

    tools,
  });

  const assistantMessage = completion.choices[0].message;

  // --------------------------------
  // NO TOOL REQUIRED
  // --------------------------------

  if (!assistantMessage.tool_calls) {
    return JSON.parse(assistantMessage.content);
  }


  const toolCall = assistantMessage.tool_calls[0];

  const toolName = toolCall.function.name;

  let toolResult;

  if (toolName === "getExperience") {
    toolResult = await getExperience();
  } else {
    throw new Error(`Unknown tool: ${toolName}`);
  }

  const finalCompletion = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL,

    messages: [
      {
        role: "system",
        content: AI_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
      assistantMessage,
      {
        role: "tool",
        tool_call_id: toolCall.id,
        content: JSON.stringify(toolResult),
      },
    ],

    response_format: AI_RESPONSE_SCHEMA,
  });

  return JSON.parse(
    finalCompletion.choices[0].message.content
  );
};

module.exports = {
  generateResponse,
};