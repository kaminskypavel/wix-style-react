import React from 'react';
import PropTypes from 'prop-types';

import { style, classes } from '../styles.st.css';

import { Layout, Cell, Card } from 'wix-style-react';

export default () => (
  <div className={style(classes.exampleContainer)}>
    <Layout>
      <Cell span={8}>
        <Section title="Main Content" height="450px" />
      </Cell>

      <Cell span={4}>
        <Layout>
          <Cell>
            <Section title="Sidebar card" height="200px" />
          </Cell>

          <Cell>
            <Section title="Sidebar card 2" height="300px" />
          </Cell>
        </Layout>
      </Cell>
    </Layout>
  </div>
);

function Section({ title, height }) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content>
        <div style={{ height }} />
      </Card.Content>
    </Card>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
};
