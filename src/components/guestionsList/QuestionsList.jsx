import { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import QuestionItem from "../questionItem/QuestionItem";
import styles from "./QuenstionsList.module.css";
import data from "../../data";

const QuestionsList = ({ questions, setQuestions }) => {
  if (!questions || !Array.isArray(questions)) {
    return null;
  }
  const [questionsData, setQuestionsData] = useState(questions);

  useEffect(() => {
    setQuestionsData(questions);
  }, [questions]);

  // ---------------------------------------------------------

  const filteredHtml = () => {
    const result = questions.filter((item) => item.type === "html"); //||"css"||"react"
    setQuestionsData(result);
  };

  // ---------------------------------------------------------
  const filteredCss = () => {
    const result = questions.filter((item) => item.type === "css");
    setQuestionsData(result);
  };
  const filteredJS = () => {
    const result = questions.filter((item) => item.type === "js");
    setQuestionsData(result);
  };
  const filteredReact = () => {
    const result = questions.filter((item) => item.type === "react");
    setQuestionsData(result);
  };
  const AllQuestions = () => {
    setQuestionsData(data);
  };
  const deleteAllQuestions = () => {
    setQuestions([]);
    console.log("delete all questions");
  };

  // ---------------------------------------------------------

  return (
    <div className={styles.listContainer}>
      <div className={styles.buttons}>
        <Button onClick={filteredHtml}>Filter HTML</Button>
        <Button onClick={filteredCss}>Filter CSS</Button>
        <Button onClick={filteredJS}>Filter JS</Button>
        <Button onClick={filteredReact}>Filter REACT</Button>
        <Button onClick={AllQuestions}>All Questions</Button>
        <Button onClick={deleteAllQuestions}>Delete All Questions</Button>
      </div>

      <div className={styles.questionsList}>
        {questionsData.map(({ id, question, type }, index) => {
          return (
            <QuestionItem
              key={id}
              questionsData={questionsData}
              index={index}
              id={id}
              type={type}
              question={question}
              setQuestionsData={setQuestionsData}
            />
          );
        })}
      </div>
    </div>
  );
};
export default QuestionsList;
