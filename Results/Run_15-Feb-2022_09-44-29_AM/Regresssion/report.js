$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DigitalShopify.feature");
formatter.feature({
  "line": 1,
  "name": "Digital Shopify",
  "description": "As a user, I want to run regression tests in Digital Shopify application",
  "id": "digital-shopify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11477298200,
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
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 13409123400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@digital"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_click_on_login()"
});
formatter.result({
  "duration": 5083786300,
  "status": "passed"
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "duration": 45393870400,
  "status": "passed"
});
formatter.after({
  "duration": 251800,
  "status": "passed"
});
});