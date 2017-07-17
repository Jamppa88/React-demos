import React from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';

export default class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
    }
  }
  close = () => {
    this.setState({isVisible: false})
  }
  open = () => {
    this.setState({isVisible: true})
  }
  render() {
    return(
      <div>
        <Modal show={this.state.isVisible} >
          <Modal.Title>Lol</Modal.Title>
          <Modal.Footer>
            <Button onClick={this.close}>Sulje</Button>
          </Modal.Footer>
        </Modal>
        <ButtonGroup name="options">
          <Button bsStyle="primary" onClick={this.open}>Yksi</Button>
          <Button value={2}>Kaksi</Button>
          <Button value={3}>Kolme</Button>

        </ButtonGroup>
      </div>
    );
  }
}
