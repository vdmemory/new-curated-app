describe('shared-ui-components: SharedUiComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shareduicomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedUiComponents!');
    });
});
