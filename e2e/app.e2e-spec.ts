import { AngularFormulariosAppPage } from './app.po';

describe('angular-formularios-app App', () => {
  let page: AngularFormulariosAppPage;

  beforeEach(() => {
    page = new AngularFormulariosAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
