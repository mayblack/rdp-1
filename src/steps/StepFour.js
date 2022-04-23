import {useState} from 'react';

export const StepFour = ({ goToNext }) => {
    const [hairColor, setHairColor] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            goToNext({ hairColor });
        }}>
            <h1>Step 4</h1>
            <input type="text" placeholder="Hair color" value={hairColor} onChange={event => {
                setHairColor(event.target.value);
            }}/>
            <button type="submit">Next</button>
        </form>
    );
}
