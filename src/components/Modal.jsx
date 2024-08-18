import React from 'react';

export default function Modal({ modalOpen, handleClose, children }) {
  return (
    <div
      onClick={handleClose}
      className={`
      fixed inset-0 flex justify-center items-center transition-colors
      ${modalOpen ? "visible bg-black/20" : "invisible"}
    `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-[rgba(57,62,70,0.9)] rounded-xl shadow p-10 transition-all
        ${modalOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
      >
        {children}
      </div>
    </div>
  );
}
