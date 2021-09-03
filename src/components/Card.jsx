import React, { useState } from "react";
function Card(props) {
  const { nameRate, priceRate, numberMb } = props;
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(!selected);
  };
  return (
    <div
      onClick={handleChange}
      className={"card" + (selected ? " selected" : "")}
    >
      <div className="card-header">
        <h4 className="card-name">{nameRate}</h4>
      </div>
      <div className="card-body">
        <div className="card-price">
          <strong>{priceRate}</strong> руб/мес
        </div>
        <div className="card-speed">до {numberMb} Мбит/сек</div>
      </div>
      <div className="card-footer">
        <p className="card-volume">Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}
export default Card;
