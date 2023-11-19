
import "../data/o_que_e_diabete.json"
import '../content/styles/diabetes.css'

const diabetes = {
    "explicacao": "Diabetes é uma condição crônica na qual o corpo não consegue regular adequadamente os níveis de glicose (açúcar) no sangue."
}
  

const DiabeteCard = () => {


    return (
        <div className="diabetes-card">
            <p className="title">O que é diabetes?</p>
            <p className="ontitle">{diabetes.explicacao}</p>
        </div>
    );
};


export default DiabeteCard;