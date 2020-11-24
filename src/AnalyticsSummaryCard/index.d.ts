import * as React from 'react';
import IconButton from '../IconButton'
import { SparklineChartProps } from '../SparklineChart'

type chartData = {
  label: Date;
  value: number;
};

export interface AnalyticsSummaryCardProps {
  dataHook?: string;
  className?: string;
  title?: string;
  titleTooltip?: string;
  value: string;
  valueTooltip?: string;

  isPercentageVisible?: boolean;
  percentage?: number;
  invertedPercentage?: boolean;
  percentageTooltip?: string;

  isLoading?: boolean;
  isCtaButtonVisible?: boolean;
  ctaButton?: IconButton; // IconButton
  onRefreshClick?: React.MouseEventHandler<HTMLButtonElement>;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  //chart
  onChartHover?: React.MouseEventHandler<HTMLButtonElement>;
  chartHighlightedStartingIndex?: SparklineChartProps.highlightedStartingIndex;
  chartSize?: number,
  chartData: SparklineChartProps.data;
  chartColorHex: SparklineChartProps.color;

  footer?: React.ReactNode;
}

//SparklineChartProps 

export default class AnalyticsSummaryCard extends React.PureComponent<AnalyticsSummaryCardProps>{ }
