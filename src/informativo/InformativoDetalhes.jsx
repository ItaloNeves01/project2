import React from "react";
import './styles/informativoDetalhes.css'

const InformativoDetalhes = ({ title, content, close }) => {
    return (
        <>
        <div className="infoDetalhes" onClick={close}>
        <div className="infoDetalhes-card" onClick={close}>
                <p>{content}</p>
            </div>
        </div>

        </>
    );
};

export default InformativoDetalhes;
