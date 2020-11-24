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
    onCTAClick: () => console.log('refresh click'),
    onClick: () => console.log('general click'),
    onChartHover: () => console.log('on chart hover'),
    chartWidth: 169,
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
            chartColorHex="#3899ec"
            chartData={[
              {
                label: new Date('2020-09-03T21:00:00.000Z'),
                value: 3
              },
              {
                label: new Date('2020-09-04T21:00:00.000Z'),
                value: 17
              },
              {
                label: new Date('2020-09-05T21:00:00.000Z'),
                value: 18
              }
            ]}
            chartWidth={169}
            ctaButton={<IconButton size="tiny"><Icons.Refresh/></IconButton>}
            footer={<div>{' '}This is footer</div>}
            onCTAClick={() => console.log('refresh click')}
            onChartHover={() => console.log('on chart hover')}
            onClick={() => console.log('general click')}
            percentage={12}
            title="Sessions"
            titleTooltip="tooltip"
            value="1,9K"
            valueTooltip="1,943"
          />`,
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
