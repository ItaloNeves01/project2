import React from 'react';
import { useState } from 'react';
import GlicoseCard from '../content/GlicoseCard';
import DiabeteCard from '../content/DiabetesCard';
import AlimentacaoCard from '../content/AlimentacaoCard';
import './Home.css'
import Informativo from '../informativo/Informativo'; // Certifique-se de que este import está correto

function Home() {

    const [mostrarInformacoes, setMostrarInformacoes] = useState(true);

    const exibirInformacoes = () => {
        setMostrarInformacoes(true);
    };

    const exibirInformativos = () => {
        setMostrarInformacoes(false)
    }

    return (
        <>
            <div className="head">
                <p>CAD: Controle a Diabetes</p>
            </div>

            <div className='buttons'>
                <button onClick={exibirInformacoes}>inicio</button>
                <button onClick={exibirInformativos}>informativos</button>
            </div>

            {mostrarInformacoes ? (
                <div className='informacoes'>
                    <GlicoseCard />
                    <DiabeteCard />
                    <AlimentacaoCard />
                </div>
            ) : (
                <div className='informativo'>
                    <Informativo />
                </div>
            )}
        </>
    );
}

export default Home;
