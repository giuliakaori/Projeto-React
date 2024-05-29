import Projeto from "./Projeto";
import { Link } from "react-router-dom";

export default function Atv01() {
    return (
        <>
            <h1>Atividade 05</h1>
            <Projeto/>
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    );
}
