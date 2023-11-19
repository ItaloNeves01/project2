
import '../data/glicose_no_sangue.json'
import '../content/styles/glicose.css'

const glicoseData = {
    "como_medir": "Use um medidor de glicose para obter uma pequena amostra de sangue.",
    "valores_alvo": "O objetivo é manter a glicose em jejum entre 80-130 mg/dL."
}

const GlicoseCard = () => {
    return (
        <div className="glicose-card">
            <p className='title'>Glicose no Sangue</p>
            <p className='ontitle'><strong>Como medir</strong>: {glicoseData.como_medir}</p>
            <p className='twotitle'> <strong>Valores Alvos: </strong> {glicoseData.valores_alvo} </p>
        </div>
    );
};

export default GlicoseCard;