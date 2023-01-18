import styles from "./Post.module.css";

import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(["Good joob! 👏👏"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "LLLL d',' 2023 'at' HH:mm"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  const handleCreateNewComment = (e) => {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (e) => {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity("");
  };

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity("This field is required");
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

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
          {content.map((item, i) => {
            if (item.type === "paragraph") {
              return <p key={`item-${i}`}>{item.content}</p>;
            } else if (item.type === "link") {
              return (
                <p key={`item-${i}`}>
                  <a href="#">{item.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Your Feedback</strong>
          <textarea
            placeholder="Your comment..."
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publish
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      </article>
    </div>
  );
};
