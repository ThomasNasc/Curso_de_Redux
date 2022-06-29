import React from "react";
import Card from "./Card";
import { connect } from "react-redux/es/exports";
function Soma(props) {
  const {min,max} = props
  return (
    <Card title="Soma de Numeros">
      <div className="Soma">
        <span>
          <span>Resultado</span>
          <br></br>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);
