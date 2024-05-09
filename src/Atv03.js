import Componente from "./Componente";
import Profile from './Gallery';
import Scientist from './Scientist';
import User from './Componente';
import Avatar from './Avatar';
import Avatar1 from './Avatar1';
import NameDate from './NameDate';
import Person from './Person';
import Person1 from './Person1';
import Avatar2 from './Avatar2';
import Avatar3 from './Avatar3';
import { Link } from "react-router-dom";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Componente/>
            <User/>
            <Profile/>
            <Scientist/>
            <Avatar/>
            <Avatar1/>
            <NameDate/>
            <Person/>
            <Person1/>
            <Avatar2/>
            <Avatar3/>
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
