Feature: Add products to cart

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario Outline: Authenticated Users - Add to cart
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    And User click on the login button
    When user search for a "<book>"
    And user add the book to the cart
    Then the cart badge should get updated

    Examples:
      | username | password  | book            |
      | samia1   | S@mi@123  | Roomies         |
      | samia2   | S@mi@123  | The Simple Wild |