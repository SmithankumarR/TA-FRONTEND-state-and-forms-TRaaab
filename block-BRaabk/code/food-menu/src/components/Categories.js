import React from "react";
import menu from "../menu.json";
import Card from './Card';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: "",
    };
  }
  render() {
    let Categories = menu.map((item) => item.categories);
    let allCategories;
    if (!this.state.categories) {
      allCategories = menu.reduce((acc, menu) => {
        acc = acc.concat(menu.categories);
        return acc;
      }, []);
    } else {
      allCategories = menu.find(
        (item) => item.categories === this.state.categories
      ).category;
    }
    return (
      <>
        <ul className="btn-container flex jcb">
          {Categories.map((menu) => (
            <li key={menu}>
              <button
                className="filter-btn"
                onClick={() => this.setState({ categories: menu })}
              >
                {menu}
              </button>
            </li>
          ))}
          {/* <button className="filter-btn">all</button>
          <button className="filter-btn">breakfast</button>
          <button className="filter-btn">lunch</button>
          <button className="filter-btn">shakes</button> */}
        </ul>
        <Card allCategories={allCategories} />
      </>
    );
  }
}
export default Categories;
