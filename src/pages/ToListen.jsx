import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar1"
import FilteredAlbumCard from '../components/FilteredAlbumCard.jsx'
function MyFaves(){
    const [toListenRecords, setToListenRecords] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/records")
        .then(response => response.json())
        .then(data => setToListenRecords(data))
    }, [])

    const filteredRecords = toListenRecords.filter(record => record.toListen === true)


    const mappedToListenRecords = filteredRecords.map(record =>{
        return <FilteredAlbumCard key={record.id} record={record}/>
    })
    
    
    return(

        <>
<NavBar />
<h1>My Favorites</h1>
<div className="subRecords">
{mappedToListenRecords}
</div>
</>
    )
}



export default MyFaves

