import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Radio from '../Radio';
import { radioPrivateDriverFactory } from './Radio.private.uni.driver';

describe(Radio.displayName, () => {
  const render = createRendererWithUniDriver(radioPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<Radio />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<Radio />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Radio buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
