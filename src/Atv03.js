import Componente from "./Componente";
import { Link } from "react-router-dom";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Componente/>
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
