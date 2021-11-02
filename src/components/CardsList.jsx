import Card from "./Card";
import arrRate from "../arrRate.json";

function CardsList() {
  return (
    <div className="card-container">
      {arrRate.map((rate) => (
        <Card {...rate} />
      ))}
    </div>
  );
}

export default CardsList;
