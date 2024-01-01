import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h1>Name:{name}</h1>
        <p>From : {location}</p>
        <p>count:{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          increase
        </button>
      </div>
    );
  }
}

export default UserClass;
