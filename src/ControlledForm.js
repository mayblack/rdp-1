import { useState, useEffect } from 'react';

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Name must be 2 or more characters');
        } else {
            setNameInputError('');
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p style={{color: 'darkred'}}>{nameInputError}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} autoComplete="off"/>
            <input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(Number(e.target.value))}/>
            <input name="color" type="text" placeholder="Color" value={hairColor} onChange={e => setHairColor(e.target.value)}/>
            <button type="button">Submit</button>
        </form>
    )
}
