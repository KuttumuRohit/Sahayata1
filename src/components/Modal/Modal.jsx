import React, { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save the current focused element
      const focusedElementBeforeModal = document.activeElement;
      // Focus the modal
      modalRef.current.focus();

      // Trap focus inside the modal
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // Restore focus to the previous element
        if (focusedElementBeforeModal) focusedElementBeforeModal.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="px-6 py-4">
          <h2 id="modal-title" className="text-2xl font-bold text-orange-700 mb-4">
            {title}
          </h2>
          <div className="text-gray-700">{children}</div>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
