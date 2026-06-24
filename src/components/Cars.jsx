import '../App.css';
function Card({ model, description }) {
    return (
        <div className="card-container">
        <span className="card">
            <h2>{model}</h2>
            <p>{description}</p>
        </span>
        </div>
    );
}
export default Card;