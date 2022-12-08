const AddMovie = () => {
  return (
    <div className="add-movie">
      <form className="add-movie-form">
        <div>
          <label id="movie-title">Movie Title</label>
          <input type="text" htmlFor="movie-title" name="movie-title"></input>
        </div>

        <div>
          <label id="dircetor">Director</label>
          <input type="text" htmlFor="director" name="director"></input>
        </div>

        <div>
          <label id="actors">Actors</label>
          <input type="text" htmlFor="actors" name="actors"></input>
        </div>

        <div>
          <label id="poster-url">Poster URL</label>
          <input type="text" htmlFor="poster-url"></input>
        </div>

        <div>
          <label id="overview">Overview</label>
          <textarea
            type="textarea"
            htmlFor="overview"
            name="overview"
            rows="6" 
          ></textarea>
        </div>
        <div>
          <button className="add-movie-btn">Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
