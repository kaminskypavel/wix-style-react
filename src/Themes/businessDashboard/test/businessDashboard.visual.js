import React from 'react';
import businessDashboardTheme from '../BusinessDashboard';
import { runTests as ButtonTests } from '../../../Button/test/Button.visual';
import { runTests as CircularProgressBarTests } from '../../../CircularProgressBar/test/CircularProgressBar.visual';
import { runTests as LinearProgressBarTests } from '../../../LinearProgressBar/test/LinearProgressBar.visual';
import { runTests as HeadingTests } from '../../../Heading/test/Heading.visual';
import { runTests as TextTests } from '../../../Text/test/Text.visual';
import { runTests as TextButtonTests } from '../../../TextButton/test/TextButton.visual';
import { runTests as IconButtonTests } from '../../../IconButton/test/IconButton.visual';
import { ThemeProvider } from '../../..';

const themeName = 'Business Dashboard';
const testWithTheme = test => {
  return (
    <ThemeProvider theme={businessDashboardTheme()}>
      <>{test}</>
    </ThemeProvider>
  );
};

ButtonTests({ themeName, testWithTheme });
CircularProgressBarTests({ themeName, testWithTheme });
LinearProgressBarTests({ themeName, testWithTheme });
HeadingTests({ themeName, testWithTheme });
TextTests({ themeName, testWithTheme });
TextButtonTests({ themeName, testWithTheme });
IconButtonTests({ themeName, testWithTheme });
