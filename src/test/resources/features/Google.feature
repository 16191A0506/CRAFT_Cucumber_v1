Feature: Googlesearch
  As a user, I want to get results from google

  Background:
    Given I am on Googlesearch page

  @google
  Scenario: search the google
    When I enter cognizant and click on search
    And  I should get the results
    Then I should click on the first link

    @google
    Scenario: Changing the theme
      When  I click on Settings tab
      Then  I change the theme


