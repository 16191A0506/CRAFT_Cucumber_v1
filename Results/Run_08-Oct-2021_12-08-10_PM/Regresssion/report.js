$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM",
  "description": "As a user, I want to run regression tests in OrangeHRM application",
  "id": "orangehrm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3342893100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRMStepDefs.i_am_on_loginpage()"
});
formatter.result({
  "duration": 4388971000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "orangehrm;login-in-digital-shopify-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@orange"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid Username and Password and click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged into OrangeHRM",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMStepDefs.iEnterValidUsernameAndPasswordAndClickOnLogin()"
});
formatter.result({
  "duration": 7116713000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 15157930300,
  "status": "passed"
});
formatter.after({
  "duration": 74300,
  "status": "passed"
});
});