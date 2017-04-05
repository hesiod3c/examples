import React, { PureComponent } from 'react';
import DaysView from './days';
import MonthsView from './months';
import YearsView from './years';
import TimeView from './time';

class CalendarContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.viewComponents = {
      days: DaysView,
      months: MonthsView,
      years: YearsView,
      time: TimeView
    }
  }

  render() {
    const { view, ...viewProps } = this.props;
    const Component = this.viewComponents[view];

    return (
      <Component {...viewProps} />
    );
  }
}

export default CalendarContainer;
