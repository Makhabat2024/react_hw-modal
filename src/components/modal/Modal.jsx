import React, { useEffect, useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import Input from "../../ui/inputs/Input";
const Modal = ({ isOpen, onClose, questions, setQuestions }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleAddQuestion = () => {
    const newQuestion = {
      question: question,
      type: type,
      id: Math.random(),
    };
    setQuestions([...questions, newQuestion]);
  };

  const modalContent = isOpen && (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modalForm">
          <Input
            type="text"
            placeholder="question..."
            value={question}
            setData={setQuestion}
          />
          <Input
            type="text"
            placeholder="html,css,js,react..."
            value={type}
            setData={setType}
          />
          <button
            className="createQuestion"
            onClick={() => handleAddQuestion()}
          >
            Create Question
          </button>
        </div>
      </div>
    </div>
  );
  return isBrowser
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("root-portal")
      )
    : null;
};

export default Modal;
