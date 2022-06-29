import "./App.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
function App() {


  return (
    <div className="App">
      <h1>Exercicio Redux </h1>
      <Intervalo />
      <div className="linha">
        <Media   title="Media ">Y</Media>
        <Soma  title="Soma">Y</Soma>
        <Sorteio  title="Sorteio ">Y</Sorteio>
      </div>
    </div>
  );
}

export default App;
