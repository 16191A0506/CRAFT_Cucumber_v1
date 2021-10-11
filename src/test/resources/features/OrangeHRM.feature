Feature: OrangeHRM
  As a user, I want to run regression tests in OrangeHRM application

  Background:
    Given I am on loginpage

  @orange
  Scenario: Login in Digital Shopify Application
    When I enter valid Username and Password and click on login
    Then I should be logged into OrangeHRM

