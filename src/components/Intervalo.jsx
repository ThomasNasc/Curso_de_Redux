import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux/es/exports";
import { changeMin, changeMax } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Numeros">
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMin(e.target.value)}
          />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMax(e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    alterarMin(novoNumero) {
      let action = changeMin(novoNumero);
      dispatch(action);
    },
    alterarMax(novoNumero) {
      let action = changeMax(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
