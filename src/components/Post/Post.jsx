import styles from "./Post.module.css";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

export const Post = () => {
  return (
    <div className={styles.post}>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://avatars.githubusercontent.com/u/33493699?v=4" />
            <div className={styles.authorInfo}>
              <strong>Estevam Morais</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time
            title="January 8, 2023 at 11:23 am"
            dateTime="2022-08-01 11:28:31"
          >
            Posted 1 hour ago
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a>
            <a href="#">#nlw</a>
            <a href="#">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Your Feedback</strong>
          <textarea placeholder="Your comment..." />
          <footer>
            <button type="submit">Publish</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </div>
  );
};
