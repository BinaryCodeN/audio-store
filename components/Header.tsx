// src/components/Header.tsx
import React from 'react';
import './../style/Header.css';
import VK from '../icons/vk.svg';
import WA from '../icons/wa.svg';
import TG from '../icons/tg.png';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <h1>QPICK</h1>
          </div>
          <nav>
            <a href="#">Избранное</a>
            <a href="#">Корзина</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
        <div className="header-center">
          <div className="service-terms">
            <p>Условия сервиса</p>
          </div>
          <div className="language-switcher">
            <button>Рус</button>
            <button>Eng</button>
          </div>
        </div>
        <div className="header-right">
          <div className="social-icons">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <img src={VK} alt="VK" />
            </a>
            <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
              <img src={TG} alt="Telegram" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={WA} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
