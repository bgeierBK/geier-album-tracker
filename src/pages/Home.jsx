import { useState } from 'react'
import NavBar from "../components/NavBar1"
import AlbumContainer from "../components/AlbumContainer"
import AddAlbum from "../components/AddAlbum1"
import Search from "../components/Search"
import './App.css'

function Home() {

  const [records, setRecords] = useState([])
  

  
  return (
<>
<div id="homePage">
<div id="homeNav">
<NavBar/>
<h1>Emo Archive</h1>
</div>
    <div id="homeSearch">
    <Search records={records} setRecords={setRecords} />
    </div>
    <div id="homeContainer">
    <AlbumContainer records={records} setRecords={setRecords}  />
    </div>
    <div id="homeAdd">
    <AddAlbum records={records} setRecords={setRecords}/>
    </div>
    </div>
    </>

  )
    
  
}

export default Home
