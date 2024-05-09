import React from "react";

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat (
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <h1>{name}'s To Do List {formatDate(today)}</h1>
    );
}