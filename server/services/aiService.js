const Groq = require("groq-sdk");

const AI_SYSTEM_PROMPT = require("../config/aiPrompt");
const AI_RESPONSE_SCHEMA = require("../config/aiResponseSchema");

const {
  experienceTool,
  getExperience,
} = require("./aiTools/experience");

const {
  projectsTool,
  getProjects,
} = require("./aiTools/projects");

const {
  skillsTool,
  getSkills,
} = require("./aiTools/skills");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const tools = [
  experienceTool,
  projectsTool,
  skillsTool,
];

const toolHandlers = {
  getExperience,
  getProjects,
  getSkills,
};


const generateResponse = async (message) => {
  // --------------------------------
  // CALL 1 — TOOL DECISION
  // --------------------------------

  const completion = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL,

    messages: [
      {
        role: "system",
        content: `
        You are Harsh's AI Assistant.

        Your job in this step is to determine whether
        you need any of the available tools to answer
        the user's question.

        Use a tool when the user's question requires
        specific information about Harsh's portfolio.

        If no tool is required, respond with normal text.

        Do not create or call tools that are not provided.
        `,
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

    if (!assistantMessage.tool_calls?.length) {
    return await generateFinalResponse([
      {
        role: "system",
        content: AI_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
      {
        role: "assistant",
        content: assistantMessage.content || "",
      },
    ]);
  }

  // --------------------------------
  // TOOL REQUIRED
  // --------------------------------

  const messages = [
    {
      role: "system",
      content: AI_SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: message,
    },
    assistantMessage,
  ];

  // --------------------------------
  // EXECUTE TOOL CALLS
  // --------------------------------

  for (const toolCall of assistantMessage.tool_calls) {
    const toolName = toolCall.function.name;

    const toolHandler = toolHandlers[toolName];

    if (!toolHandler) {
      throw new Error(`Unknown tool: ${toolName}`);
    }

    const toolResult = await toolHandler();

    messages.push({
      role: "tool",
      tool_call_id: toolCall.id,
      content: JSON.stringify(toolResult),
    });
  }

  // --------------------------------
  // CALL 2 — FINAL RESPONSE
  // --------------------------------

  return await generateFinalResponse(messages);
};


// --------------------------------
// FINAL RESPONSE GENERATOR
// --------------------------------

const generateFinalResponse = async (messages) => {
  const finalCompletion =
    await groq.chat.completions.create({
      model: process.env.GROQ_MODEL,

      messages,

      response_format: AI_RESPONSE_SCHEMA,
    });

  const content =
    finalCompletion.choices[0].message.content;

  if (!content) {
    throw new Error("AI returned an empty response");
  }

  return JSON.parse(content);
};


module.exports = {
  generateResponse,
};