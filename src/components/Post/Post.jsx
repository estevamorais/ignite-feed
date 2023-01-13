import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

export const Post = ({ author, content, publishedAt }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "LLLL d',' 2023 'at' HH:mm"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <div className={styles.post}>
      <article>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            Posted {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((item) => {
            if (item.type === "paragraph") {
              return <p>{item.content}</p>;
            } else if (item.type === "link") {
              return (
                <p>
                  <a href="#">{item.content}</a>
                </p>
              );
            }
          })}
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
