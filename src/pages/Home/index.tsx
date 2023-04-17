import styles from "./index.module.scss";

import QuestionOne from "../../components/QuestionOne";
import Counter from "../../components/Counter";
import QuestionTwo from "../../components/QuestionTwo";

export default function Home() {
  return (
    <div className={styles.home}>
      <QuestionOne />
      <Counter />
      <QuestionTwo/>
    </div>
  );
}
