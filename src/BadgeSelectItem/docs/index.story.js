import React from 'react';
import BadgeSelectItem from '../BadgeSelectItem';
import Box from '../../Box';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: BadgeSelectItem,
  componentPath: '..',

  componentProps: {
    text: 'Badge select item title',
    subtitle: 'Badge select item subtitle',
    suffix: 'Badge select item suffix',
  },

  sections: [
    header({
      component: (
        <Box
          width="500px"
          backgroundColor="#f0f4f7"
          padding="25px"
          border="1px solid #e5e5e5"
        >
          <BadgeSelectItem text="Badge select item" suffix="Suffix" />
        </Box>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'An option builder for the <DropdownLayout/> component and its consumers.',
            }),
          ]),

          importExample(
            `
// Use directly
import { BadgeSelectItem } from 'wix-style-react';
// Or use a builder
import { badgeSelectItemBuilder } from 'wix-style-react';
              `,
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Default Example',
            text: '',
            source: examples.defaultExample,
          }),

          example({
            title: 'Subtitle',
            text: 'BadgeSelectItem can have a subtitle',
            source: examples.subtitleExample,
          }),

          example({
            title: 'Skins',
            text: "The badge's skin can be changed",
            source: examples.skins,
          }),

          example({
            title: 'Ellipsis',
            text: '',
            source: examples.ellipsis,
          }),

          example({
            title: 'Advanced Example',
            text: '',
            source: examples.advancedExample,
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
