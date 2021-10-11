Feature: Login 
	As a user, I want to be able to login to the application
	when I present valid credentials

Background:
	Given I am in the login page of the application

@completed1
Scenario Outline: Login with valid username and valid password
	When I login using the valid username <Username> and the valid password <Password>
	Then The application should log me in and navigate to the Flight Finder page
	
	Examples:
	|Username	|Password	|
	|mercury	|mercury	|
	|test		|test		|