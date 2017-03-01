import { KabkaoWebPage } from './app.po';

describe('kabkao-web App', () => {
  let page: KabkaoWebPage;

  beforeEach(() => {
    page = new KabkaoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
