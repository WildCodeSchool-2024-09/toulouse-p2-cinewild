import { useRef, useState } from "react";
import "../assets/styles/ModalContactForm.css";
import emailjs from "@emailjs/browser";

interface ModalProps {
  isContactOpen: boolean;
  onClose: () => void;
}

interface EmailProps {
  last_name: string;
  first_name: string;
  email: string;
  message: string;
}

const ModalContactForm: React.FC<ModalProps> = ({ isContactOpen, onClose }) => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<EmailProps>({
    last_name: "",
    first_name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Move the early return inside the component body

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm("service_3xa927n", "template_m9k6uqr", formRef.current, {
          publicKey: "c-_cxxkzxlo6IlBfG",
        })
        .then(
          () => {
            setStatusMessage("Email sent successfully!");
            setFormData({
              last_name: "",
              first_name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.error("FAILED...", error.text);
            setStatusMessage("Failed to send email. Please try again.");
          },
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // If the modal is not open, return null
  if (!isContactOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button type="button" className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <form className="formulaire" ref={formRef} onSubmit={handleSubmit}>
          <div className="titre">
            <h2 className="contact-modal-title">CONTACT</h2>
          </div>
          <div className="nameLastname">
            <input
              className="formName"
              type="text"
              name="last_name"
              id="name"
              placeholder="Nom"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
            <input
              className="formLastName"
              type="text"
              name="first_name"
              id="lastname"
              placeholder="Prénom"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            className="form-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="form-msg-box">
            <textarea
              className="form-msg"
              name="message"
              required
              placeholder="Votre message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="submitdiv">
            <input type="submit" value="Envoyer" className="submit-btn" />
          </div>
        </form>

        {statusMessage && (
          <div className="status-message">
            <p>{statusMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContactForm;
