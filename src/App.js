import React from "react";
import "./index.css";
import Historia from "./components/Historia";
import data from "./components/data.json";
import Opciones from "./components/Opciones";
import Respuestas from "./components/Respuestas";

let respuestas = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1,
      historia: null,
      opcionA: null,
      opcionB: null,
      dato: data[i],
      letra: null,
      count: 0,
    };
  }
  // componentWillMount(){
  //   this.setState({i:0})
  //     this.setState({dato:data[this.state.i]})
  // }

  componentWillMount() {
    this.setState({ dato: data[this.state.i] });
    this.handleHistory();
    this.handleOptions();
    console.log("1");
    // this.setState({dato:data});
  }

  componentDidUpdate(prevState) {
    respuestas.push(this.state.letra);
  }

  // preventDef(e){
  //   e.preventDefaul
  // }
  next = () => {
    this.setState({ dato: data[this.state.i] });
    this.handleHistory();
    this.handleOptions();
  };
  handleOptions = () => {
    this.setState({ opcionA: this.state.dato.opciones.a });
    this.setState({ opcionB: this.state.dato.opciones.b });
  };

  handleAnswerA = () => {
    this.setState({ opcion: this.state.opcionA });
    this.setState({ letra: "A" });
    this.putAnserws();
    this.setState({ i: this.state.i + 1 });
    console.log("Seleccionado opcion A");
    this.setState({ count: this.state.count + 1 });
    this.next();
  };

  handleAnswerB = () => {
    this.setState({ opcion: this.state.opcionB });
    this.setState({ letra: "B" });
    this.putAnserws();
    this.setState({ i: this.state.i + 2 });
    console.log("Seleccionado opcion B");
    this.setState({ count: this.state.count + 1 });
    this.next();
  };

  handleHistory = () => {
    this.setState({ historia: this.state.dato.historia });
  };

  busquedaHistoria = () => {};

  putAnserws = () => {
    let opcion = this.state.letra;
    respuestas.push(this.state.letra);
  };
  render() {
    console.log(this.state.dato);
    // return this.state.respuestas.length=1?
    return this.state.count < 8 ? (
      <div className="layout">
        <Historia historia={this.state.historia} />
        <div className="opciones">
          <Opciones
            handleAnswerA={this.handleAnswerA}
            handleAnswerB={this.handleAnswerB}
            opcionA={this.state.opcionA}
            opcionB={this.state.opcionB}
          />
        </div>
        <div className="recordatorio">
          <Respuestas list={respuestas} letra={this.state.letra} />
        </div>

        <h1 className="historia">{this.state.i}</h1>
      </div>
    ) : (
      alert("Bye bye")
    );
  }
}
export default App;
