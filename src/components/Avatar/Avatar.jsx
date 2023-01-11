import styles from "./Avatar.module.css";

export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img
      className={
        hasBorder
          ? `${styles.avatar} ${styles.avatarWithBorder}`
          : styles.avatar
      }
      src={src}
    />
  );
};
