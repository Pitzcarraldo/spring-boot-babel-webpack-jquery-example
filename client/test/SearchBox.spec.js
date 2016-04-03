import SearchBox from '../src/SearchBox';

const fixture = `
<div class="search_box">
	<input
			type="text"
			placeholder="name"
			data-log="home_search"
	>
	<button
			type="button"
			data-log="home_search"
	>
		Test <span class="ic"></span>
	</button>
</div>`;

describe('SearchBox', () => {
  before(() => {
    document.body.innerHTML = fixture;
  });
  describe('constructor', () => {
    it('should initialize input and button whit given class name', () => {
      const className = 'search_box';
      const sut = new SearchBox(className);
      expect(sut.input).not.to.be.empty();
      expect(sut.input.selector).to.equal(`.${className} input`);
      expect(sut.button).not.to.be.not.empty();
      expect(sut.button.selector).to.be.equal(`.${className} button`);
    });
  });
  describe('input', () => {
    it('should has a diagnosisByKey for on keypress event', () => {
      const className = 'search_box';
      const sut = new SearchBox(className);
      sut.diagnosisByKey = spy();
      sut.input.trigger('keypress');
      expect(sut.diagnosisByKey).called();
    });
  });
  describe('button', () => {
    it('should has a diagnosis for on click event', () => {
      const className = 'search_box';
      const sut = new SearchBox(className);
      sut.diagnosis = spy();
      sut.button.trigger('click');
      expect(sut.diagnosis).called();
    });
  });
});
