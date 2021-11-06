import React from "react";
import "../assets/css/Login.css";
//imagenes
import logo from "../assets/img/logo.png";
//servicios
import { Apiurl } from "../services/apirest";
//librerias
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    form: {
      usuario: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };
  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl + "auth";
    axios
      .post(url, this.state.form)
      .then((response) => {
        if (response.data.status === "ok") {
          localStorage.setItem("token", response.data.result.token);
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            error: true,
            errorMsg: response.data.result.error_msg,
          });
        }

        console.log(response);
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMsg: "Error al conectar a la base de datos",
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div id="login">
          <h3 className="text-center text-white pt-5">
            <img src={logo} width="50px" alt="User Icon" /> Login form
          </h3>

          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    action=""
                    method="post"
                    onSubmit={this.manejadorSubmit}
                  >
                    <h3 className="text-center text-info">
                      {" "}
                      Formulario de Ingreso{" "}
                    </h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        Usuario:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="usuario"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Contraseña:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info">
                        <span>Recuerdame</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="Enviar"
                        onClick={this.manejadorBoton}
                      />
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="\" className="text-info">
                        Registrarse
                      </a>
                    </div>
                  </form>
                  <br />
                  <br />
                  {this.state.error === true && (
                    <div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
