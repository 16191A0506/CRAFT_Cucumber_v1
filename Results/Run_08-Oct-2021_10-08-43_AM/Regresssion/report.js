$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7637811700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 7516962500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.cucumbercraft.stepdefinitions.GeneralStepDefs.i_am_in_login_page(GeneralStepDefs.java:25)\r\n\tat ✽.Given I am in the login page of the application(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid username and invalid password",
  "description": "",
  "id": "login;login-with-valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@completed1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I login using the valid username mercury and the invalid password xyz",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The application should stay on the login page, and not log me in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 33
    },
    {
      "val": "xyz",
      "offset": 66
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_invalid_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefs.application_should_stay_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2165450100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@completed1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login using the valid username \u003cUsername\u003e and the valid password \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "login;login-with-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 25,
      "id": "login;login-with-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "test",
        "test"
      ],
      "line": 26,
      "id": "login;login-with-valid-username-and-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5892369600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 5799792600,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.cucumbercraft.stepdefinitions.GeneralStepDefs.i_am_in_login_page(GeneralStepDefs.java:25)\r\n\tat ✽.Given I am in the login page of the application(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@completed1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login using the valid username mercury and the valid password mercury",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 33
    },
    {
      "val": "mercury",
      "offset": 64
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_valid_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1813563600,
  "status": "passed"
});
formatter.before({
  "duration": 4095618700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 4846228500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat com.cucumbercraft.stepdefinitions.GeneralStepDefs.i_am_in_login_page(GeneralStepDefs.java:25)\r\n\tat ✽.Given I am in the login page of the application(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@completed1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login using the valid username test and the valid password test",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 33
    },
    {
      "val": "test",
      "offset": 61
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_valid_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1908343600,
  "status": "passed"
});
});