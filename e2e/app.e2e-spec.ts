import { SvgAnimationPage } from './app.po';

describe('svg-animation App', () => {
  let page: SvgAnimationPage;

  beforeEach(() => {
    page = new SvgAnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
