
'use strict'
import React from 'react'


module.exports = React.createClass({

  render: function () {
    return (
      <form className={this.props.formClasses[0] +' '+this.props.formClasses[1]}>
        <input rows='2' cols='50' type="textarea" placeholder="textarea-form"/>
        <button type='button' className={this.props.buttonClasses[1]+' '+this.props.buttonClasses[0]+' '+this.props.buttonClasses[2]} placeholder='big' value='big button'>Click</button>
      </form>
    )
  }

})
