import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

jest.dontMock('./index');

import Svg from './index';

const findByTag = ReactTestUtils.findRenderedDOMComponentWithTag;
const renderComponent = props => ReactTestUtils.renderIntoDocument(<Svg {...props} />);

describe('Svg component', function() {
  it('should have a svg', () => {
    const target = renderComponent();
    const svg = findByTag(target, 'svg');
    expect(svg.childNodes[3].tagName).toEqual('path')
  });
});
