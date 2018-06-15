import {prettyDateInFuture, prettyDateInPast} from './dateHelpers'
import moment from 'moment'

/**
 * Testing "prettyDateInFuture
 * using 'it' locale
 */

test('return scaduto for past date', () => {
  const expireDate = moment().subtract(1, 'M');
  expect(prettyDateInFuture(expireDate)).toEqual('Scaduto')
});

test('return in un giorno for today date', () => {
  const expireDate = moment().add(22, 'h');
  expect(prettyDateInFuture(expireDate)).toEqual('in un giorno')
});
test('return tra un mese for a month ahead', () => {
  const expireDate = moment().add(1, 'M');
  expect(prettyDateInFuture(expireDate)).toEqual('in un mese')
});

/**
 * Testing "prettyDateInPast
 * using 'it' locale
 */

test('return scaduto for future date', () => {
  const expireDate = moment().add(1, 'M');
  expect(prettyDateInPast(expireDate)).toEqual('Scaduto')
});

test('return un giorno fa for yesterday date', () => {
  const expireDate = moment().subtract(22, 'h');
  expect(prettyDateInPast(expireDate)).toEqual('un giorno fa')
});
test('return un mese fa for a month before', () => {
  const expireDate = moment().subtract(1, 'M');
  expect(prettyDateInPast(expireDate)).toEqual('un mese fa')
});