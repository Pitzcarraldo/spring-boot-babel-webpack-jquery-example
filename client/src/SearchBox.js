import $ from 'jquery';
import logger from './logger';

export default class SearchBox {
  static RETURN_KEY_CODE = 13;

  constructor(className) {
    this.input = $(`.${className} input`);
    this.input.on('keypress', event => this.diagnosisByKey(event));
    this.button = $(`.${className} button`);
    this.button.on('click', event => this.diagnosis(event));
  }

  diagnosisByKey(event) {
    if (event.keyCode === SearchBox.RETURN_KEY_CODE) {
      this.diagnosis(event);
    }
  }

  diagnosis({ target }, path = '') {
    logger($(target).data('log'));
    const value = this.getValue() || '';
    const href = encodeURI(`/${value}${path}`);
    console.log(href);
    // location.href = href;
  }

  getValue() {
    return this.input.val().trim();
  }

  focus() {
    this.input.focus();
  }
}
