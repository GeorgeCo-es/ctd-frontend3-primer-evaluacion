import React from "react";
import "./index.css";
import Historia from "./components/Historia";
import data from "./components/data.json";
import Opciones from "./components/Opciones";
import Respuestas from "./components/Respuestas";

let respuestas = [];
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      historia: null,
      opcionA: null,
      opcionB: null,
      dato: data[0],
      data: data,
      letra: "",
    };
    console.log("Construyendo la app");
  }

  componentDidMount() {
    console.log("Haciendo update");
    this.busquedaHistoria("");
    // this.setState({ letra: "a" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.letra != "") {
      respuestas.push(this.state.letra.toUpperCase());
    }
  }
  // preventDef(e){
  //   e.preventDefaul
  // }
  next = (r) => {
    console.log("Next de ejeucion");
    this.busquedaHistoria(r);
    this.handleHistory();
    this.handleOptions();
  };
  handleOptions = () => {
    console.log("Configurando opciones");
    this.setState({
      opcionA: this.state.dato.opciones.a,
      opcionB: this.state.dato.opciones.b,
    });
  };

  handleAnswerA = () => {
    this.setState({
      letra: "a",
    });
    console.log("Seleccionado opcion A");
    this.next("a");
  };

  handleAnswerB = () => {
    this.setState({
      letra: "b",
    });
    console.log("Seleccionado opcion B");
    this.next("b");
  };

  handleHistory = () => {
    this.setState({ historia: this.state.dato.historia });
  };

  busquedaHistoria = (r) => {
    let id = this.state.i + 1 + r;
    console.log("la letra" + r);
    console.log("buscando id" + " " + id);
    let find = data.find((e) => e.id === id);
    this.setState({ dato: find, i: this.state.i + 1 });
    console.log(find);
  };

  render() {
    // console.log(
    //   "Llegando al render " +
    //     this.state.dato.id +
    //     " y la historia es " +
    //     this.state.dato.historia +
    //     " "
    // );
    console.log(this.state.dato);
    // return this.state.respuestas.length=1?
    return this.state.i < 6 ? (
      <div className="layout">
        <Historia historia={this.state.dato.historia} />
        <div className="opciones">
          <Opciones
            handleAnswerA={this.handleAnswerA}
            handleAnswerB={this.handleAnswerB}
            opcionA={this.state.dato.opciones.a}
            opcionB={this.state.dato.opciones.b}
          />
        </div>
        <div className="recordatorio">
          <Respuestas list={respuestas} letra={this.state.letra} />
        </div>

        {/* <h1 className="historia">{this.state.i}</h1> */}
      </div>
    ) : (
      alert("Fin")
    );
  }
}
export default App;
