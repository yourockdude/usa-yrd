import { UsaYrdPage } from './app.po';

describe('usa-yrd App', () => {
  let page: UsaYrdPage;

  beforeEach(() => {
    page = new UsaYrdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
