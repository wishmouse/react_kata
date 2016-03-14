import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'

// components
import Header from '../src/components/header'
import BetterHeader from '../src/components/better-header'
import FormTextArea from '../src/components/form-text-area'
import StylinButton from '../src/components/stylin-button'
import ShowAndHider from '../src/components/show-and-hider'
import BestList from '../src/components/best-list'

// static content
test('<Header />', t => {
  t.plan(1)
  // arrange
  const expected = 'My Best App'

  // action
  const wrapper = shallow(React.createElement(Header))

  // assert
  t.same(wrapper.text(), expected)
})


// props to textContent
test('<BetterHeader />', t => {
  t.plan(2)
  // arrange
  const props = { title: 'My Better App' }

  // action 
  const wrapper = shallow(React.createElement(BetterHeader, props))
  // <BetterHeader title="My Better App" />
  
  // assert
  t.same(wrapper.find('h1').length, 1)
  t.same(wrapper.text(), props.title)

})

// classes, children
test('<FormTextArea />', t => {
  t.plan(7)

  // arrange
  const props = { formClasses: [ 'textarea-form', 'form' ], buttonClasses: [ 'big', 'button' ] }

  //action
  const wrapper = shallow(React.createElement(FormTextArea, props))

  // assert
  let form = wrapper.find('form')
  let button = wrapper.children().find('.big.button')
  let textArea = wrapper.children().find('input[type="textarea"]')
  
  t.same(form.length, 1)
  t.same(button.length, 1)
  t.same(textArea.length, 1)

  t.ok(wrapper.hasClass(props.formClasses[0]))
  t.ok(wrapper.hasClass(props.formClasses[1]))
  t.ok(button.hasClass(props.buttonClasses[0]))
  t.ok(button.hasClass(props.buttonClasses[1]))
})

// inline styles
test('<StylinButton />', t => {
  t.plan(1)

  // arrange
  const props = { style: { backgroundColor: 'red', borderRadius: '5px' } }

  // action
  const wrapper = shallow(React.createElement(StylinButton, props))

  // assert
  let button = wrapper.find('button[style="backgroud-color:red;border-radius:5px"]') // may not work!?
  t.same(button.length, 1)
})

// conditional display
test('<ShowAndHider />', t => {
  t.plan(5)

  // arrange
  const props1 = { displayOptions: true, options: [ 'yes', 'no', 'maybe' ] }
  const props2 = { displayOptions: false, options: [ 'yes', 'no', 'maybe' ] }

  // action
  const wrapper1 = shallow(React.createElement(ShowAndHider, props1))
  const wrapper2 = shallow(React.createElement(ShowAndHider, props2))

  const div1 = wrapper1.find('ul').parent()
  const listItems1 = wrapper1.find('ul').find('li')
  const listItems2 = wrapper2.find('ul').find('li')

  // assert
  t.ok(div1.is('div'))
  listItems1.forEach((li, i) => {
    t.same(li.text(), props1.options[i])
  })
  t.same(listItems2.length, 0)
})


// mapped props
test('<BestList />', t = > {
  t.plan(6)

  // arrange
  const props = { 
    items: [
      { text: 'Athos' },
      { text: 'Portos' },
      { text: 'Aramis' }
    ]
  }

  // action 
  const wrapper = shallow(React.createElement(BestList, props))
  const wrapperWithNoProps = shallow(React.createElement(BestList))

  // assert
  t.same(wrapper.find('ul').length, 1)
  t.same(wrapper.find('li').length, 3)

  wrapper.find('li').forEach((li, i) => {
    t.same(li.text(), props.items[i].text)
  })

  t.same(wrapperWithNoProps.find('li').length, 0) 
})

// filtered props
// array to table (data mainpulation)
// calls props callback
// updates component state
