import React from "react";
import './styles/informativoCard.css'

const InformativoCard = ({ title, onClick }) => {
    return (
        <>
            <div className="infoCard" onClick={onClick}>
                <p>{title}</p>
            </div>
        </>
    );
};

export default InformativoCard;
