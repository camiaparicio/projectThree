import { useState } from 'react';

function PhotoForm(props){

    const [userChoice, setUserChoice] = useState('placeholder')

    // create a function that will update state when the user selects a new option
    const handleUserChoice = (e) => {
        setUserChoice(e.target.value)
    }

    return(
        // <form onSubmit={props.getPhotos}>
        <form onSubmit={(e) => props.getPhotos(e, userChoice)}> 


            <h2>Show me some photos that are:</h2>
            <select 
            id="photoOrientation" 
            name="photoOrientation"
            onChange={handleUserChoice}
            value={userChoice}
            // value="landscape"
            >
                <option value="placeholder" disabled>Pick one:</option>
                <option value="square">square-ish</option>
                <option value="landscape">landscape</option>
                <option value="portrait">portrait</option>
            </select>
            <button type="submit">Give me photos!</button>
        </form>
    )
}

export default PhotoForm;