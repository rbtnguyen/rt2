import { useState } from 'react';
import { createPortal } from 'react-dom';
// import ModalContent from './ModalContent.js';

export default function PillModal({ onClose, heading, body, imagePath, title }: any) {
  return (
    <div className="pill-modal">
      <img src={`/assets/${imagePath}`} alt={`${title} logo`} />
      <section className="pill-modal-text-content">
        <h2>{heading}</h2>
        <p>{body}</p>
      </section>
      <button onClick={onClose}>✕</button>
    </div>
  );
}
