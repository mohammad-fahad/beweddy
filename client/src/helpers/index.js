import moment from 'moment';

/**
 * @param  {String | any} date
 */
export const compareDate = date =>
  moment(new Date()).startOf('day').isSameOrBefore(moment(date).startOf('day'));
