import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

test('to match snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
