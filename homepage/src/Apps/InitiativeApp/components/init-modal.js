import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonGroup, FormControl, FormGroup, Form, Col, ControlLabel, Popover, Overlay } from 'react-bootstrap';

export default class InitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      name: null,
      mod: 0,
      isPC: false,
      adv: "normal",
      init: null,
      error: false,
    }
  }


  handleChange = (e) => {
    switch (e.target.type) {
      case "text":
        this.setState({name: e.target.value});
        break;
      case "number":
        this.setState({mod: e.target.value});
        break;
      case "button":
        if (e.target.name === "PC") {
          this.setState({isPC: !this.state.isPC});
        } else {
          this.setState({adv: e.target.name});
        }

        break;
      default:

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.name === null){
      this.setState({error: true});
      setTimeout(this.handlePopoverClose, 2000);
    }
    else {
      const char = {
        key: this.state.key,
        name: this.state.name,
        mod: this.state.mod,
        isPC: this.state.isPC,
        adv: this.state.adv,
        init: null,

      };
      // Here we will send the data to main componentClass
      this.props.handleSubmit(char);
      // Reset state and increment key
      this.setState({
        key: ++this.state.key,
        name: null,
        mod: 0,
        isPC: false,
        adv: "normal",
        init: null,

      });
    }
  }

  handlePopoverClose = () => {
    this.setState({error: false});
  }

  handleClose = (e) => {
    if (e !== undefined){
      e.preventDefault();
    }
    this.setState({
      name: null,
      mod: 0,
      isPC: false,
      adv: "normal",
      init: null,
    }, this.props.handleShowModal(e));

  }

  render() {
    const popoverTop = (
      <Popover id="popover-positioned-top">
        Please enter a name!
      </Popover>
    );
    return(
      <Modal show={this.props.showModal} onHide={this.handleClose}>
        <Modal.Title style={{textAlign: "center"}}>Add Character</Modal.Title>
        <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col sm={8}>
                <FormControl
                  type="text"
                  placeholder="Character Name"
                  autoFocus={true}
                  onChange={this.handleChange}
                />
              </Col>
              <Col
                id="init-mod-label"
                componentClass={ControlLabel}
                sm={2}
                xs={6}
                style={{textAlign: "right", paddingTop: "7px"}}>
                Modifier
              </Col>
              <Col sm={2} xs={6}>
                <FormControl
                  type="number"
                  defaultValue={this.state.mod}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xs={12} sm={3} style={{textAlign: "center", marginTop: "10px", paddingLeft: "34px"}}>
                <Button
                  name="PC"
                  bsStyle={this.state.isPC ? "success" : "warning"}
                  onClick={this.handleChange}
                >
                  {this.state.isPC ? "Player" : "Monster"}
                </Button>
              </Col>
              <Col xs={12} sm={9} style={{textAlign: "center", marginTop: "10px"}}>
                <ButtonGroup>
                  <Button
                    name="disAdv"
                    active={this.state.adv === "disAdv" ? true : false}
                    onClick={this.handleChange}>Disadvantage</Button>
                  <Button
                    name="normal"
                    active={this.state.adv === "normal" ? true : false}
                    onClick={this.handleChange}>Normal</Button>
                  <Button
                    name="adv"
                    active={this.state.adv === "adv" ? true : false}
                    onClick={this.handleChange}>Advantage</Button>
                </ButtonGroup>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer style={{textAlign: "center"}}>
          <Button
            bsStyle="danger"
            onClick={this.handleClose}>Cancel</Button>

          <Button
            ref="target"
            bsStyle="success"
            onClick={this.handleSubmit}>Add Character</Button>
          <Overlay
            show={this.state.error}
            container={this}
            placement="top"
            onHide={this.handlePopoverClose}
            target={() => ReactDOM.findDOMNode(this.refs.target)}
          >
            {popoverTop}
          </Overlay>
        </Modal.Footer>
      </Modal>
    );
  }
}
