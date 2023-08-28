const NowPlaying = ({show, season, setId, setSeason}) => {

  return (
    <>
      <div>
        {show.seasons ? 
        show.seasons.map((v, i) => <button onClick={() => setSeason(i)}>{i + 1}</button> ) : 
        "Loading..."}
      </div>
      <div>
        {show.seasons ? 
        <img src={show.seasons[season].image} /> : 
        "Loading..."}
      </div>
    </>
  )
}

export default NowPlaying