import Componente from "./Componente";
import Profile from './Gallery';
import Scientist from './Scientist';
import Avatar from './Avatar';
import Avatar1 from './Avatar1';
import NameDate from './NameDate';
import Person from './Person';
import Person1 from './Person1';
import Avatar2 from './Avatar2';
import Avatar3 from './Avatar3';
import Children from './Children';
import Item from './Item';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import Item5 from './Item5';
import Item6 from './Item6';
import People from './People';
import Persons from './Persons';
import Recipe from './Recipe';
import Cup from './Cup';
import Teacup1 from './Teacup1';
import Tea from './Tea';

import { Link } from "react-router-dom";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Componente/>
            <Profile/>
            <Scientist/>
            <Avatar/>
            <Avatar1/>
            <NameDate/>
            <Person/>
            <Person1/>
            <Avatar2/>
            <Avatar3/>
            <Children/>
            <Item/>
            <Item1/>
            <Item2/>
            <Item3/>
            <Item4/>
            <Item5/>
            <Item6/>
            <People/>
            <Persons/>
            <Recipe/>
            <Cup/>
            <Teacup1/>
            <Tea/>
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
