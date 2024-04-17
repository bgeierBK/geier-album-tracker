import {useState} from 'react'
import '../pages/App.css'

function Album({record, darkMode}){
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
        <div className={darkMode == true ? "subCardDark": "subCardLight"}>
            <h2>{record.artist}</h2>
            <h3>{record.title}</h3>
            <h4>Produced by {record.producer}</h4>
            <h4>Released in {record.year} on {record.label}</h4>
           
        </div>
      }
        </div>
    
    </>
    )
}

export default Album