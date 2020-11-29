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

export const textCropping = `
<Box width="300px">
  <Layout cols={1}>
    <BadgeSelectItem
      text="This is a very very very very long text that is perfect to demonstrate how it will wrap at some point"
      subtitle="This is a very very very very long subtitle that is perfect to demonstrate how it will wrap into multiple lines  at some point"
    />
    <BadgeSelectItem
      ellipsis
      text="This is a very very very very long text that is perfect to demonstrate how it will cropped by ellipsis at some point"
      subtitle="This is a very very very very long text that is perfect to demonstrate how it will cropped by ellipsis at some point"
    />
  </ Layout>
</Box>
`;

export const advancedExample = `
<DropdownLayout
  visible
  inContainer
  selectedId={2}
  options={[
    badgeSelectItemBuilder({
      id: 4,
      text: 'Not Paid',
      subtitle: 'Waiting for a payment',
      skin: 'danger',
    }),
    badgeSelectItemBuilder({
      id: 0,
      text: 'Paid in Person',
      subtitle: 'Cash',
    }),
    badgeSelectItemBuilder({
      id: 2,
      text: 'Paid Plan: Gold',
      subtitle: '8/10 sessions left • Valid until Jan 24 2021',
    }),
    badgeSelectItemBuilder({
      id: 1,
      text: 'Paid Plan: Silver',
      subtitle: '10/10 sessions left • Valid until Dec 22 2020',
    })
  ]}
/>;
`;
