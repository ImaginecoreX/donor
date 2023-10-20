import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"></div>
      <div className="modal-container bg-white w-6/12 ss:w-full md:max-w-md mx-auto rounded shadow-lg z-50 ss:overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">{children}</div>
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={onClose}
          >
            <path
              d="M18 1.41L16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41z"
            ></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
