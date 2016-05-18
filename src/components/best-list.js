'use strict'
import React from 'react'


module.exports = React.createClass({

   render: function () {
    var names = []
      this.props.items ? names = this.props.items : names = []

    return (
      <ul>
        {names.map(function(item, i)
          {
            return(
              <li key={i}>{item.text}</li>
            )
          }
        )}
      </ul>
    )
  }

})
