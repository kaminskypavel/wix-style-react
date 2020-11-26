import * as React from 'react';
import Modal from '..';
import { modalTestkitFactory } from '../../../testkit';
import { modalTestkitFactory as modalEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { modalTestkitFactory as modalPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function ModalWithMandatoryProps() {
  return <Modal isOpen />;
}

function ModalWithAllProps() {
  return (
    <Modal
      appElement="element"
      borderRadius={5}
      closeTimeoutMS={1000}
      contentLabel="lbl"
      dataHook="hook"
      height="10px"
      horizontalPosition="center"
      verticalPosition="center"
      isOpen
      maxHeight="200px"
      onAfterOpen={() => {}}
      onOk={() => {}}
      onRequestClose={_event => {}}
      overlayPosition="absolute"
      parentSelector={() => document.createElement('div')}
      scrollable
      scrollableContent
      shouldCloseOnOverlayClick
      shouldDisplayCloseButton
      zIndex={1}
    />
  );
}

async function testkits() {
  const testkit = modalTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = modalEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await modalPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
