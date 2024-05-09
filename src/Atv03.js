import Componente from "./Componente";
import { Link } from "react-router-dom";

export default function Atv02() {
    return (
        <>
            <h1>Atividade 02</h1>
            <Componente/>
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
