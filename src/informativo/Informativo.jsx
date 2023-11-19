import { useState } from "react";
import InformativoCard from "./InformativoCard";
import InformativoDetalhes from "./InformativoDetalhes"; // Importe o componente de detalhes
import newsData from "./informativo.json";

function Informativo() {
    const [selectedNews, setSelectedNews] = useState(null);
    const [showDetails, setShowDetails] = useState(false); // Novo estado para controlar a exibição dos detalhes

    const handleCardClick = (news) => {
        setSelectedNews(news);
        setShowDetails(true); // Exibir detalhes ao clicar no card
    };

    const handleCloseDetails = () => {
        setShowDetails(false); // Fechar detalhes ao clicar neles
    };

    return (
        <>
            {newsData.map((news) => (
                <InformativoCard
                    key={news.id}
                    title={news.title}
                    content={news.content}
                    onClick={() => handleCardClick(news)}
                />
            ))}

            {showDetails && selectedNews && (
                <InformativoDetalhes
                    title={selectedNews.title}
                    content={selectedNews.content}
                    close={handleCloseDetails}
                />
            )}
        </>
    );
}

export default Informativo;
