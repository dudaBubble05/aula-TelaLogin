import estilo from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={estilo.rodape}>
            <p>Desenvolvimento por: Aula Reach</p>
            <p>Copyright</p>
        </footer>
    )
}

export default Rodape;