$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRM.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM",
  "description": "As a user, I want to run regression tests in OrangeHRM application",
  "id": "orangehrm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3036051600,
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
  "duration": 10334327900,
  "status": "passed"
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
  "duration": 8673204400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 13022885100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#welcome\"}\n  (Session info: chrome\u003d91.0.4472.114)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LTIN309924\u0027, ip: \u0027192.168.0.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\888377\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:52836}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 638c8dfd21e27e33eb66763252167571\n*** Element info: {Using\u003did, value\u003dwelcome}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat com.cucumbercraft.stepdefinitions.OrangeHRMStepDefs.i_should_be_logged_into_OrangeHRM(OrangeHRMStepDefs.java:34)\r\n\tat ✽.Then I should be logged into OrangeHRM(OrangeHRM.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 940996200,
  "status": "passed"
});
});