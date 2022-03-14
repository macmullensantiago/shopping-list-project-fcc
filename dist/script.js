import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
function ListItem(props) {
  return /*#__PURE__*/(
    React.createElement("li", { onClick: props.onClick },
    props.item));


}

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['unicycle', 'juggling clubs', 'stils'] };

  }

  addItem() {
    var item = document.getElementById("listItem").value;
    document.getElementById("listItem").vlaue = "";
    var newList = this.state.list.slice();
    newList.push(item);
    this.setState({ list: newList });
  }

  onClick(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({ list: newList });
  }


  render() {
    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push( /*#__PURE__*/React.createElement(ListItem, { item: item, onClick: () => this.onClick(i) }));
    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "shopping-list" }, /*#__PURE__*/
      React.createElement("h1", null, "Shopping List for ", this.props.name), /*#__PURE__*/
      React.createElement("input", { type: "text", id: "listItem", placeholder: "Add item" }), /*#__PURE__*/
      React.createElement("button", { type: "button", onClick: () => this.addItem() }, " Add "), /*#__PURE__*/
      React.createElement("ul", null,
      listItems)));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(ShoppingList, { name: "Beau" }),
document.getElementById('container'));