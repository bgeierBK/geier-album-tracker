import {useState, useEffect } from 'react'
import '../pages/App.css'
import Album from './Album1.jsx'

function AlbumContainer({records, setRecords}){
    

    useEffect(() =>{
        fetch("http://localhost:3000/records")
        .then(response => response.json())
        .then(data => setRecords(data))
    }, [])

    const mappedRecords = records.map(record =>{
    return <Album key={record.id} record={record} records={records} setRecords={setRecords} />
})



return (
       <div id="records">
        {mappedRecords}
        </div>
      
)
    
}

export default AlbumContainer