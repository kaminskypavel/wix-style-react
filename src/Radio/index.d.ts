import * as React from 'react';

export interface RadioProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Radio extends React.PureComponent<RadioProps>{}
