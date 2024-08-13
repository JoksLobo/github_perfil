import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("A matéria A mudou para: " + materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado(a)!</p>
            )
        } else {
            return (
                <p>Você foi reprovado(a)!</p>
            )
        }
    }

    return(
        <form>
            <ul>

                {[1,2,3,4,5].map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;