import axios from "axios";
import React from "react";
import { Apiurl } from "../services/apirest";
// template
import Header from "../template/Header";

class Editar extends React.Component {
  state = {
    form: {
      nombre: "",
      direccion: "",
      dni: "",
      correo: "",
      codigoPostal: "",
      genero: "",
      telefono: "",
      fechaNacimiento: "",
      token: "",
      pacienteId: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  manejadorSubmit = (e) => {
    e.preventDefault();
  };
  put = () => {
    let url = Apiurl + "pacientes";
    axios.put(url, this.state.form).then((response) => {
      console.log(response);
    });
  };

  delete = () => {
    let url = Apiurl + "pacientes";
    let pacienteId = this.props.match.params.id;
    let datos = {
      token: localStorage.getItem("token"),
      pacienteiD: pacienteId,
    };
    axios.delete(url, { headers: datos }).then((response) => {
      this.props.history.push("/dashboard");
    });
  };

  componentDidMount() {
    let pacienteId = this.props.match.params.id;
    let url = Apiurl + "pacientes?id=" + pacienteId;
    axios.get(url).then((response) => {
      this.setState({
        form: {
          nombre: response.data[0].Nombre,
          direccion: response.data[0].Direccion,
          dni: response.data[0].DNI,
          correo: response.data[0].Correo,
          codigoPostal: response.data[0].CodigoPostal,
          genero: response.data[0].Genero,
          telefono: response.data[0].Telefono,
          fechaNacimiento: response.data[0].FechaNacimiento,
          token: localStorage.getItem("token"),
          pacienteId: pacienteId,
        },
      });
    });
  }
  render() {
    const form = this.state.form;
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h3> Editar Paciente</h3>
        </div>
        <div className="container">
          <br />
          <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Nombre:</label>
                <div className="col-md-10">
                  <input
                    name="nombre"
                    type="text"
                    className="form-control"
                    value={form.nombre}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">DNI:</label>
                <div className="col-md-10">
                  <input
                    name="dni"
                    type="text"
                    className="form-control"
                    value={form.dni}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Telefono:</label>
                <div className="col-md-10">
                  <input
                    name="telefono"
                    type="text"
                    className="form-control"
                    value={form.telefono}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">Correo:</label>
                <div className="col-md-10">
                  <input
                    name="correo"
                    type="text"
                    className="form-control"
                    value={form.correo}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
              onClick={() => this.put()}
            >
              Editar
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              style={{ marginRight: "10px" }}
              onClick={() => this.delete()}
            >
              Eliminar
            </button>
            <a
              className="btn btn-dark"
              style={{ marginRight: "10px" }}
              href="/dashboard"
            >
              Salir
            </a>
          </form>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
export default Editar;
