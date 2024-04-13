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
<NavBar/>
    <h2>Nothing feels good</h2>
    <Search />
    <AlbumContainer records={records} setRecords={setRecords} />
    <AddAlbum records={records} setRecords={setRecords}/>
    </>

  )
    
  
}

export default Home
