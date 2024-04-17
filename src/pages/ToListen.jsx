import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar1"
import FilteredAlbumCard from '../components/FilteredAlbumCard.jsx'
function MyFaves(){
    const [toListenRecords, setToListenRecords] = useState([])
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() =>{
        fetch("http://localhost:3000/records")
        .then(response => response.json())
        .then(data => setToListenRecords(data))
    }, [])

    const filteredRecords = toListenRecords.filter(record => record.toListen === true)


    const mappedToListenRecords = filteredRecords.map(record =>{
        return <FilteredAlbumCard key={record.id} record={record} darkMode={darkMode}/>
    })
    
    
    return(

<div className={darkMode == true ? "favePageDark" : "favePageLight"} >
<NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
<h1 className={darkMode == true ? "faveHeadDark" : "faveHeadLight"}>Listening Queue</h1>
<div className="subRecords">
{mappedToListenRecords}
</div>
</div>
    )
}



export default MyFaves

