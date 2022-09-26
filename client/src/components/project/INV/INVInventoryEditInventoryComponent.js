import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, FormGroup, Row, Col, Button, Label, Input } from 'reactstrap';

class INVInventoryEditInventory extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventoryName : this.props.inventoryToEdit.inventoryName,
            inventoryBuyDate : this.props.inventoryToEdit.inventoryBuyDate,
            inventoryCost : this.props.inventoryToEdit.inventoryCost,
            inventoryQty : this.props.inventoryToEdit.inventoryQty,
            inventoryTotalCost : this.props.inventoryToEdit.inventoryTotalCost,
            inventoryMaintenanceDate : this.props.inventoryToEdit.inventoryMaintenanceDate
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        let valTotalCost = 0;
        if(name === 'inventoryCost' && this.state.inventoryQty !== '')
            valTotalCost = value*this.state.inventoryQty;
        else if(name === 'inventoryQty' && this.state.inventoryCost !== '')
            valTotalCost = value*this.state.inventoryCost;
        
        this.setState({
            [name] : value,
            inventoryTotalCost : valTotalCost
        });
    }

    handleEdit(event){
        event.preventDefault();
        const editInventory = this.state;
        editInventory.sNo = this.props.inventoryToEdit.sNo;
        this.props.inventoryPut(this.props.inventoryToEdit._id, editInventory);
        this.props.history.push('/usermain/inventory');
    }

    render(){
        return(
            <div className="col-11 p-0">
                <div className="container-fluid">
                    <div className="row border-bottom border-secondary bg-light">
                        <div className="mx-5 px-5">
                            <h1 className="font-weight-normal">Edit Inventory</h1>
                        </div>
                    </div>
                    <div className="row text-left">
                        <Card className="p-3 mt-5 col-md-8 offset-2 bg-light">
                            <Form onSubmit={this.handleEdit}>
                                <FormGroup row>
                                    <Label htmlFor="inventoryName" md={2}>Inventory</Label>
                                    <Col md={10}>
                                        <Input type="text" id="inventoryName" name="inventoryName" placeholder="Enter inventory name"
                                        value={this.state.inventoryName} valid={this.state.inventoryName !== ''} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label htmlFor="inventoryBuyDate" md={6} className="px-0">Buy Date</Label>
                                            <Input type="text" id="inventoryBuyDate" name="inventoryBuyDate" placeholder="Enter inventory buy date"
                                            value={this.state.inventoryBuyDate} valid={this.state.inventoryBuyDate !== ''} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label htmlFor="inventoryMaintenanceDate" md={6} className="px-0">Maintenance Date</Label>
                                            <Input type="text" id="inventoryMaintenanceDate" name="inventoryMaintenanceDate" placeholder="Enter Maintenance Date"
                                            value={this.state.inventoryMaintenanceDate} valid={this.state.inventoryMaintenanceDate !== ''} onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="inventoryCost" md={6} className="px-0">Unit Cost</Label>
                                            <Input type="number" id="inventoryCost" name="inventoryCost" placeholder="Enter Unit Cost"
                                            value={this.state.inventoryCost} valid={this.state.inventoryCost !== ''} onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="inventoryQty" md={6} className="px-0">Quantity</Label>
                                            <Input type="number" id="inventoryQty" name="inventoryQty" placeholder="Enter count of inventory item"
                                            value={this.state.inventoryQty} valid={this.state.inventoryQty !== ''} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="inventoryTotalCost" md={6} className="px-0">Total</Label>
                                            <Input type="number" id="inventoryTotalCost" name="inventoryTotalCost" placeholder="Total Cost" readOnly
                                            value={this.state.inventoryTotalCost} valid={this.state.inventoryTotalCost !== ''} onChange={this.handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col md={3}>
                                        <Button type="submit" color="info">Edit Inventory</Button>
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

export default withRouter(INVInventoryEditInventory);