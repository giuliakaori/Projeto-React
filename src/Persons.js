import React from "react";
import { people } from "./Data";
import getImageUrl from "./Utils1";

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
        <li>
            <img src={getImageUrl(person)} alt={person.name}/>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}
