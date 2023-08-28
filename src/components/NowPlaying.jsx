const NowPlaying = ({show, season, setSeason}) => {

  return (
    <>
      <div>
        {show.seasons ? 
        show.seasons.map((v, i) => <button onClick={() => setSeason(i)} key={i}>{i + 1}</button> ) : 
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