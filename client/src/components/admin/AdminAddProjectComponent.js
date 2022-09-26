import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, FormGroup, Label, Input, Col, Button, ButtonGroup } from 'reactstrap';

class AdminAddProject extends Component{
    constructor(props){
        super(props);
        this.state = {
            pid : this.props.pid,
            pname : '',
            pstart : '',
            pdesc : '',
            ppriority : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreation = this.handleCreation.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({ [name] : value });
    }

    handlePriorityChange(priority){
        this.setState({ ppriority : priority });
    }

    handleCreation(){
        this.props.projectsPost(this.state);
        this.props.history.push('/adminmain');
    }
    
    render(){
        return(
            <div className="row">
                <div className="container-fluid">
                    <div className="row border-bottom border-secondary bg-light">
                        <div className="mx-5 px-5">
                            {/*<h1 className="font-weight-normal">Create New Project</h1>*/}
                            <h1 className="font-weight-normal">Add New Client</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card className="p-3 mt-5 col-10 col-md-6 offset-3 bg-light">
                            <Form onSubmit={this.handleCreation}>
                                <FormGroup row>
                                    {/*<Label htmlFor="pname" md={3}>Project Title</Label>*/}
                                    <Label htmlFor="pname" md={3}>Client Name</Label>
                                    <Col md={9}>
                                        <Input type="text" id="pname" name="pname" placeholder="Enter project name"
                                        value={this.state.pname} valid={this.state.pname !== ''} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="pstart" md={3}>Start Date</Label>
                                    <Col md={9}>
                                        <Input type="text" id="pstart" name="pstart" placeholder="Enter project start date"
                                        value={this.state.pstart} valid={this.state.pstart !== ''} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/*<Label htmlFor="pdesc" md={3}>Project Description</Label>*/}
                                    <Label htmlFor="pdesc" md={3}>Nature of Alliance</Label>
                                    <Col md={9}>
                                        <Input type="textarea" id="pdesc" name="pdesc" placeholder="Enter project description"
                                        value={this.state.pdesc} valid={this.state.pdesc !== ''} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                {/*<FormGroup row>
                                    <Label htmlFor="ppriority" md={3}>Priority</Label>
                                    <Col md={4}>
                                        <Input type="select" id="ppriority" name="ppriority"
                                        value={this.state.ppriority} onChange={this.handleInputChange}>
                                            <option>Select priority</option>
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </Input>
                                    </Col>
                                </FormGroup>*/}
                                <FormGroup row>
                                    <Label htmlFor="ppriority" md={3}>Priority</Label>
                                    <Col md={9}>
                                        <ButtonGroup>
                                            <Button type="button" id="ppriority" name="ppriority" color="danger"
                                            value={this.state.ppriority} onClick={() => this.handlePriorityChange('High')}>
                                                High
                                            </Button>
                                            <Button type="button" id="ppriority" name="ppriority" color="warning"
                                            value={this.state.ppriority} onClick={() => this.handlePriorityChange('Medium')}>
                                                Medium
                                            </Button>
                                            <Button type="button" id="ppriority" name="ppriority" color="success"
                                            value={this.state.ppriority} onClick={() => this.handlePriorityChange('Low')}>
                                                Low
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={2}>
                                        <Button type="submit" color="info">Create</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AdminAddProject);