import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/33493699?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Estevam Morais</strong>
              <time
                title="January 8, 2023 at 11:23 am"
                dateTime="2022-08-01 11:28:31"
              >
                1 hour ago
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>22</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
