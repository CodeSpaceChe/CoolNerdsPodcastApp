const NowPlaying = ({show, season, setSeason, favourites, updateFavourites}) => {

  return (
    <>
      <button 
        onClick={updateFavourites} 
        className={favourites.includes(show.id) ? 'green' : 'white'}>
          Click Me!
      </button>
      <div>
        {show.seasons ? 
        show.seasons.map((v, i) => 
          <button 
            onClick={() => setSeason(i)} 
            key={i}
            className={(i === season) ? 'green' : 'white'}
            >{i + 1}
          </button>) : 
          "Loading..."
        }
      </div>
      <div>
        {show.seasons ? 
        <img src={show.seasons[season].image} className="preview-image"/> : 
        "Loading..."}
      </div>
    </>
  )
}

export default NowPlaying