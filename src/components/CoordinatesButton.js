import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    let x = event.screenX
    let y = event.screenY

    let arr = [x, y]

    this.props.onReceiveCoordinates(arr)
  }

  render(props) {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;