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
  // arrange
  const expected = 'My Best App'

  // action
  const wrapper = shallow(React.createElement(Header))

  // assert
  t.same(wrapper.text(), expected)
})


// props to textContent
test('<BetterHeader />', t => {
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
test('<FormTextArea /> renders a form with an input and button', t => {

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

  t.ok(form.hasClass(props.formClasses[0]))
  t.ok(form.hasClass(props.formClasses[1]))
  t.ok(button.hasClass(props.buttonClasses[0]))
  t.ok(button.hasClass(props.buttonClasses[1]))
})

test('FormTextArea /> renders classes from props', t => {
  // arrange
  const props = {
    formClasses: [ 'textarea-form', 'special-form' ],
    buttonClasses: [ 'button', 'small' ] 
  }
  
  // action
  const wrapper = shallow(React.createElement(FormTextArea, props))

  // assert
  let catchHardCoders = wrapper.find('.big.button')
  t.same(catchHardCoders.length, 0)
})

test('FormTextArea /> renders classes from props: 2', t => {
  const props = {
    formClasses: [ 'textarea-form', 'special-form' ],
    buttonClasses: [ 'button', 'small', 'warning' ] 
  }

  const wrapper = shallow(React.createElement(FormTextArea, props))
  
  let haveYouSetTheClassesFromProps = wrapper.find('.small.button.warning')
  t.same(haveYouSetTheClassesFromProps.length, 1)
})

// inline styles
test('<StylinButton />', t => {

  // arrange
  const props = { style: { backgroundColor: 'red', borderRadius: '5px' } }

  // action
  const wrapper = render(React.createElement(StylinButton, props))

  // assert
  t.ok(wrapper.html().indexOf('button') > 1)
  t.ok(wrapper.html().indexOf('background-color') > 1)
  t.ok(wrapper.html().indexOf('red') > 1)
  t.ok(wrapper.html().indexOf('border-radius') > 1)
       
})

// mapped props
test('<BestList />', t => {

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


// conditional display
test('<ShowAndHider />', t => {

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



// filtered props, reuse
test('<SpecialFilter />', t => {

  // arrange
  const items = [
    { type: 'cat', name: 'tiger' },
    { type: 'dog', name: 'daschund' },
    { type: 'cat', name: 'panther' },
    { type: 'dog', name: 'labrador' },
    { type: 'cat', name: 'grumpy cat' }
  ]
  const props = {
    filter: 'cat',
    items: items
  }

  const dogProps = {
    filter: 'dog',
    items: items 
  }

  // action 
  const wrapper = mount(React.createElement(SpecialFilter, props))
  const dogWrapper = mount(React.createElement(SpecialFilter, dogProps))
  const listItems = wrapper.find('li')

  // assert
  t.ok(wrapper.contains(React.createElement(BestList)))

  t.same(listItems.length, 3)
  listItems.forEach((li, i) => {
    t.same(li.text(), items[i].name)
  })
  
  t.same(dogWrapper.find('li').length, 2)
})

// NOTES
// calls props callback
// updates component state
