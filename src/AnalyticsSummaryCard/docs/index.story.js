/* eslint-disable no-console */
import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import IconButton from '../../IconButton';
import Refresh from 'wix-ui-icons-common/Refresh';
import AnalyticsSummaryCard from '..';

const chartData = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];
const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AnalyticsSummaryCard,
  componentPath: '..',

  componentProps: {
    title: 'Sessions',
    titleTooltip: 'tooltip',
    value: '1,9K',
    valueTooltip: '1,943',
    percentage: 12,
    invertedPercentage: false,
    isLoading: false,
    ctaButton: (
      <IconButton size="tiny">
        <Refresh />
      </IconButton>
    ),
    onRefreshClick: () => console.log('refresh click'),
    onClick: () => console.log('general click'),
    onChartHover: () => console.log('on chart hover'),
    chartSize: 'medium',
    chartData,
    chartColorHex: '#3899ec',
    footer: <div> This is footer</div>,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AnalyticsSummaryCard.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: `<AnalyticsSummaryCard 
            <IconButton size="tiny">
              <Refresh />
            </IconButton>
            chartData=${JSON.stringify(chartData)} buttonText="Hello World!"/>`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
