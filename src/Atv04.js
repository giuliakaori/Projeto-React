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
