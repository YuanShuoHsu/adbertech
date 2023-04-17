import styles from "./index.module.scss";

export default function QuestionTwo() {
  return (
    <div className={styles.questionTwo}>
      <ol className={styles["questionTwo__titleList"]}>
        <strong>
          <li className={styles["questionTwo__titleList-item"]} />
          <li className={styles["questionTwo__titleList-item"]}>
            請使⽤原生 html, css, js 製作⼀個前端頁面，需求如下。
          </li>
        </strong>
        <ol className={styles.questionTwo__subList}>
          <li className={styles["questionTwo__subList-item"]}>
            請模仿附檔影片 video.mov 製作⼀個前端頁面。
          </li>
          <li className={styles["questionTwo__subList-item"]}>
            下方 div 寬高比為 1024*640。
          </li>
          <li className={styles["questionTwo__subList-item"]}>
            最後⾯背景為 article.jpg（如附檔）、下方背景圖為
            background.png（如附檔）、圓形圖為 circle.png（如附檔）。
          </li>
          <li className={styles["questionTwo__subList-item"]}>
            請使圓形圖依據使用者滑動距離旋轉，旋轉角度計算公式為（滑動距離 *
            0.1）度。
          </li>
        </ol>
      </ol>
    </div>
  );
}
