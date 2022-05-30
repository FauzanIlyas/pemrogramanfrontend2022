/* eslint-disable react-hooks/exhaustive-deps */
// import styles from "./Hero.module.css";
import StyledHero from "./Hero.Styled";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  }

  /**
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
  useEffect(fetchMovie, []);

  // Tampilkan state movie.
  console.log(movie);

//   return (
//     <div className={styles.container}>
//       <section className={styles.hero}>
//         <div className={styles.hero__left}>
//           <h2 className={styles.hero__title}>{movie.Title}</h2>
//           <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
//           <p className={styles.hero__description}>{movie.Plot}</p>
//           <Button>Watch</Button>
//         </div>
//         <div className="hero__right">
//           <img
//             className={styles.hero__image}
//             src={movie.Poster}
//             alt="placeholder"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

return (
  <StyledHero>
    <section>
      <StyledHero>
        <h2>{movie.Title}</h2>
        <h3>
          Genre: {movie.Genre}
        </h3>
        <p>
        {movie.Plot}
        </p>
        <Button variant="primary">Watch Movie</Button>
      </StyledHero>
      <StyledHero>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />
      </StyledHero>
    </section>
  </StyledHero>
);
}

export default Hero;
