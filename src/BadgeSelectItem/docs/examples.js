export const defaultExample = `
<BadgeSelectItem text='Badge Select Item' />
`;

export const subtitleExample = `
<BadgeSelectItem text='Badge Select Item' subtitle='subtitle' />
`;

export const skins = `
<Layout cols={1}>
<BadgeSelectItem text='default - general skin' skin='general' />
<BadgeSelectItem text='standard skin' skin='standard' />
<BadgeSelectItem text='success skin' skin='success' />
<BadgeSelectItem text='warning skin' skin='warning' />
</Layout>
`;

export const ellipsis = `
<Box width="300px">
  <DropdownLayout
    visible
    inContainer
    options={[
      badgeSelectItemBuilder({
        id: 1,
        text: 'This is short',
        subtitle: 'This is a short subtitle',
        skin: 'general',
        ellipsis: true,
      }),
      badgeSelectItemBuilder({
        id: 2,
        text: 'This is a very long text with ellipsis',
        subtitle: 'This is a  very very long subtitle with ellipsis',
        skin: 'general',
        ellipsis: true,
      }),
      badgeSelectItemBuilder({
        id: 2,
        text: 'This is a very very long text without ellipsis',
        subtitle: 'This is a very very long subtitle without ellipsis',
        skin: 'general',
      }),
    ]}
  />
</Box>
`;

export const advancedExample = `
<DropdownLayout
  visible
  inContainer
  selectedId={2}
  options={[
    badgeSelectItemBuilder({
      id: 0,
      text: 'option 1',
      subtitle: 'subtitle 1',
    }),
    badgeSelectItemBuilder({
      id: 1,
      text: 'option 2',
      subtitle: 'subtitle 2',
      skin: 'success',
    }),
    badgeSelectItemBuilder({
      id: 2,
      text: 'option 3',
      subtitle: 'subtitle 3',
      skin: 'neutralLight',
    }),
    badgeSelectItemBuilder({
      id: 3,
      text: 'option 4',
      subtitle: 'subtitle 4',
      skin: 'premium',
    }),
    badgeSelectItemBuilder({
      id: 4,
      text: 'option 5',
      subtitle: 'subtitle 5',
      skin: 'danger',
    }),
    badgeSelectItemBuilder({
      id: 5,
      text: 'option 6',
      subtitle: 'subtitle 6',
      skin: 'urgent',
    }),
  ]}
/>
`;
