$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM",
  "description": "As a user, I want to run regression tests in OrangeHRM application",
  "id": "orangehrm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "orangehrm;login-in-digital-shopify-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@orange"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid credentials \u003cUsername\u003e,\u003cPassword\u003e and click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged into OrangeHRM",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "orangehrm;login-in-digital-shopify-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "orangehrm;login-in-digital-shopify-application;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "orangehrm;login-in-digital-shopify-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3154341000,
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
  "duration": 5649683100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "orangehrm;login-in-digital-shopify-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@orange"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter valid credentials Admin,admin123 and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged into OrangeHRM",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1031440500,
  "status": "passed"
});
});