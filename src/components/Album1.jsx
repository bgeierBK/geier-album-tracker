import {useState} from 'react'
import '../pages/App.css'

function Album({record, records, setRecords, darkMode, setDarkMode}){
const [content, setContent] = useState(true)


function handleFavorite(){
fetch(`http://localhost:3000/records/${record.id}`,{
method: "PATCH",
headers:{
  'Content-Type': 'application/json',
  'Accept': 'application/json'
},
body: JSON.stringify({favorite: !record.favorite})
})
.then(res => res.json())
.then(updatedRecord =>{
  const updatedRecordList = records.map(record =>{
    if (record.id !== updatedRecord.id){
      return record
    } else {
      return updatedRecord
    }
  })
 setRecords(updatedRecordList)
})
console.log("clicked!")
}

function handleListen(){
  fetch(`http://localhost:3000/records/${record.id}`,{
  method: "PATCH",
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({toListen: !record.toListen})
  })
  .then(res => res.json())
  .then(updatedRecord =>{
    const updatedRecordList = records.map(record =>{
      if (record.id !== updatedRecord.id){
        return record
      } else {
        return updatedRecord
      }
    })
   setRecords(updatedRecordList)
  })
  console.log("clicked!")
  }
  
function handleChange(){
    setContent(!content)
}
    return(
      
      <div id="albumCard">
      <div id="record" onClick={handleChange}>
      {
    content == true
    ?
            <img src={record.cover} alt={record.title} />
        :
        <div className={darkMode == true ? "cardDark": "cardLight"}>
            <h2>{record.artist}</h2>
            <h3>{record.title}</h3>
            <h4>Produced by {record.producer}</h4>
            <h4>Released in {record.year} on {record.label}</h4>
           
        </div>
      }
        </div>
        <div id="buttons" className={darkMode == true ? "buttonDark": "buttonLight"}>
           {
              record.favorite==true
              ?
              <button onClick={handleFavorite} className={darkMode == true ? "likeDark" : "likeLight"}>❤️</button>
              :
              <button onClick={handleFavorite} className={darkMode == true ? "likeDark" : "likeLight"}>🤍</button>
            }
            {
              record.toListen== true
              ?
              <button onClick={handleListen} className={darkMode == true ? "likeDark" : "likeLight"}>It's in your queue! 🎶</button>
              :
              <button onClick={handleListen} className={darkMode == true ? "likeDark" : "likeLight"}>Add to listening queue 🎧</button>
            }
        </div>
    
    </div>
    )
}

export default Album