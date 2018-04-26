import React, { Component } from 'react';

import { Spring } from 'react-spring';

export default class Main extends Component {
  state = {
    isShow: false,
  }
  toggleText = () => {
    this.setState({ isShow: !this.state.isShow });
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={this.toggleText}>click me to show text</button>
        <Spring from={{ opacity: 0 }} to={{ opacity: isShow ? 1 : 0 }}>
          {styles => <div style={styles}>i will fade in</div>}
        </Spring>
      </div>
    );
  }
}
