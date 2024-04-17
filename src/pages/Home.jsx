import { useState, useEffect } from 'react'
import NavBar from "../components/NavBar1"
import AlbumContainer from "../components/AlbumContainer"
import AddAlbum from "../components/AddAlbum1"
import Search from "../components/Search"
import './App.css'

function Home() {

  const [records, setRecords] = useState([])
  const [originalRecords, setOriginalRecords]= useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() =>{
    fetch("http://localhost:3000/records")
    .then(response => response.json())
    .then(data => setOriginalRecords(data))
}, [])


  
  return (
<div className={darkMode == true ? "homeDark" : "homeLight"}>
<div id="homePage" >
<div id="homeNav">
<NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
<h1 className={darkMode == true ? "nameDark" : "nameLight"}>Emo Archive</h1>
</div>
    <div id="homeSearch">
    <Search records={records} setRecords={setRecords} darkMode={darkMode} originalRecords={originalRecords} />
    </div>
    <div id="homeContainer">
    <AlbumContainer records={records} setRecords={setRecords} darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
    <div id="homeAdd">
    <AddAlbum records={records} setRecords={setRecords} darkMode={darkMode}/>
    </div>
    </div>
    </div>

  )
    
  
}

export default Home
