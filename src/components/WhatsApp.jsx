import React from 'react';
import '../styles/WhatsApp.css';

export default function WhatsApp() {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=5561991697445" className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float" />
      </a>
    </div>
  );
}
