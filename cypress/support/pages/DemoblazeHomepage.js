var homepageLocators = {
    carousel: '.carousel-inner',
    nextArrow: '.carousel-control-next-icon',
    previousArrow: '.carousel-control-prev',
    carouselThirdIndicator: '[data-slide-to="2"]',
    carouselFirstIndicator: '[data-slide-to="0"]',
    lastImageOfTheCarousel: '.carousel-item:last-child',
    firstImageOfTheCarousel: '.carousel-item:first-child'
}

class Homepage {
    carousel() { return cy.get(homepageLocators.carousel) }
    nextArrow() { return cy.get(homepageLocators.nextArrow) }
    previousArrow() { return cy.get(homepageLocators.previousArrow) }
    carouselThirdIndicator() { return cy.get(homepageLocators.carouselThirdIndicator) }
    carouselFirstIndicator() { return cy.get(homepageLocators.carouselFirstIndicator) }
    lastImageOfTheCarousel() { return cy.get(homepageLocators.lastImageOfTheCarousel) }
    firstImageOfTheCarousel() { return cy.get(homepageLocators.firstImageOfTheCarousel) }
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
    waitUntilFirstImageBecomesInactive(){
        this.waitUntilInactive(homepageLocators.firstImageOfTheCarousel)
        }
}

export default Homepage;
