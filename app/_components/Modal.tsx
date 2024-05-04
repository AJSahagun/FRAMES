import React from "react";

interface ModalProps {
  header: string;
  message: string;
  onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ header, message, onClose }) => {
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-4">{header}</h2>
        <p>{message}</p>
        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
          style={{ backgroundColor: '#C30D26'}}
          onClick={onClose} 
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
