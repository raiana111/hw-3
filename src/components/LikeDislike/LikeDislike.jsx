import styles from './LikeDislike.module.css';

const LikeDislike = ({ liked, disliked, onLike, onDislike }) => {
  return (
    <div className={styles.likeDislikeWrapper}>
      <button className={`${styles.likeButton} ${liked ? styles.active : ''}`} onClick={onLike}>
       {liked ? "Liked" : "Like"}
      </button>
      <button className={`${styles.dislikeButton} ${disliked ? styles.active : ''}`} onClick={onDislike}>
       {disliked ? "Disliked" : "Dislike"}
      </button>
    </div>
  );
};

export default LikeDislike;
