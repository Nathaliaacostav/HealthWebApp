// Chat.jsx
import React, { useState } from 'react';
import './styles.sass';

const ChatGPT = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (inputValue.trim() === '') return;

        setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
        setInputValue('');
        
        // Llama a la función para obtener la respuesta del bot aquí
    };

    return (
        <div className="chat-container">
            <div className="chat-header">ChatGPT</div>
            <div className="chat-messages">
                {messages.map(message => (
                    <div key={message.id} className={`message message--${message.sender}`}>
                        <div className="message-bubble">{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Escribe un mensaje..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button className="send-button" onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatGPT;