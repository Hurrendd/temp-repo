import './styles.css';
import { Component } from 'react';

export class Button extends Component {
  render() {
    const {  onClick, disabled } = this.props;
    return (
      <button type="button" onClick={onClick} className='button' disabled={disabled}> {this.props.text} </button>
    );
  }
}