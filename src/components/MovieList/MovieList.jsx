import styles from './styles.module.css';
import LikeDislike from '../LikeDislike/LikeDislike.jsx';

const MovieList = ({ movies, handleEditMovie, handleDeleteMovie, toggleWatched, toggleLike, toggleDislike }) => {
  return (
    <div className={styles.wrapper}>
      {movies.map((movie, index) => (
        <div key={index}>
          {`${index + 1}. ${movie.name}`}
          <div className={styles.buttonsWrapper}>
            <input type="checkbox" onChange={() => toggleWatched(index)} 
              checked={movie.watched}/>
            <button className={styles.editButton} onClick={() => handleEditMovie
            (index)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => handleDeleteMovie
            (index)}>Delete</button>
            {movie.watched && (
              <LikeDislike 
                liked={movie.liked}
                disliked={movie.disliked}
                onLike={() => toggleLike(index)}
                onDislike={() => toggleDislike(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;