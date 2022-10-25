import React from "react";
import Sidecart from "./Sidecart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCart: false,
    };
  }
  render() {
    var item = this.props.element;
    return (
      <>
        <div className="fixed w-4/12 top-0 right-0 flex">
          {this.state.toggleCart ? (
            <i
              className="fas fa-times bg-black p-5 text-2xl h-16 cursor-pointer text-white"
              onClick={this.handleDisplayCart}
            ></i>
          ) : (
            <img
              src="/static/bag-icon.png"
              alt="cart-icon"
              className="bg-black p-5 h-16 absolute right-0 cursor-pointer image"
              onClick={this.handleDisplayCart}
            />
          )}
          <div className="cart_details w-full">
            {this.state.toggleCart ? <Sidecart side={item} /> : ""}
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
