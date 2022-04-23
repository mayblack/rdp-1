import {useState} from 'react';

export const StepOne = ({ goToNext }) => {
    const [name, setName] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
            goToNext({ name });
        }}>
            <h1>Step 1</h1>
            <input type="text" placeholder="Name" value={name} onChange={event => {
                setName(event.target.value);
            }}/>
            <button type="submit">Next</button>
        </form>
    );
}
