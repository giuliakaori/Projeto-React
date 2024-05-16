import Toolbar from './Toolbar';
import Gallery1 from './Gallery1';
import Counter from './Counter';
import Form from './Form';
import MovingDot from './MovingDot';
import Form2 from './Form2';
import { Link } from "react-router-dom";

export default function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <>
            <Toolbar/>
            <br/>
            <Gallery1/>
            <br/>
            <Counter/>
            <br/>
            <Form/>
            <br/>
            <MovingDot/>
            <br/>
            <Form2/>
            </>
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
