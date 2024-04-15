import {useState} from 'react'

function Album({record}){
const [content, setContent] = useState(true)

  
function handleChange(){
    setContent(!content)
}
    return(
      
      <>
      <div id="subRecord" onClick={handleChange}>
      {
    content == true
    ?
            <img src={record.cover} alt={record.title}/>
        :
        <>
            <h2>{record.artist}</h2>
            <h3>{record.title}</h3>
            <h4>Produced by {record.producer}</h4>
            <h4>Released in {record.year} on {record.label}</h4>
           
        </>
      }
        </div>
    
    </>
    )
}

export default Album