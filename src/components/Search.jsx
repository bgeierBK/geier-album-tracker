import {useState} from 'react'

function Search({records, setRecords, darkMode, originalRecords}){
const [decade, setDecade] = useState(records)



function handleSearch(event){
    event.preventDefault();
    const decade = event.target.value
    console.log(decade)
    if (decade === "All"){
        setRecords(originalRecords)
    } else {
    
    const filteredRecords = originalRecords.filter(record => record.decade === decade)
    setRecords(filteredRecords)   
    }
}



return(
<div id="search">
<p className={darkMode == true ? "searchHeadDark" : "searchHeadLight"}>Search by Decade:</p>

<form onChange={handleSearch} >

            <select name="decade"
>
                <option value="All">All</option>
                <option value="80s">80s</option>
                <option value="90s">90s</option>
                <option value="00s">00s</option>
                <option value="10s">10s</option>
                <option value="20s">20s</option>
            </select>

</form>
</div>
)
}

export default Search