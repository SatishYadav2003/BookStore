import React, { useState } from "react";
import styles from "./ChatBot.module.css";

const ChatBot = () => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleChatBot = () => {
    setIsChatBotVisible(true);
  };

  const handleCloseChatBot = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsChatBotVisible(false);
      setIsAnimating(false);
    }, 600); 
  };

  return (
    <div className={styles.chatbotWrapper}>
      {isChatBotVisible && (
        <div
          className={`${styles.chatbotContainer} ${
            isAnimating ? styles.hideChatbot : ""
          }`}
        >
          <button className={styles.closeButton} onClick={handleCloseChatBot}>
            ✖
          </button>
          <iframe
            className={styles.chatbot}
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/78891c7a-2c4d-4d29-af65-7bf8417f9801"
            title="Chatbot"
          ></iframe>
        </div>
      )}

      {!isChatBotVisible && (
        <button className={styles.toggleButton} onClick={handleToggleChatBot}>
          <img
            src="https://miro.medium.com/v2/resize:fit:612/1*C_LFPy6TagD1SEN5SwmVRQ.jpeg"
            alt="Toggle Chatbot"
            className={styles.toggleButtonImage}
          />
        </button>
      )}
    </div>
  );
};

export default ChatBot;








