Feature: Demoblaze shopping cart functionality

    As a user
    I want to filter the products by categories, add products to the shopping cart, delete them
    So thai I can finally buy what I want

    Background:
        Given I visit the Demoblaze homepage

    @regression
    Scenario: filter for phones category
        When I click on the phones category
        Then all the products found are phones

    @regression
    Scenario: filter for laptops category
        When I click on the laptops category
        Then all the products found are laptops

    @regression
    Scenario: filter for monitors category
        When I click on the monitors category
        Then all the products found are monitors

    @regression
    Scenario: see the details of a product
        When I click on a product card
        Then I should see the details of the product

    @regression
    Scenario: add product to cart
        Given I clicked on a product card
        When I click on Add to cart button
        And I go to the Cart page
        Then I should see the product in the cart list

    @regression
    Scenario: remove product from cart
        Given I am in the Cart page with a product selected
        When I click on the delete option in the line product
        Then the product should disappear

    @regression
    Scenario: buy what is on the cart list
        Given I am in the Cart page with a product selected
        When I click on Place Order
        And I complete the form
        Then I should see the confirmation of my purchase