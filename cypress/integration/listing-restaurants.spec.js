describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
      const sushiPlace = 'Sushi Place';
      const pizzaPlace = 'Pizza Place';
      const APIKey = '1oZrs5FhN6k89xHf0HZYkRecNoUneok6'
  
      cy.server({force404: true});
  
      cy.route({
        method: 'GET',
        url: `https://outside-in-dev-api.herokuapp.com/${APIKey}/restaurants`,
        response: [
          {id: 1, name: sushiPlace},
          {id: 2, name: pizzaPlace},
        ],
      });
  
      cy.visit('/');
      cy.contains(sushiPlace);
      cy.contains(pizzaPlace);
    });
  });