import moment from "moment/moment";
import 'moment/locale/it'

/**
 * Pretty print a future iso date in time from now
 * @param {string} expireDate - Iso date representing expire date
 * @returns {string} - Pretty printed date
 */
export const prettyDateInPast = (expireDate) => {
  moment.locale('it');
  return moment(expireDate).isAfter(moment(), 'day')
    ? 'Scaduto'
    : moment(expireDate).fromNow();
}
/**
 * Pretty print a future iso date in time from now
 * @param {string} expireDate - Iso date representing expire date
 * @returns {string} - Pretty printed date
 */
export const prettyDateInFuture = (expireDate) => {
  moment.locale('it');
  return moment(expireDate).isBefore(moment(), 'day')
    ? 'Scaduto'
    : moment(expireDate).fromNow();
}
