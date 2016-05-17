
'use strict'
import React from 'react'


module.exports = React.createClass({


  render: function () {
   const buttonStyle = {
      backgroundColor: this.props.style.backgroundColor,
      borderRadius: this.props.style.borderRadius
    }
    return (
     <div>
     <button style={buttonStyle}>bazinga</button>
     </div>
    )
  }

})
