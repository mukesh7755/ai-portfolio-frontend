import React, { useState } from "react";
import axios from "axios";
import "../styles/chat.css";

interface Message {
  role: "user" | "ai";
  text: string;
}

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentInput = input;

    const userMessage: Message = {
      role: "user",
      text: currentInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat`, {
        message: currentInput,
      });

      const aiMessage: Message = {
        role: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error connecting to backend:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "⚠ Unable to connect to backend. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">Mukesh AI Assistant</div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                {msg.text}
              </div>
            ))}

            {loading && <div className="typing">AI typing...</div>}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask about Mukesh..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
