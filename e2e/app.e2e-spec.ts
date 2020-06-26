import { ClientSuiviAuditPage } from './app.po';

describe('client-suivi-audit App', function() {
  let page: ClientSuiviAuditPage;

  beforeEach(() => {
    page = new ClientSuiviAuditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
