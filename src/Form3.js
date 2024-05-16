import { useState } from "react";

export default function Form3() {
    const [person,setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/SdlAgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person.artwork,
            name: e.target.value
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person.artwork,
            name: e.target.value
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person.artwork,
            name: e.target.value
        });
    }

    return (
        <>
        <label>
            Name:
            <input
            value={person.name}
            onChange={handleNameChange}
            />
        </label>
        <label>
            Title:
            <input
            value={person.artwork.title}
            onChange={handleTitleChange}
            />
        </label>
        <label>
            City:
            <input
            value={person.artwork.city}
            onChange={handleCityChange}
            />
        </label>
        <label>
            Image:
            <input
            value={person.image}
            onChange={handleImageChange}
            />
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {'by'}
            {person.name}
            <br/>
        </p>
        <img
        src={person.artwork.image}
        alt={person.artwork.title}
        />
        </>
    );
}