$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DigitalShopify.feature");
formatter.feature({
  "line": 1,
  "name": "Digital Shopify",
  "description": "As a user, I want to run regression tests in Digital Shopify application",
  "id": "digital-shopify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27057118400,
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
  "duration": 10984738900,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LTIN309924\u0027, ip: \u0027192.168.0.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\888377\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50868}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0b341dbdcce5455b8476c4676d1aef10\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat com.cucumbercraft.stepdefinitions.DigitalShopifyStepDefs.i_am_on_homepage(DigitalShopifyStepDefs.java:24)\r\n\tat ???.Given I am on homepage(DigitalShopify.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "Login in Digital Shopify Application",
  "description": "",
  "id": "digital-shopify;login-in-digital-shopify-application",
  "type": "scenario",
  "keyword": "Scenario",
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
  "duration": 1321899500,
  "status": "passed"
});
});