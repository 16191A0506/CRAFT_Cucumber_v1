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
  "name": "I enter valid credentials\u003cUsername\u003e \u003cPassword\u003e and click on login",
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
  "duration": 3037267400,
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
  "duration": 5162112000,
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
  "name": "I enter valid credentialsAdmin admin123 and click on login",
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
  "location": "DigitalShopifyStepDefs.i_should_be_logged_in()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.Then I should be logged into OrangeHRM(OrangeHRM.feature:10) matches more than one step definition:\n  I should be logged in in DigitalShopifyStepDefs.i_should_be_logged_in()\n  I should be logged into OrangeHRM in OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM()\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 931022700,
  "status": "passed"
});
});