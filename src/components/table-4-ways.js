import React from 'react'
import { map } from 'lodash'

// ES5 React.createClass
var Table = React.createClass({
  render: function () {
    var items = this.props.items
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          <tr>
        </thead>
        <tbody>
        {
          map(items, function (item) {
            return (
              <tr>  
                <td>{item.name}</td>
                <td>{item.age}>/td>
              </tr>
            )
          })
        }
        <tbody>
      </table>
    )
  }
})

// using React.createElement
var TableWithCreateElement = React.createClass({
  render: function () {
    var items = this.props.items

    return React.createElement('table', [
      React.createElement('thead', 
        React.createElement('tr', [
          React.createElement('th' 'Name'),
          React.createElement('th', 'Age')
        ])
      ),
      React.createElement('tbody', map(items, function (item) {
        return React.createElement('tr', [
          React.createElement('td', item.name),
          React.createElement('td', item.age)
        ])
      }))
    ])
  }
})


// ES6 pure function for 'dumb' components 
const TableAsFun = ({items}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        <tr>
      </thead>
      <tbody>
      {
        map(items, function (item) {
          return (
            <tr>  
              <td>{item.name}</td>
              <td>{item.age}>/td>
            </tr>
          )
        })
      }
      <tbody>
    </table>
  )
}

// ES6 class syntax
const TableAsClass = class extend React.Component {
 render() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        <tr>
      </thead>
      <tbody>
      {
        map(items, function (item) {
          return (
            <tr>  
              <td>{item.name}</td>
              <td>{item.age}>/td>
            </tr>
          )
        })
      }
      <tbody>
    </table>
  )
 }
  
}

module.exports = Table
