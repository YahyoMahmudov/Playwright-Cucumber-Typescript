Feature: Add products to cart

    Background:
        Given User navigates to the application

    @auth
    Scenario: Authenticated Users - Add to cart using admin
        When user search for a "Roomies"
        And user add the book to the cart
        Then the cart badge should get updated
        
    @auth
    Scenario: UnAuthenticated User - Add to cart using Lead
        When user search for a "ALL of Us with Wings"
        And user add the book to the cart
        Then the cart badge should get updated