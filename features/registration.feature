Feature: User Registration

  Scenario: Successful registration with valid details
    Given user is on the e-commerce home page
    And the home page is displayed successfully
    When the user clicks the Signup or login button
    Then the signup page is displayed successfully
    When the user enter name and email address
    And the user click signup Button