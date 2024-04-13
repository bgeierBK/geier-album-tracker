import {useState} from 'react'

function Search({records, setRecords}){
const [decade, setDecade] = useState("")

function handleDecadeChange(event){
    setDecade(event.target.value)
    console.log(decade)
}

    function handleSearch(event){
    event.preventDefault();
    console.log(records)
    const filteredRecords = records.filter(record => record.decade === decade)
    setRecords(filteredRecords)
}

return(
<>
<p>Search by Decade:</p>

<form onSubmit={handleSearch}>

            <select name="decade"
            onChange={handleDecadeChange}>
                <option value="80s">80s</option>
                <option value="90s">90s</option>
                <option value="00s">00s</option>
                <option value="10s">10s</option>
                <option value="20s">20s</option>
            </select>
            <input
            type="submit"
            value="Search"
            />

</form>
</>
)
}

export default Search