import React from 'react';

function Profile() {
    return (
        <img src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Jonhson'/>
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}