Feature: Contact Us

  Scenario: Contact Us Form verification
    Given user is on the e-commerce home page
    And the home page is displayed successfully
    When the user clicks on the Contact Us button
    Then the user should see GET IN TOUCH
    And the user enters name, email, subject and message
    And the user uploads a file
    When the user clicks on the Submit button
    Then the user should see the success message
    And the user navigates back to the homepage