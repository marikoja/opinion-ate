describe ('Creating a restaurant', () => {
    it('allows adding a restaurant', () => {
        const restaurantId = 27;
        const restaurantName = 'Sushi Place';

        cy.server({force404: true});

        cy.route({
            method: 'GET',
            url: 'https://outside-in-dev-api.herokuapp.com/1oZrs5FhN6k89xHf0HZYkRecNoUneok6/resatuarants',
            response: [],
        });

        cy.route({
            method: 'POST',
            url: 'https://outside-in-dev-api.herokuapp.com/1oZrs5FhN6k89xHf0HZYkRecNoUneok6/restaurants',
            response: {
                id: restaurantId,
                name: restaurantName,
            },
        }).as('addRestaurant');

        cy.visit('/');

        cy.get('[placeholder="Add Restaurant"]').type(restaurantName);
        cy.contains('Add').click();

        cy.wait('@addRestaurant').its('requestBody').should('deep.equal', {
            name: restaurantName,
        });
        
        cy.contains(restaurantName);
    })
})