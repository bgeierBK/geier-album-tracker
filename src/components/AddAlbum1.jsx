import {useState} from 'react'

function AddAlbum({records, setRecords}){
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        producer: "",
        year: "",
        label: "",
        cover: "",
        favorite: false,
        owned: false,
        decade: ""
    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const itemData={
        title: formData.title,
        artist: formData.artist,
        producer: formData.producer,
        year: formData.year,
        label: formData.label,
        cover: formData.cover,
        favorite: false,
        owned: false,
        decade: formData.decade
        }
        fetch("http://localhost:3000/records",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",

            },
            body: JSON.stringify(itemData)
        })
        .then(response =>response.json())
        .then(newItem =>{
            setRecords([...records, newItem])
        })
    }

    return(
        
        <form className="add-album" onSubmit={handleSubmit}>
        
            <h2>Don't see your favorite emo record? Add it!</h2>

            <label htmlFor="album_cover">Album Cover:</label>
            <input
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            />
           
            <label htmlFor="album_title">Title:</label>
            <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            />

            <label htmlFor="album_artist">Artist:</label>
            <input
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            />

            <label htmlFor="album_producer">Producer:</label>
            <input
            name="producer"
            value={formData.producer}
            onChange={handleChange}
            />
            
            <label htmlFor="album_year">Year:</label>
            <input
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            />

            <label htmlFor="album_decade">Decade:</label>
            <select name="decade"
            onChange={handleChange}>
                <option value="80s">80s</option>
                <option value="90s">90s</option>
                <option value="00s">00s</option>
                <option value="10s">10s</option>
                <option value="20s">20s</option>
            </select>
            
            <label htmlFor="album_label">Label:</label>
            <input
            name="label"
            value={formData.label}
            onChange={handleChange}
            />

            <input
            type="submit"
            value="Add Your Record"
            />

          
        </form>
    )
}

export default AddAlbum