import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar1"
import FilteredAlbumCard from '../components/FilteredAlbumCard.jsx'
import './App.css'
function MyFaves(){
    const [faveRecords, setFaveRecords] = useState([])

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

        <>
<NavBar />
<h1>My Favorites</h1>
<div className="subRecords">
{mappedFaveRecords}
</div>
</>
    )
}



export default MyFaves

