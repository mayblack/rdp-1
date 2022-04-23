import {useState} from 'react';

export const StepTwo = ({ goToNext }) => {
    const [age, setAge] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            goToNext({ age });
        }}>
            <h1>Step 2</h1>
            <input type="number" placeholder="Age" value={age} onChange={event => {
                setAge(event.target.value);
            }}/>
            <button type="submit">Next</button>
        </form>
    );
}
