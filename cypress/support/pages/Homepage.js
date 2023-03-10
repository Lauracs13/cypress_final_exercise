var homepageLocators = {
    carousel: '.carousel-inner',
    nextArrow: '.carousel-control-next-icon',
    previousArrow: '.carousel-control-prev',
    carouselThirdIndicator: '[data-slide-to="2"]',
    carouselSecondIndicator: '[data-slide-to="1"]',
    carouselFirstIndicator: '[data-slide-to="0"]',
    lastImageOfTheCarousel: '.carousel-item:last-child',
    firstImageOfTheCarousel: '.carousel-item:first-child',
    secondImageOfTheCarousel: '.carousel-item:nth-child(2)',
    categoriesList: '.list-group',
    productCardTitles: '.hrefch',
    categories: { phones: 'a:contains(Phones)', laptops: 'a:contains(Laptops)', monitors: 'a:contains(Monitors)' }
}

class Homepage {
    carousel() { return cy.get(homepageLocators.carousel) }
    nextArrow() { return cy.get(homepageLocators.nextArrow) }
    previousArrow() { return cy.get(homepageLocators.previousArrow) }
    carouselThirdIndicator() { return cy.get(homepageLocators.carouselThirdIndicator) }
    carouselFirstIndicator() { return cy.get(homepageLocators.carouselFirstIndicator) }
    carouselSecondIndicator() { return cy.get(homepageLocators.carouselSecondIndicator) }
    lastImageOfTheCarousel() { return cy.get(homepageLocators.lastImageOfTheCarousel) }
    firstImageOfTheCarousel() { return cy.get(homepageLocators.firstImageOfTheCarousel) }
    secondImageOfTheCarousel() { return cy.get(homepageLocators.secondImageOfTheCarousel) }
    categoriesList() { return cy.get(homepageLocators.categoriesList) }
    categoriesList() { return cy.get(homepageLocators.categoriesList) }
    productCardTitles() { return cy.get(homepageLocators.productCardTitles) }

    waitUntilInactive(selector) {
        cy.wait(1000)
            .then(() => {
                cy.get(selector).should(($el) => {
                    while ($el.hasClass('active')) {
                        cy.wait(100);
                    }
                });
            });
    }
    waitUntilActive(selector) {
        cy.wait(1000)
            .then(() => {
                cy.get(selector).should(($el) => {
                    while (!($el.hasClass('active'))) {
                        cy.wait(100);
                    }
                });
            });
    }
    waitUntilFirstImageBecomesInactive() {
        this.waitUntilInactive(homepageLocators.firstImageOfTheCarousel)
    }
    waitUntilLastImageBecomesInactive() {
        this.waitUntilInactive(homepageLocators.lastImageOfTheCarousel)
    }
    waitUntilLastImageBecomesActive() {
        this.waitUntilActive(homepageLocators.lastImageOfTheCarousel)
    }
    selectRandomProduct() {
        cy.get(homepageLocators.productCardTitles).its('length')
            .then(elementCount => {
                let selected = Cypress._.random(elementCount - 1);
                cy.get(homepageLocators.productCardTitles).eq(selected).click()
                    .invoke('text').as('selectedProduct');
            });
    }
    clickOnCategory(category) {
        const categorySelector = homepageLocators.categories[category];
        cy.fixture('data').as('data');
        cy.get("@data").then(data => {
            cy.intercept('POST', data.categoriesAPI)
                .as('categoryResponse')
                .then(() => {
                    cy.get(categorySelector).click();
                })
        });
    }
    waitForCategoryResponse() {
        cy.wait('@categoryResponse', { timeout: 1000 })
    }
    getCategoryResponseItems() {
        return cy.get("@categoryResponse").its('response.body.Items')
    }
}
export default Homepage;
