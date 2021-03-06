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
  "duration": 7560519700,
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
  "duration": 56274996000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027root\u0027]/div/header/div/button[1]\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LTIN127470\u0027, ip: \u002710.164.33.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\138497\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58462}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 81d9f2aa6bea036b8afdcae138179ea3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027root\u0027]/div/header/div/button[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat com.cucumbercraft.stepdefinitions.DigitalShopifyStepDefs.i_am_on_homepage(DigitalShopifyStepDefs.java:26)\r\n\tat ???.Given I am on homepage(DigitalShopify.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1800984900,
  "status": "passed"
});
formatter.before({
  "duration": 13393583000,
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
  "duration": 45149019600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LTIN127470\u0027, ip: \u002710.164.33.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\138497\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:60230}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: aee566505587a6858e906d36f2aede75\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat com.cucumbercraft.stepdefinitions.DigitalShopifyStepDefs.i_am_on_homepage(DigitalShopifyStepDefs.java:24)\r\n\tat ???.Given I am on homepage(DigitalShopify.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3052410200,
  "status": "passed"
});
});