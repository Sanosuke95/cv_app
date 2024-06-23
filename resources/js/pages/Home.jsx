import { useState } from "react";
import axios from 'axios';

function Home(props) {
    const [color, setColor] = useState('red');
    axios.get('contact').then(function (response) {
        console.log('Les élément qui sont utilisé');
        console.log(response);
        console.log(localStorage.getItem('token'));
        console.log('Fin des élément');
    }).catch(function (error) {
        console.log(error);
    });

    return (
        <>
            <h1>Home Page</h1>
            <p>My color is {color}</p>
            <button type='button' onClick={() => setColor('blue')}>{color}</button>
        </>
    );
}

export default Home;