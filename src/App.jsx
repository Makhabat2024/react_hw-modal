import { useState } from "react";
import data from "./data";
import "./App.css";
import QuestionsList from "./components/guestionsList/QuestionsList";
import Modal from "./components/modal/Modal";

function App() {
  const [questions, setQuestions] = useState(data);
  const [modalOpen, setOpenModal] = useState(false);

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  // useEffect(() => {
  //   setData(data);
  //   console.log(data);
  // },[dataQuestion]);

  return (
    <div className="container">
      <div>
        <button onClick={openModal}>Открыт модальное окно</button>

        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          questions={questions}
          setQuestions={setQuestions}
        >
          <h2>Привет, это модальное окно!</h2>
          <p>Здесь может быть ваш контент.</p>
        </Modal>
      </div>
      <QuestionsList questions={questions} setQuestions={setQuestions} />
    </div>
  );
}

export default App;
