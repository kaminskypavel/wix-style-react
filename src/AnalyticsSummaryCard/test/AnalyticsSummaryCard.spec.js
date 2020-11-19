import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnalyticsSummaryCard from '../AnalyticsSummaryCard';
import { analyticsSummaryCardPrivateDriverFactory } from './AnalyticsSummaryCard.private.uni.driver';

describe(AnalyticsSummaryCard.displayName, () => {
  const render = createRendererWithUniDriver(
    analyticsSummaryCardPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AnalyticsSummaryCard />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<AnalyticsSummaryCard />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<AnalyticsSummaryCard title="title" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
