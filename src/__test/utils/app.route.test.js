import React from 'react'
import { shallow } from 'enzyme'
import AppRoute from '../../utils/app.route'

import { findByTestAtrr } from '../../../testUtils/index'

describe('AppRoute Component', () => {
  const wrapper = shallow(<AppRoute />)

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent')
    expect(component.length).toBe(1)
  })
})
