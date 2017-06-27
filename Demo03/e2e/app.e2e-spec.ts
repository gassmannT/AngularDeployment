import { Demo3Page } from './app.po';

describe('demo3 App', () => {
  let page: Demo3Page;

  beforeEach(() => {
    page = new Demo3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
