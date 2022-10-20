import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
    };
  }
  render() {
    return (
      <>
        <h1 className="heading">Controlled Component</h1>
      <section className="container flex">
        <form className="shipping flex-50">
          <h2>shipping Address</h2>
          <fieldset>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              name="address"
              id="address"
              placeholder="e.g New Delhi Vassar Vidar"
              value={this.state.address}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="zip">Zip/Postal Cose</label>
            <input
              type="number"
              name="zip"
              id="zip"
              placeholder="e.g 176957"
              value={this.state.zip}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="e.g New Delhi "
              value={this.state.city}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="e.g India"
              value={this.state.country}
            />
          </fieldset>
        </form>
        </section>
      </>
    );
  }
}
export default Form;
