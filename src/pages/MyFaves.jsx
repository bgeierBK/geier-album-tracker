import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar1"
import FilteredAlbumCard from '../components/FilteredAlbumCard.jsx'
import './App.css'
function MyFaves(){
    const [faveRecords, setFaveRecords] = useState([])
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() =>{
        fetch("http://localhost:3000/records")
        .then(response => response.json())
        .then(data => setFaveRecords(data))
    }, [])

    const filteredFaveRecords = faveRecords.filter(record => record.favorite === true)

    console.log(filteredFaveRecords)

    const mappedFaveRecords = filteredFaveRecords.map(record =>{
        return <FilteredAlbumCard key={record.id} record={record}/>
    })
    
    
    return(

        <div className={darkMode == true ? "favePageDark" : "favePageLight"} >
<NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
<h1 className={darkMode == true ? "faveHeadDark" : "faveHeadLight"}>My Favorites</h1>
<div className="subRecords">
{mappedFaveRecords}
</div>
</div>
    )
}



export default MyFaves

