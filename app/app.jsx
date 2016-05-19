import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import BasicItemList from './components/BasicItemList.jsx';
import getItems from './helpers/getItems.js';
import Test from './components/TestItem.jsx';
import Filters from './components/Filters.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentDidMount() {
    this.setState({ items: getItems() });
  }
  handleClick(artist) {
    console.log(artist);
  }
  render() {
    return (
      <div>
        <BasicItemList items={this.state.items} handleClick={this.handleClick} />
        <Test handleClick={this.handleClick} name="test" />
        <Filters />
      </div>
    );
  }
}

App.propTypes = {
  url: PropTypes.string
};

ReactDOM.render(
  <App url="" />,
  document.querySelector('.app')
);


class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
    console.log(this)
    console.dir(this)
  }
  sayAge() {
    console.log(this.age)
  }
}

class Human extends Character {
  constructor(name, age) {
    super(name, age);
  }
  sayName() {
    console.log(`Hi my name is ${this.name}`)
    console.log(this)
    console.dir(this)
    // super.sayName();
  }
}

const character = new Character('jamaine', 32);

character.sayName();


const finn = new Human('Finn The Human', 9);
finn.sayName();
finn.sayAge()
