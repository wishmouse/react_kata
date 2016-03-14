'use strict'
import React from 'react'
import Header from './header'
import BetterHeader from './better-header'
import FormTextArea from './form-text-area'
import StylinButton from './stylin-button'
import ShowAndHider from './show-and-hider'

module.exports = React.createClass({

  getInitialState: function () {
    return {
      title:  'My Better App',
      formClasses: [ 'textarea-form', 'form' ], 
      buttonClasses: [ 'big', 'button' ],
      buttonStyle:  { backgroundColor: 'red', borderRadius: '5px' },
      options: [ 'yes', 'no', 'maybe' ]
    }
  },

  render: function () {
    return (
      <div>
        <Header />
        <BetterHeader title={this.state.title} />
        <FormTextArea formClasses={this.state.formClasses} buttonClasses={this.state.buttonClasses} />
        <StylinButton style={this.state.buttonStyle} />
        <ShowAndHider display={true} options={this.state.options} />
      </div>
    )
  }
})


