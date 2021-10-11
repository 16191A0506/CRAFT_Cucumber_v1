package com.cucumbercraft.stepdefinitions;

import com.cucumbercraft.framework.DriverManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


import static com.cucumbercraft.stepdefinitions.MasterStepDefs.properties;
import static org.testng.Assert.assertTrue;

public class OrangeHRMStepDefs {
    static Logger log = Logger.getLogger(OrangeHRMStepDefs.class);

    WebDriver driver = DriverManager.getWebDriver();

    @Given("I am on loginpage")
    public  void i_am_on_loginpage() throws InterruptedException {
        driver.get(properties.getProperty("ApplicationUrl"));
        WebDriverWait wait = new WebDriverWait(driver, 60);
        assertTrue(driver.getTitle().equalsIgnoreCase("OrangeHRM"));
    }
    @When("^I enter valid Username and Password and click on login$")
    public void iEnterValidUsernameAndPasswordAndClickOnLogin() {
        driver.findElement(By.id("txtUsername")).sendKeys("Admin");
        driver.findElement(By.id("txtPassword")).sendKeys("admin123");
        driver.findElement(By.id("btnLogin")).click();
    }

    @Then("I should be logged into OrangeHRM")
    public  void i_should_be_logged_into_OrangeHRM() throws InterruptedException {
        Thread.sleep(3000);
        WebElement welcome = driver.findElement(By.id("welcome"));
        Assert.assertTrue(welcome.isDisplayed());
        driver.quit();
    }

}
