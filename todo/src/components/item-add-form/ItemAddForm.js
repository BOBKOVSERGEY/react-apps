import React, {Component} from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

  // init state
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value//.toUpperCase()
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label !== '') {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ''
      })
    }

  };

  render() {
    return (

      <form className="item-add-form d-flex justify-content-center"
            onSubmit={this.onSubmit}>

        <input type="text" className="form-control"
                           onChange={this.onLabelChange}
                           placeholder="What need to be done"
                           value={this.state.label}/>
        <button className="btn ml-5 btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}