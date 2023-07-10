Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    And User click on the login link

Scenario: Login should not be success
    And User enter the username as "sam"
    And User enter the password as "khal"
    When User click on the login button
    But Login should fail
    
  Scenario: Login should be success
    And User enter the username as "samia khalfi"
    And User enter the password as "S@mi@123"
    When User click on the login button
    Then Login should be success

  