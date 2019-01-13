import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // avoid submitting form data
    event.preventDefault();
    // get the entered value
    const storeName = this.myInput.current.value;
    // route to /store/entered-value
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a Store</h2>
          <input
            type="text"
            required
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
