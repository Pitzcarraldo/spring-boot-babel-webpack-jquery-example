import './app.css';
import $ from 'jquery';
import SearchBox from './SearchBox';

const searchBox = new SearchBox('search_box');

$(window).load(() => {
  searchBox.focus();
});
