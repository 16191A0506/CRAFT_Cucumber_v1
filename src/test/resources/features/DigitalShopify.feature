Feature: Digital Shopify
	As a user, I want to run regression tests in Digital Shopify application

Background:
  Given I am on homepage

@digital
Scenario: Login in Digital Shopify Application
  	When I click on login
  	Then I should be logged in
