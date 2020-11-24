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
  state = {
    hovered: false,
  };
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
      chartWidth,
      isLoading,
      ctaButton,
      onRefreshClick,
      onClick,
      onChartHover,
      chartHighlightedStartingIndex,
      footer = null,
      isCtaButtonVisible,
      isPercentageVisible,
      percentageTooltip,
    } = this.props;

    const { hovered } = this.state;

    return (
      <div
        className={st(
          classes.root,
          className,
          hovered ? classes.hovered : '',
          onClick ? classes.clickable : '',
        )}
        data-hook={dataHook}
        onClick={e => onClick && onClick(e)}
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
      >
        {isLoading && (
          <div className={st(classes.loader)}>
            <Loader size="tiny" />
          </div>
        )}

        {!isLoading && isCtaButtonVisible && ctaButton && hovered && (
          <div
            onClick={e => {
              e.stopPropagation();
              onRefreshClick && onRefreshClick(e);
            }}
            className={st(classes.ctaButton)}
          >
            {ctaButton}
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
              {isPercentageVisible && (
                <Tooltip placement="top" content={percentageTooltip}>
                  <span
                    className={st(classes.percentage, {
                      invertedPercentage: invertedPercentage,
                    })}
                  >
                    {percentage}
                  </span>
                </Tooltip>
              )}
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
  ctaButton: PropTypes.node,
  onRefreshClick: PropTypes.func,
  onClick: PropTypes.func,
  // chart
  onChartHover: PropTypes.func,
  chartHighlightedStartingIndex: PropTypes.number,
  chartSize: PropTypes.number,
  chartData: PropTypes.array,
  chartColorHex: PropTypes.string,
  footer: PropTypes.node,
  isCtaButtonVisible: PropTypes.bool,
  isPercentageVisible: PropTypes.bool,
  percentageTooltip: PropTypes.string,
};

AnalyticsSummaryCard.defaultProps = {
  isLoading: false,
  ctaButton: null,
  footer: null,
  onChartHover: noop,
  isCtaButtonVisible: true,
  isPercentageVisible: true,
  chartSize: 69,
};

export default AnalyticsSummaryCard;