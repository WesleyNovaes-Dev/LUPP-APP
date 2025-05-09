import React, { useState } from 'react';
import './SupportButton.css';

const SupportButton = () => {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <>
      <button 
        className="support-button"
        onClick={() => setShowSupport(!showSupport)}
      >
        Suporte
      </button>

      {showSupport && (
        <div className="support-modal">
          <h3>Precisa de ajuda?</h3>
          <p>Entre em contato com nosso suporte:</p>
          <ul>
            <li>Email: suporte@tutoriais.com</li>
            <li>Telefone: (11) 1234-5678</li>
            <li>Chat online (das 9h às 18h)</li>
          </ul>
          <button 
            className="close-support-button" 
            onClick={() => setShowSupport(false)}
          >
            Fechar
          </button>
        </div>
      )}
    </>
  );
};

export default SupportButton;
