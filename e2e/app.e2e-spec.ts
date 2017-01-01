import { AngularStudyDependencyInjectionPage } from './app.po';

describe('angular-study-dependency-injection App', function() {
  let page: AngularStudyDependencyInjectionPage;

  beforeEach(() => {
    page = new AngularStudyDependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
