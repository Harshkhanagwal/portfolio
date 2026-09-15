const Groq = require("groq-sdk");

const AI_RESPONSE_SCHEMA = require("../config/aiResponseSchema");
const AI_SYSTEM_PROMPT = require("../config/aiPrompt");
const AI_ROUTING_PROMPT = require("../config/aiRoutingPrompt");

const {
  experienceTool,
  getExperience,
} = require("./aiTools/experience");

const {
  projectsTool,
  getProjects,
} = require("./aiTools/projects");

const {
  aiKnowledgeTool,
  getAIKnowledge,
} = require("./aiTools/aiKnowledge");

const {
  skillsTool,
  getSkills,
} = require("./aiTools/skills");

const {
  educationTool,
  getEducation,
} = require("./aiTools/education");

const {
  portfolioTool,
  getPortfolioContext,
} = require("./aiTools/portfolio");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// =========================================
// AVAILABLE TOOLS
// =========================================
const tools = [
  experienceTool,
  projectsTool,
  skillsTool,
  aiKnowledgeTool,
  educationTool,
  portfolioTool,
];

// =========================================
// TOOL HANDLERS
// =========================================
const toolHandlers = {
  getExperience,
  getProjects,
  getSkills,
  getAIKnowledge,
  getEducation,
  getPortfolioContext,
};

// =========================================
// MAIN AI RESPONSE
// =========================================

const generateResponse = async (message) => {
  // ---------------------------------------
  // STEP 1: TOOL ROUTING
  // ---------------------------------------

  const routingMessages = [
    {
      role: "system",
      content: AI_ROUTING_PROMPT,
    },
    {
      role: "user",
      content: message,
    },
  ];

  const completion =
    await groq.chat.completions.create({
      model: process.env.GROQ_MODEL,

      messages: routingMessages,

      tools,

      tool_choice: "auto",

      // Single tool call
      parallel_tool_calls: false,
    });

  const assistantMessage =
    completion.choices[0].message;

  // ---------------------------------------
  // STEP 2: NO TOOL REQUIRED
  // ---------------------------------------

  if (!assistantMessage.tool_calls?.length) {
    return await generateFinalResponse({
      message,
      toolResult: null,
    });
  }

  // ---------------------------------------
  // STEP 3: USE FIRST TOOL
  // ---------------------------------------

  const toolCall =
    assistantMessage.tool_calls[0];

  const toolName =
    toolCall.function.name;

  const toolHandler =
    toolHandlers[toolName];

  if (!toolHandler) {
    throw new Error(
      `Unknown tool: ${toolName}`
    );
  }

  // ---------------------------------------
  // STEP 4: EXECUTE TOOL
  // ---------------------------------------

  const toolResult =
    await toolHandler();

  // ---------------------------------------
  // STEP 5: FINAL RESPONSE
  // ---------------------------------------

  return await generateFinalResponse({
    message,
    toolResult: {
      tool: toolName,
      result: toolResult,
    },
  });
};

// =========================================
// FINAL RESPONSE GENERATOR
// =========================================

const generateFinalResponse = async ({
  message,
  toolResult,
}) => {
  const retrievedData = toolResult
    ? JSON.stringify(toolResult)
    : "No portfolio tool was required.";

  const finalMessages = [
    {
      role: "system",
      content: `
${AI_SYSTEM_PROMPT}

FINAL RESPONSE MODE

Generate the final answer to the user's
original question.

Tool execution has already been completed.

Do NOT call any tools.

Use only the information available below
and the original user question.

RETRIEVED PORTFOLIO INFORMATION:

${retrievedData}

IMPORTANT:

- Treat retrieved portfolio information as
  the source of truth.
- Never invent information about Harsh.
- If the requested information is unavailable,
  say so clearly.
- Answer directly and concisely.
- Follow all rules from the main system prompt.
- The "text" field must contain valid HTML.
- Return the required structured response.
      `,
    },

    {
      role: "user",
      content: message,
    },
  ];

  const finalCompletion =
    await groq.chat.completions.create({
      model: process.env.GROQ_MODEL,

      messages: finalMessages,

      tool_choice: "none",

      response_format:
        AI_RESPONSE_SCHEMA,
    });

  const content =
    finalCompletion.choices[0].message.content;

  if (!content) {
    throw new Error(
      "AI returned an empty response"
    );
  }

  try {
    return JSON.parse(content);
  } catch (error) {
    console.error(
      "Invalid AI response:",
      content
    );

    throw new Error(
      "AI returned an invalid structured response"
    );
  }
};

// =========================================
// EXPORT
// =========================================

module.exports = {
  generateResponse,
};