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
      onClick,
      onChartHover,
      chartHighlightedStartingIndex,
      footer = null,
    } = this.props;

    let chartWidth;
    switch (chartSize) {
      case 'small':
        chartWidth = 60;
        break;
      case 'medium':
        chartWidth = 72;
        break;
      case 'large':
        chartWidth = 134;
        break;
      default:
        chartWidth = 72;
    }
    return (
      <div
        className={st(classes.root, className)}
        data-hook={dataHook}
        onClick={onClick}
      >
        {isLoading && (
          <div className={st(classes.loader)}>
            <Loader size="tiny" />
          </div>
        )}

        {!isLoading && refreshButton && (
          <div
            onClick={e => {
              e.stopPropagation();
              onRefreshClick(e);
            }}
            className={st(classes.refreshButton)}
          >
            {refreshButton}
          </div>
        )}

        <div>
          <div className={st(classes.title)}>
            <Heading
              appearance="H6"
              dataHook={dataHooks.analyticsSummaryCardCount}
            >
              <Tooltip placement="top" content={titleTooltip}>
                <span>{title}</span>
              </Tooltip>
            </Heading>
          </div>
          <div className={st(classes.value)}>
            <div className={st(classes.valueAndPercentage)}>
              <Tooltip placement="top" content={valueTooltip}>
                <Text tagName="span" weight="bold">
                  {value}
                </Text>
              </Tooltip>
              <span
                className={st(classes.percentage, {
                  invertedPercentage: invertedPercentage,
                })}
              >
                {percentage}
              </span>
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
          </div>

          {footer}
        </div>
        <div></div>
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
  percentage: PropTypes.number,
  invertedPercentage: PropTypes.bool,
  isLoading: PropTypes.bool,
  refreshButton: PropTypes.node,
  onRefreshClick: PropTypes.func,
  onClick: PropTypes.func,
  // chart
  onChartHover: PropTypes.func,
  chartHighlightedStartingIndex: PropTypes.number,
  chartSize: PropTypes.oneOf(['small', 'medium', 'large']),
  chartData: PropTypes.array,
  chartColorHex: PropTypes.string,
  footer: PropTypes.node,
};

AnalyticsSummaryCard.defaultProps = {
  isLoading: false,
  refreshButton: null,
  onRefreshClick: noop,
  onChartHover: noop,
  footer: null,
};

export default AnalyticsSummaryCard;
