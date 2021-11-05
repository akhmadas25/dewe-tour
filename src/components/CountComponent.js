import { React, Component } from "react";

class CountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const value = this.state.count;
    return (
      <div>
        <div className="row">
          <div className="col">
            <button
              onClick={this.decrement}
              className="btn btn-warning text-light"
            >
              -
            </button>
          </div>
          <div className="col">
            <h4>{this.state.count}</h4>
          </div>
          <div className="col">
            <button
              onClick={this.increment}
              className="btn btn-warning text-light"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CountComponent;
