import { Button } from "./Button";

import { useMovieLister } from "../contexts/MovieContext";

import '../styles/sidebar.scss';


export function SideBar() {
  const { genres, selectedGenreId, selectGenre } = useMovieLister();


  function handleClickButton(id: number) {
    selectGenre(id);
  }

  return(

    <nav className="sidebar">
      
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}