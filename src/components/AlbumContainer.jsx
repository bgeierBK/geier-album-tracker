import {useState, useEffect } from 'react'
import '../pages/App.css'
import Album from './Album1.jsx'

function AlbumContainer({records, setRecords, darkMode, setDarkMode}){
    

    useEffect(() =>{
        fetch("http://localhost:3000/records")
        .then(response => response.json())
        .then(data => setRecords(data))
    }, [])

    const mappedRecords = records.map(record =>{
    return <Album key={record.id} record={record} records={records} setRecords={setRecords} darkMode={darkMode} setDarkMode={setDarkMode}  />
})



return (
       <div id="records">
        {mappedRecords}
        </div>
      
)
    
}

export default AlbumContainer