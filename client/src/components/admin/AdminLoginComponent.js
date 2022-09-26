import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Label, Input, Col, FormGroup, Button, Card } from 'reactstrap';

class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            validBtn : true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    preventForwardNavigation(event){
        if((window.location.pathname === '/adminlogin') && (event.code === 'ArrowRight' && event.altKey))
            event.preventDefault();
    }
    componentDidMount(){
        document.addEventListener('keydown', event => this.preventForwardNavigation(event));
    }
    handleInputChange(){
        if(this.username.value === this.props.login.uname && this.password.value === this.props.login.pass){
            this.setState({ validBtn : false });
        }
        else
            this.setState({ validBtn : true });
    }
    handleLogin(event){
        event.preventDefault();
    }
    render(){
        return(
            <div className="container-fluid h-100">
                <div className="row p-4 h-25 bg-dark border-bottom border-primary">
                    <h1 className="display-1 text-white">RAFMS</h1>
                </div>
                <div className="row p-2 pl-4 bg-dark">
                    <h1 className="text-white font-weight-light">Admin Login</h1>
                </div>
                <div className="row">
                    <div className="p-5 h-100 col-10 col-md-6 offset-3">
                        { this.props.isLoading ? <span className="fa fa-circle-o-notch fa-spin fa-3x"></span> :
                            ( (this.props.errMes !== null) ? <h4>{this.props.errMes}</h4> :
                                <div className="text-left mt-5">
                                    <Card className="p-3 bg-light">
                                        <Form onSubmit={() => this.handleLogin()}>
                                            <FormGroup>
                                                <Label htmlFor="username" md={6}>Username</Label>
                                                <Col md={12}>
                                                    <Input type="text" id="username"
                                                    name="username" onChange={this.handleInputChange}
                                                    innerRef={(input) => this.username = input}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="password" md={6}>Password</Label>
                                                <Col md={12}>
                                                    <Input type="password" id="password"
                                                    name="password" onChange={this.handleInputChange}
                                                    innerRef={(input) => this.password = input}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col md={10}>
                                                    <Link to="/adminmain">
                                                        <Button type="submit" value="submit" color="info" disabled={this.state.validBtn}>Login</Button>
                                                    </Link>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </Card>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;