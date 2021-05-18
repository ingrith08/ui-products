import { browser, logging } from 'protractor';
import { SearchPage } from '../page-objects/search.po';

describe('Regular search', () => {
  let page: SearchPage;

  browser.waitForAngularEnabled(false);

  beforeEach(() => {
    page = new SearchPage();
  });

  it('Should validate input search', async () => {
    page.getInputSearch().sendKeys('Celular');
    expect(page.getInputSearchValue()).toContain('Celular');

    page.getButton().click();
    const result = await browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then(url => url.includes('items'));
    }, 10000);
    expect(result).toEqual(true);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
