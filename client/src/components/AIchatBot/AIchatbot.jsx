import "./AIchatbot.css";
import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
  
function AssistantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 18.5 4.5 20v-4.1A7.7 7.7 0 0 1 3 11.5C3 7.36 6.8 4 11.5 4S20 7.36 20 11.5 16.2 19 11.5 19c-1.65 0-3.19-.42-4.5-1.14" />
      <path d="m17.5 2 .45 1.35L19.5 4l-1.55.65L17.5 6l-.45-1.35L15.5 4l1.55-.65L17.5 2Z" />
      <circle cx="8.5" cy="11.5" r=".65" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="11.5" r=".65" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="11.5" r=".65" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dialogRef = useRef(null);
  const messageAreaRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  const openAssistant = () => {
    setIsOpen(true);
  };

  const closeAssistant = () => {
    setIsOpen(false);
  };

  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = inputValue.trim();

    if (!message || isLoading) return;

    setInputValue("");

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        text: message,
      },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to get AI response");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: result.data.text,
          suggestions: result.data.suggestions,
        },
      ]);
    } catch (error) {
      console.error("AI Assistant error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Sorry, I couldn't process your request right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      window.__lenis?.start();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Stop Lenis from controlling the page.
    window.__lenis?.stop();

    // Lock normal body scrolling.
    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAssistant();
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements =
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      inputRef.current?.focus();

      if (messageAreaRef.current) {
        messageAreaRef.current.scrollTop =
          messageAreaRef.current.scrollHeight;
      }
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;

      document.removeEventListener("keydown", handleKeyDown);

      // Resume smooth portfolio scrolling.
      window.__lenis?.start();

      requestAnimationFrame(() => {
        launcherRef.current?.focus();
      });
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button
          ref={launcherRef}
          className="ai-assistant-launcher"
          type="button"
          onClick={openAssistant}
          aria-label="Open Harsh's AI Assistant"
        >
          <span className="ai-assistant-launcher__icon">
            <AssistantIcon />
          </span>

          <span className="ai-assistant-launcher__label">
            Harsh&apos;s AI
          </span>
        </button>
      )}

      {isOpen && (
        <div

          className="ai-assistant-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeAssistant();
            }
          }}
        >
          <div
            ref={dialogRef}
            className="ai-assistant"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-assistant-title"
          >
            <header className="ai-assistant__header">
              <div
                className="ai-assistant__window-controls"
                aria-label="Window controls"
              >
                <button
                  className="ai-assistant__window-control ai-assistant__window-control--red"
                  type="button"
                  onClick={closeAssistant}
                  aria-label="Close AI Assistant"
                />

                <button
                  className="ai-assistant__window-control ai-assistant__window-control--yellow"
                  type="button"
                  aria-label="Minimize"
                  disabled
                />

                <button
                  className="ai-assistant__window-control ai-assistant__window-control--green"
                  type="button"
                  aria-label="Maximize"
                  disabled
                />
              </div>

              <div className="ai-assistant__identity">
                <span
                  className="ai-assistant__identity-icon"
                  aria-hidden="true"
                >
                  <AssistantIcon />
                </span>

                <div>
                  <h2
                    id="ai-assistant-title"
                    className="ai-assistant__title"
                  >
                    Harsh&apos;s AI Assistant
                  </h2>

                  <div className="ai-assistant__status">
                    <span
                      className="ai-assistant__status-dot"
                      aria-hidden="true"
                    />
                    <span>Portfolio assistant</span>
                  </div>
                </div>
              </div>

              <div
                className="ai-assistant__header-spacer"
                aria-hidden="true"
              />
            </header>

            <div
              ref={messageAreaRef}
              className="ai-assistant__messages"
            >
              <div className="ai-assistant__intro">
                <span className="eyebrow">
                  AI / PORTFOLIO
                </span>

                <h3>Ask about Harsh.</h3>

                <p>
                  Explore projects, experience, skills, education,
                  and AI work through the assistant.
                </p>
              </div>

              <div className="ai-assistant__conversation">
                {/* {initialMessages.map((message) => ( */}
                {messages.map((message) => (
                  <article
                    key={message.id}
                    className={`ai-message ai-message--${message.role}`}
                  >
                    <div className="ai-message__meta">
                      {message.role === "assistant"
                        ? "HARSH_AI"
                        : "YOU"}
                    </div>

                    <div
                      className="ai-message__bubble"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(message.text),
                      }}
                    />
                    {message.suggestions?.length > 0 && (
                      <div
                        className="ai-message__suggestions"
                        aria-label="Related questions"
                      >
                        {message.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            className="ai-message__suggestion"
                            type="button"
                            onClick={() =>
                              handleSuggestion(suggestion)
                            }
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <footer className="ai-assistant__footer">
              <form
                className="ai-assistant__composer"
                onSubmit={handleSubmit}
              >
                <label
                  className="ai-assistant__input-label"
                  htmlFor="ai-assistant-input"
                >
                  Ask Harsh&apos;s AI Assistant
                </label>

                <div className="ai-assistant__input-shell">
                  <input
                    ref={inputRef}
                    id="ai-assistant-input"
                    type="text"
                    value={inputValue}
                    onChange={(event) =>
                      setInputValue(event.target.value)
                    }
                    placeholder="Ask about projects, skills, experience..."
                    autoComplete="off"
                  />

                  <button
                    className="ai-assistant__send"
                    type="submit"
                    aria-label="Send message"
                  >
                    <SendIcon />
                  </button>
                </div>
              </form>

              <p className="ai-assistant__disclaimer">
                Portfolio assistant · Powered by AI
              </p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}