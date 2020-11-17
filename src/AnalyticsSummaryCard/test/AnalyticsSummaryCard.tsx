import * as React from 'react';
import AnalyticsSummaryCard from '..';
import { analyticsSummaryCardTestkitFactory } from '../../../testkit';
import { analyticsSummaryCardTestkitFactory as analyticsSummaryCardEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { analyticsSummaryCardTestkitFactory as analyticsSummaryCardPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function analyticsSummaryCardWithMandatoryProps() {
  return <AnalyticsSummaryCard />;
}

function analyticsSummaryCardWithAllProps() {
  return (
    <AnalyticsSummaryCard
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = analyticsSummaryCardTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = analyticsSummaryCardEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await analyticsSummaryCardPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
