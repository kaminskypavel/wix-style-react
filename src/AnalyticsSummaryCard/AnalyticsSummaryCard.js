import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import Heading from '../Heading';
import Tooltip from '../Tooltip';
import SparklineChart from '../SparklineChart';
import Text from '../Text';
import Loader from '../Loader';
import { st, classes } from './AnalyticsSummaryCard.st.css';
import { dataHooks } from './constants';

/** Analytics Summary Card */
class AnalyticsSummaryCard extends React.PureComponent {
  render() {
    const {
      dataHook,
      title,
      titleTooltip,
      className,
      value,
      valueTooltip,
      percentage,
      invertedPercentage,
      chartData,
      chartColorHex,
      chartSize,
      isLoading,
      refreshButton,
      onRefreshClick,
      onChartHover,
      chartHighlightedStartingIndex,
      footer = null,
    } = this.props;

    let chartWidth = 100;
    switch (chartSize) {
      case 'small':
        chartWidth = 50;
        break;
      case 'medium':
        chartWidth = 100;
        break;
      case 'large':
        chartWidth = 200;
        break;
      default:
        chartWidth = 50;
    }
    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        {isLoading && (
          <div className={st(classes.loader)}>
            <Loader size="small" />
          </div>
        )}

        {refreshButton && (
          <div onClick={onRefreshClick} className={st(classes.refreshButton)}>
            {refreshButton}
          </div>
        )}
        <div className={st(classes.title)}>
          <Tooltip placement="top" content={titleTooltip}>
            <Heading
              appearance="H6"
              dataHook={dataHooks.analyticsSummaryCardCount}
            >
              {title}
            </Heading>
          </Tooltip>
        </div>
        <div className={st(classes.value)}>
          <Tooltip placement="top" content={value}>
            <Text weight="bold">{valueTooltip}</Text>
          </Tooltip>
        </div>
        <div
          className={st(classes.percentage, {
            invertedPercentage: invertedPercentage,
          })}
        >
          {percentage}
        </div>
        <div className={st(classes.sparklineChart)}>
          <SparklineChart
            onHover={onChartHover}
            data={chartData}
            color={chartColorHex}
            width={chartWidth}
            highlightedStartingIndex={chartHighlightedStartingIndex}
          />
        </div>
        {footer}
      </div>
    );
  }
}

AnalyticsSummaryCard.displayName = 'AnalyticsSummaryCard';

AnalyticsSummaryCard.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  title: PropTypes.string,
  titleTooltip: PropTypes.string,
  value: PropTypes.string,
  valueInShort: PropTypes.string,
  percentage: PropTypes.number,
  invertedPercentage: PropTypes.boolean,
  isLoading: PropTypes.boolean,
  refreshButton: PropTypes.Node, // IconButton
  onRefreshClick: PropTypes.Function,
  onClick: PropTypes.Function,
  // chart
  onChartHover: PropTypes.Function,
  chartHighlightedStartingIndex: PropTypes.number,
  chartSize: PropTypes.oneOf('small', 'medium', 'big'),
  chartData: PropTypes.Array,
  chartColorHex: PropTypes.string,
  footer: PropTypes.Node,
};

AnalyticsSummaryCard.defaultProps = {
  isLoading: false,
  refreshButton: null,
  onRefreshClick: noop,
  onChartHover: noop,
  footer: null,
};

export default AnalyticsSummaryCard;
