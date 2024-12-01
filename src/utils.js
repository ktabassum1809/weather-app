import moment from 'moment-timezone';

function formatLocalTime(unixTimestamp, timezoneOffset) {
    return moment
      .utc(unixTimestamp * 1000)
      .utcOffset(timezoneOffset / 60)
      .format("hh:mm A");
  }

  export default formatLocalTime;

  export function formatLocalDate(unixTimestamp,timezoneOffset){
    return moment
    .utc(unixTimestamp * 1000)
    .utcOffset(timezoneOffset / 60)
    .format("dddd, MMMM Do YYYY");
  }