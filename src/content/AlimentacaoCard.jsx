import "../data/alimentacao_saudavel.json"
import '../content/styles/alimentacao.css'
const alimentacao = {
    "planejamento": "Uma refeição equilibrada deve incluir proteínas magras, vegetais, grãos integrais e porções controladas de carboidratos.",
    "contagem_carboidratos": "Saiba quantos carboidratos estão em seus alimentos e ajuste a insulina conforme necessário."
}

  

const AlimentacaoCard = ({planejamento, contagemCarboitrados}) => {
    return(
        <div className="alimentacaocard">
            <p className="title">Alimentação saudavel</p>
            <p className="ontitle"> <strong>Planejamento:</strong> {alimentacao.planejamento} </p>
            <p className="twoti"><strong> Contagem de Carboidratos </strong> {alimentacao.contagem_carboidratos} </p>
        </div> 
    )
}


export default AlimentacaoCard;