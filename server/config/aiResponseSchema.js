const AI_RESPONSE_SCHEMA = {
  type: "json_schema",

  json_schema: {
    name: "ai_assistant_response",

    strict: true,

    schema: {
      type: "object",

      properties: {
        type: {
          type: "string",
          enum: ["text"],
          description: "The type of response. Currently always 'text'.",
        },

        text: {
          type: "string",
          description:
            "The main natural-language answer to the user's question.",
        },

        suggestions: {
          type: "array",
          description:
            "Relevant follow-up questions the user can ask next.",
          items: {
            type: "string",
          },
        },
      },

      required: ["type", "text", "suggestions"],

      additionalProperties: false,
    },
  },
};

module.exports = AI_RESPONSE_SCHEMA;