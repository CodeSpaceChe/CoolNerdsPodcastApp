const Previews = ({previews, setId, setSeason}) => {
    
  return (
    <div>
        {previews.map(preview => 
          <h2 
            onClick={() => {
                    setId(preview.id)
                    setSeason(0)  
                    }}
            key={preview.id}>
              {preview.title}
          </h2>
        )}
    </div>
  )
}

export default Previews