import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, FormGroup, Row, Col, Button, Label, Input } from 'reactstrap';

class FTLoanEditLoan extends Component{
    constructor(props){
        super(props);
        this.state = {
            loanSrc : this.props.loanToEdit.loanSrc,
            loanFor : this.props.loanToEdit.loanFor,
            loanDate : this.props.loanToEdit.loanDate,
            loanAmt : this.props.loanToEdit.loanAmt,
            loanPeriod : this.props.loanToEdit.loanPeriod,
            loanRate : this.props.loanToEdit.loanRate
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name] : value });
    }

    handleEdit(event){
        event.preventDefault();
        const editLoan = this.state;
        editLoan.sNo = this.props.loanToEdit.sNo;
        editLoan.loanAmt = Number(editLoan.loanAmt);
        editLoan.loanPeriod = Number(editLoan.loanPeriod);
        editLoan.loanRate = Number(editLoan.loanRate);
        this.props.loansPut(this.props.loanToEdit._id, editLoan);
        this.props.history.push('/usermain/finance_transaction');
    }

    render(){
        return(
            <div className="col-11 p-0">
                <div className="container-fluid">
                    <div className="row border-bottom border-secondary bg-light">
                        <div className="mx-5 px-5">
                            <h1 className="font-weight-normal">Edit Loan</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card className="p-3 mt-5 col-md-8 offset-2 bg-light">
                            <Form onSubmit={this.handleEdit}>
                                <FormGroup row>
                                    <Label htmlFor="loanSrc" md={3}>Lender</Label>
                                    <Col md={9}>
                                        <Input type="text" id="loanSrc" name="loanSrc" placeholder="Enter name of lender"
                                        value={this.state.loanSrc} valid={this.state.loanSrc !== ''} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label htmlFor="loanFor" md={6} className="px-0">Loan For</Label>
                                            <Input type="text" id="loanFor" name="loanFor" placeholder="Enter loan description"
                                            value={this.state.loanFor} valid={this.state.loanFor !== ''} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label htmlFor="loanDate" md={6} className="px-0">Date</Label>
                                            <Input type="text" id="loanDate" name="loanDate" placeholder="Enter loan date"
                                            value={this.state.loanDate} valid={this.state.loanDate !== ''} onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="loanAmt" md={6} className="px-0">Loan Amount</Label>
                                            <Input type="number" id="loanAmt" name="loanAmt" placeholder="Enter loan amount"
                                            value={this.state.loanAmt} valid={this.state.loanAmt !== ''} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="loanPeriod" md={6} className="px-0">Period</Label>
                                            <Input type="number" id="loanPeriod" name="loanPeriod" placeholder="Enter loan period"
                                            value={this.state.loanPeriod} valid={this.state.loanPeriod !== ''} onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="loanRate" md={3}>Rate</Label>
                                            <Col md={9}>
                                                <Input type="number" id="loanRate" name="loanRate" placeholder="Enter loan rate"
                                                value={this.state.loanRate} valid={this.state.loanRate !== ''} onChange={this.handleInputChange}/>
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col md={3}>
                                        <Button type="submit" color="info">Edit Loan</Button>
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

export default withRouter(FTLoanEditLoan);