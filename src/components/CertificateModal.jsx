import React from "react";

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="certificate-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2>{certificate.title}</h2>

        <img
          src={certificate.image}
          alt={certificate.title}
          className="certificate-image"
        />
      </div>
    </div>
  );
}

export default CertificateModal;