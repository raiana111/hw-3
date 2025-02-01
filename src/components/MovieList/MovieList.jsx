// import styles from './styles.module.css'
// const MovieList = (props) => {
//   return (
//     <div className={styles.wrapper}>
//       {props.movies.map((movie, index) => (
//         <div key={index}>
//           {`${index + 1}. ${movie.name}`}
//           <div className={styles.buttonsWrapper}>
//             <input type={'checkbox'} onChange={() => props.toggleWatched(index)}
//             checked={movie.watched}/>
//             <button className={styles.editButton} onClick={() => props.handleEditMovie
//             (index)}>Edit</button>
//             <button className={styles.deleteButton} onClick={() => props
//             .handleDeleteMovie(index)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div> 
//   );
// };

// export default MovieList;

// import styles from './styles.module.css';

// const MovieList = (props) => (
//   <div className={styles.wrapper}>
//     {props.movies.map((movie, index) => (
//       <div key={index}>
//         {`${index + 1}. ${movie.name}`}
//         <div className={styles.buttonsWrapper}>
//           <input type={'checkbox'} onChange={() => props.toggleWatched(index)} 
//             checked={movie.watched}/>
//           <button className={styles.editButton} onClick={() => props.handleEditMovie
//           (index)}>Edit</button>
//           <button className={styles.deleteButton} onClick={() => props.handleDeleteMovie(index)}>Delete</button>
//           {movie.watched && (
//             <div className={styles.likeDislikeWrapper}>
//               <button className={styles.likeButton} onClick={() => props.toggleLike(index)}>
//                 👍 {movie.liked ? "Liked" : "Like"}</button>
//               <button className={styles.dislikeButton} onClick={() => props.toggleDislike(index)}>
//                 👎 {movie.disliked ? "Disliked" : "Dislike"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default MovieList;

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


// import styles from './styles.module.css';
// import LikeDislike from '../LikeDislike/LikeDislike';

// const MovieList = (props) => {
//   return (
//     <div className={styles.wrapper}>
//       {props.movies.map((movie, index) => (
//         <div key={index}>
//           {`${index + 1}. ${movie.name}`}
//           <div className={styles.buttonsWrapper}>
//             <input
//               type="checkbox"
//               onChange={() => props.toggleWatched(index)}
//               checked={movie.watched}
//             />
//             <button className={styles.editButton} onClick={() => props.handleEditMovie(index)}>
//               Edit
//             </button>
//             <button className={styles.deleteButton} onClick={() => props.handleDeleteMovie(index)}>
//               Delete
//             </button>
//           </div>
//           {movie.watched && (
//             <LikeDislike
//               liked={movie.liked}
//               disliked={movie.disliked}
//               onLike={() => props.handleLikeMovie(index)}
//               onDislike={() => props.handleDislikeMovie(index)}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;