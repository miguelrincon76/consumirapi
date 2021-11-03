import React from "react";
import "../assets/css/Login.css";
//imagenes
import logo from "../assets/img/logo.png"

class Login extends React.Component{

    state={
        form:{
            "usuario":"",
            "password":"",
        },
        error:false,
        errorMsg:""

    }
    manejadorSubmit=(e)=> {
        e.preventDefault();
    }

    manejadorChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

render(){
    return(
        <React.Fragment>
            <body>
                <div id="login">
                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post" onSubmit={this.manejadorSubmit}>
                                        <img src={logo} width="100px" alt="User Icon" />
                                        <h3 className="text-center text-info">Login</h3>                                                           
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>
                                            <input type="text" name="username" className="form-control" placeholder="Usuario" onChange={this.manejadorChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={this.manejadorChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <a href="\" className="text-info">Register here</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}
} 

export default Login
