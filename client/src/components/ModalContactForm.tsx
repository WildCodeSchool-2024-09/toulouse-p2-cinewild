import type React from "react";
import "../assets/styles/ModalContactForm.css";

interface ModalProps {
  isContactOpen: boolean;
  onClose: () => void;
}

const ModalContactForm: React.FC<ModalProps> = ({ isContactOpen, onClose }) => {
  if (!isContactOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button type="button" className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <form className="formulaire" onSubmit={handleSubmit}>
          <div className="titre">
            <h1>CONTACT</h1>
          </div>
          <ul>
            <div className="nameLastname">
              <li className="formName">
                <label>
                  Nom
                  <textarea
                    name="user_name"
                    id="name"
                    placeholder="ecrivez votre nom"
                    required
                  />
                </label>
              </li>
              <li className="formLastName">
                <label>
                  Prénom
                  <textarea
                    name="user_lastname"
                    id="lastname"
                    placeholder="ecrivez votre prénom"
                    required
                  />
                </label>
              </li>
            </div>
            <li>
              <label>
                Email
                <textarea
                  name="user_email"
                  id="email"
                  placeholder="ecrivez votre email"
                  required
                />
              </label>
            </li>
            <li>
              <label className="formDescription">
                Message:
                <textarea id="msg" name="user_message" required />
              </label>
            </li>
            <div className="submitdiv">
              <input type="submit" value="Submit" />
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ModalContactForm;
