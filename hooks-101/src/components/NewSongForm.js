import React, { useState } from 'react';

const NewSongForm= ( {addSong} ) => {
    const [title, setTitle] = useState('');  //initial value in useState() is an empty string
    const handleSubmit= (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');  
        //state is reassigned to empty string 
        //will clear the input field after form is submitted as value attribute in input field is set to {title} state which is empty now
    }
    return (
        <form onSubmit={handleSubmit} >
            <label> Song Name: </label>
            <input type="text" value={title} required onChange={ (e) => setTitle(e.target.value ) } /> 
            <input type="submit" value="Add to list" />
        </form>

    )
}

export default NewSongForm;

//e.target.value gives the data present in the input field at that time