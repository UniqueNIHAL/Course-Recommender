import React from 'react';

const Chatbot = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
      <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
      <df-messenger
        project-id="project-saadhna-429922"
        agent-id="dc302415-b2b2-4f9b-9076-c35b2486f1d1"
        language-code="en"
        max-query-length="-1">
        <df-messenger-chat
          chat-title="Course Recommender">
        </df-messenger-chat>
      </df-messenger>
      <style>
        {`
          df-messenger {
            --df-messenger-font-color: #000;
            --df-messenger-font-family: Google Sans;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            z-index: 999;
            position: fixed;
            bottom: 0;
            right: 0;
            top: 0;
            width: 350px;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
