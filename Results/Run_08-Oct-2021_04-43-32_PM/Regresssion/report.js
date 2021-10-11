$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Googlesearch",
  "description": "As a user, I want to get results from google",
  "id": "googlesearch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3832203300,
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
  "duration": 2866155100,
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
  "duration": 3181484900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldGetTheResults()"
});
formatter.result({
  "duration": 4829900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iShouldClickOnTheFirstLink()"
});
formatter.result({
  "duration": 4585551100,
  "status": "passed"
});
formatter.after({
  "duration": 1218511100,
  "status": "passed"
});
formatter.before({
  "duration": 1296919200,
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
  "duration": 2007536400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Changing the theme",
  "description": "",
  "id": "googlesearch;changing-the-theme",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@google"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Settings tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I change the theme",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefs.iClickOnSettingsTab()"
});
formatter.result({
  "duration": 131514800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefs.iChangeTheTheme()"
});
formatter.result({
  "duration": 2515646300,
  "error_message": "java.lang.IllegalMonitorStateException\r\n\tat java.lang.Object.wait(Native Method)\r\n\tat com.cucumbercraft.stepdefinitions.GoogleStepDefs.iChangeTheTheme(GoogleStepDefs.java:82)\r\n\tat ✽.Then I change the theme(Google.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 916234100,
  "status": "passed"
});
});