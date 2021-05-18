import { browser, by, element, ElementFinder } from 'protractor';

export class SearchPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getInputSearch(): ElementFinder {
    return element(by.css('.search input'));
  }

  getButton(): ElementFinder {
    return element(by.css('.search button'));
  }

  getInputSearchValue() {
    return this.getInputSearch().getAttribute('value');
  }
}
