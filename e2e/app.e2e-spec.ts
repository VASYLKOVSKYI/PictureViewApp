import { PictureViewAppPage } from './app.po';

describe('picture-view-app App', function() {
  let page: PictureViewAppPage;

  beforeEach(() => {
    page = new PictureViewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
