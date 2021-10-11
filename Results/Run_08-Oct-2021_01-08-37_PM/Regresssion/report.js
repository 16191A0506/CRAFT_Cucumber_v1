$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Googlesearch",
  "description": "As a user, I want to get results from google",
  "id": "googlesearch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3392647800,
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
  "duration": 2454401800,
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
      "name": "@google"
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
  "duration": 87248700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldGetTheResults()"
});
formatter.result({
  "duration": 7946200,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.cucumbercraft.stepdefinitions.GoogleStepDefs.iShouldGetTheResults(GoogleStepDefs.java:61)\r\n\tat ✽.And I should get the results(Google.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldClickOnTheFirstLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 979097200,
  "status": "passed"
});
});