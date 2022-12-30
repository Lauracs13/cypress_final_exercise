Feature: Demoblaze carousel functionality

    As a user
    I want to easily navigate through the different cellphone brands in the carousel
    So that I can choose the one I like

    Background:
        Given I visit the Demoblaze homepage

    @regression @carousel @previousArrowCarousel
    Scenario: interact with the previous arrow of the carousel
        When I select the first image of the carousel
        And I click on the previous arrow
        Then I should see the last image of the carousel

    @regression @carousel @nextArrowCarousel
    Scenario: interact with the next arrow of the carousel
        When I select the last image of the carousel
        And I click on the next arrow
        Then I should see the first image of the carousel

    @regression @carousel @indicatorsCarousel
    Scenario: interact with the carousel indicators
        When I select the second indicator of the carousel
        Then I should see the second image of the carousel

