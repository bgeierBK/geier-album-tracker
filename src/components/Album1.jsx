import {useState} from 'react'

function Album({record, records, setRecords}){
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
      
      <>
      <div className="record" onClick={handleChange}>
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
        <div className="buttons">
           {
              record.favorite==true
              ?
              <button onClick={handleFavorite}>❤️</button>
              :
              <button onClick={handleFavorite}>🤍</button>
            }
            {
              record.toListen== true
              ?
              <button onClick={handleListen}>It's in your queue!</button>
              :
              <button onClick={handleListen}>Add to listening queue</button>
            }
        </div>
    
    </>
    )
}

export default Album