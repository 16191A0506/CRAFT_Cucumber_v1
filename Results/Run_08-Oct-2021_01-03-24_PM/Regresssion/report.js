$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Googlesearch",
  "description": "As a user, I want to get results from google",
  "id": "googlesearch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4196667100,
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
  "name": "I am on Googlesearch page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleStepDefs.iAmOnGooglesearchPage()"
});
formatter.result({
  "duration": 237490700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "search the google",
  "description": "",
  "id": "googlesearch;search-the-google",
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
  "name": "I enter cognizant and click on search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get the results",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should click on the first link",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefs.iEnterCognizantAndClickOnSearch()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldGetTheResults()"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldClickOnTheFirstLink()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.after({
  "duration": 1470909200,
  "status": "passed"
});
formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM",
  "description": "As a user, I want to run regression tests in OrangeHRM application",
  "id": "orangehrm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2919130000,
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
  "duration": 2974884300,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.cucumbercraft.stepdefinitions.OrangeHRMStepDefs.i_am_on_loginpage(OrangeHRMStepDefs.java:28)\r\n\tat ✽.Given I am on loginpage(OrangeHRM.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 986098200,
  "status": "passed"
});
});