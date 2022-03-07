import React from 'react';
import { render } from '@testing-library/react-native';

import About from './about';

describe('About', () => {
  it('should render successfully', () => {
    const { container } = render(< About />);
    expect(container).toBeTruthy();
  });
});
