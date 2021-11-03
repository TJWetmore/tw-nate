import {getText} from '../functions/getText';
import {getTextInput, getTextOutput, getTextInputAscending, getTextOutputAscending,getTextInputDescending, getTextOutputDescending, getTextInputAlphabetical, getTextOutputAlphabetical} from './getTestData'

// const getText = require('../functions/getText');
// const {getTextInput, getTextOutput} = require( './getTestData')

test('get Text function returns data in natural order', () => {
  return expect(getText(getTextInput.url, null)).resolves.toStrictEqual(getTextOutput);
});

test('get Text function returns data in Ascending order', () => {
  return expect(getText(getTextInputAscending.url, getTextInputAscending.filter)).resolves.toStrictEqual(getTextOutputAscending);
});


test('get Text function returns data in Descending order', () => {
  return expect(getText(getTextInputDescending.url, getTextInputDescending.filter)).resolves.toStrictEqual(getTextOutputDescending);
});

test('get Text function -returns data in Alphabetical order', () => {
  return expect(getText(getTextInputAlphabetical.url, getTextInputAlphabetical.filter)).resolves.toStrictEqual(getTextOutputAlphabetical);
});
