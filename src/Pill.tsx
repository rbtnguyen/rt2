import PillModal from './PillModal'
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface PillProps{
  imagePath?: string;
  title?: string;
  modalHeading: string;
  modalBody: string;
}

export default function Pill( {imagePath, title, modalHeading, modalBody}: PillProps) {
  const [showModal, setShowModal] = useState(false);
  
  return (
  <>
    {/* <PillModal /> */}
    <button className="pill"onClick={() => setShowModal(true)}><img src={`/assets/${imagePath}`}/>{title}</button>
    {showModal && createPortal(
        <PillModal onClose={() => setShowModal(false)} heading={modalHeading} body={modalBody} imagePath={imagePath} title= {title}/>,
        document.body
    )}
  </>
  );
}