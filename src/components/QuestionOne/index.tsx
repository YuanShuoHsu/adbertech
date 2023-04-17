import styles from "./index.module.scss";

import questionOne from "../../images/questionOne.png";

export default function QuestionOne() {
  const renderCode = `import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";`;

  return (
    <div className={styles.questionOne}>
      <h2 className={styles.questionOne__title}>程式理解題</h2>
      <ol className={styles.questionOne__list}>
        <strong>
          <li className={styles["questionOne__list-item"]}>
            請使⽤ Materail-UI 中的 Button group，做出三個按鈕。(⽤ redux
            方法實作加分)
          </li>
        </strong>
      </ol>
      <div className={styles.questionOne__container}>
        <span className={styles.questionOne__text}>樣式如下：</span>
        <div className={styles["questionOne__image"]}>
          <img src={questionOne} alt="buttonGroup" />
        </div>
      </div>
      <p className={styles.questionOne__text}>需求：</p>
      <ol className={styles.questionOne__list}>
        <li className={styles["questionOne__list-item"]}>
          CLICK:0 按鈕中的數字，請⽤ useState 處理該值，按下按鈕時讓數字 +1。
        </li>
        <li className={styles["questionOne__list-item"]}>
          按下 CLEAR 按鈕，讓 useState 中的值歸零。
        </li>
        <li className={styles["questionOne__list-item"]}>
          按下 DISABLE 按鈕，讓最上⾯的 CLICK 按鈕失效，並且讓 DISABLE 變
          ABLE；按鈕顯⽰示 ABLE 時，按下則會讓 CLICK 按鈕恢復成可按，並帶有 +1
          功能的⽣效狀態。
        </li>
      </ol>
      <p className={styles.questionOne__text}>
        <strong>
          注意：請使⽤ ButtonGroup 的 CSS API 來調整樣式及完成 disable 功能。
        </strong>
      </p>
      <pre className={styles.questionOne__code}>
        <code className={styles["questionOne__code-text"]}>{renderCode}</code>
      </pre>
    </div>
  );
}
