import React, { Component } from "react";
import Header from "./Header";
import OrderHistoryTable from "./OrderHistoryTable";
import Menu from "./Menu";
import Filter from "./Filter";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import orderHistoryList from "../configs/configOrderHistoryList";
import menuList from "../configs/configMenuList";

const filterByName = (data, filter) =>
  data.filter(item => item.name.includes(filter));

export default class App extends Component {
  state = {
    filter: ""
  };

  handlerInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { filter } = this.state;

    const filteredDishes = filterByName(menuList, filter);

    return (
      <div>
        <Header />
        <OrderHistoryTable data={orderHistoryList} />
        <Filter value={filter} onFilter={this.handlerInputChange} />
        <Menu data={filteredDishes} />
        <SignInForm/>
        <SignUpForm/>
      </div>
    );
  }
}
