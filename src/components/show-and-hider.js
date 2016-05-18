'use strict'
import React from 'react'


module.exports = React.createClass({

  render: function () {

    return (
      <div>
       <ul>
        {this.props.displayOptions ? this.props.options.map(function(item, i)
            {
              return(
                <li key={i}>{item}</li>
              )
            }
          )
        : null}
        </ul>
      </div>
    )
  }
})

