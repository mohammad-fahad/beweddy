import toast from 'react-hot-toast';
import moment from 'moment';

/**
 * @param  {String | any} date
 */
export const compareDate = date =>
  moment(new Date()).startOf('day').isSameOrBefore(moment(date).startOf('day'));

export const handleErrorMessage = err =>
  err.response && (err.response.data.message || err.response.data.error)
    ? err.response.data.message || err.response.data.error
    : err.message || err.error;
// Success Alert
export const successAlert = message =>
  message && toast.success(message, { duration: 5000 });
// Error Alert
export const errorAlert = error =>
  error && toast.error(error, { duration: 5000 });

//extracting the Youtube ID
export function YouTubeGetID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
