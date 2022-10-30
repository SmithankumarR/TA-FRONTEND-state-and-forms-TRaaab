import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      isSame: false,
    };
  }
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState((state) => ({
      shipping: { ...state.shipping, [name]: value },
    }));
  };
  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;

    return (
      <>
        <h1 className="heading" style={{ marginTop: "2rem" }}>
          Controlled Component
        </h1>
        <section className="container flex">
          <form className="shipping flex-50">
            <h2>shipping Address</h2>
            <fieldset>
              <label htmlFor="address">Address</label>
              <input
                type="address"
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                name="country"
                id="country"
                placeholder="e.g India"
                value={this.state.country}
              />
            </fieldset>
          </form>
          <form className="shipping flex-50">
            <h2>Billing Address</h2>
            <div className="control">
              <input id="checkbox" onChange={this.handleCheckbox} type="checkbox" />
              <label htmlFor="checkbox">
                Same as the Shipping Address?
              </label>
            </div>
            <fieldset>
              <label htmlFor="address">Address</label>
              <input
                type="address"
                onChange={this.handleInputChange}
                name="address"
                id="address"
                placeholder="e.g New Delhi Vassar Vidar"
                value={billingData.address}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="zip">Zip/Postal Cose</label>
              <input
                type="number"
                onChange={this.handleInputChange}
                name="zip"
                id="zip"
                placeholder="e.g 176957"
                value={billingData.zip}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="city">City</label>
              <input
                type="text"
                onChange={this.handleInputChange}
                name="city"
                id="city"
                placeholder="e.g New Delhi "
                value={billingData.city}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                onChange={this.handleInputChange}
                name="country"
                id="country"
                placeholder="e.g India"
                value={billingData.country}
              />
            </fieldset>
          </form>
        </section>
      </>
    );
  }
}
export default Form;
