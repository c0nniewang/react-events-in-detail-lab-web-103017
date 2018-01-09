import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist()

    this.props.onDelayedClick(event)

    // setTimeout(this.props.onDelayedClick, this.props.delay)
  }


  render(props) {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default DelayedButton;