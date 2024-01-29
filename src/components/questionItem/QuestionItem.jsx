import React, { useState } from "react";
import styles from "./QuestionItem.module.css";
import data from "../../data";
const QuestionItem = ({
  questionsData,
  index,
  id,
  question,
  type,
  setQuestionsData,
}) => {
  // ---------------------------------------------
  const deleteItem = (id) => {
    const result = questionsData.filter((item) => item.id !== id);
    setQuestionsData(result);
    console.log(result);
  };
  // ----------------------------------------------
  return (
    <div className={styles.questionItem} key={index}>
      <p>{question}</p>
      <div className={styles.infoBox}>
        <div>
          <p>{type} </p>
        </div>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default QuestionItem;
