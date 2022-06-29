import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

function Media(props) {
  const {min,max} = props
 
  return (
    <Card title="Media de Numeros">
      <div className="Media">
        <span>
          <span>Resultado: </span>
          <br></br>
          <strong>{(max + min ) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}
function mapStateToProps(state){
return{
  min : state.numeros.min,
  max : state.numeros.max
}
}

export default connect(mapStateToProps)(Media) ;
