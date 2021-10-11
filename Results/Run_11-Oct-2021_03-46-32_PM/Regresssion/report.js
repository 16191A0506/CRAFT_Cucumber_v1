$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DigitalShopify.feature");
formatter.feature({
  "line": 1,
  "name": "Digital Shopify",
  "description": "As a user, I want to run regression tests in Digital Shopify application",
  "id": "digital-shopify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
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
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "digital-shopify;login-in-digital-shopify-application;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 14,
      "id": "digital-shopify;login-in-digital-shopify-application;;2"
    },
    {
      "cells": [
        "test",
        "test"
      ],
      "line": 15,
      "id": "digital-shopify;login-in-digital-shopify-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4144612200,
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
  "duration": 7927606900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "duration": 4258980700,
  "status": "passed"
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1207939100,
  "status": "passed"
});
formatter.after({
  "duration": 110100,
  "status": "passed"
});
formatter.before({
  "duration": 3023957400,
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
  "duration": 8684630200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "duration": 4175641400,
  "status": "passed"
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1165595900,
  "status": "passed"
});
formatter.after({
  "duration": 101400,
  "status": "passed"
});
});