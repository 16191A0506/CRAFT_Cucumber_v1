$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Googlesearch",
  "description": "As a user, I want to get results from google",
  "id": "googlesearch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3609206700,
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
  "duration": 1762135100,
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
  "duration": 84496400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldGetTheResults()"
});
formatter.result({
  "duration": 130400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldClickOnTheFirstLink()"
});
formatter.result({
  "duration": 130200,
  "status": "passed"
});
formatter.after({
  "duration": 960094800,
  "status": "passed"
});
});