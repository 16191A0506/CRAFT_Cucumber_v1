package com.cucumbercraft.stepdefinitions;

import com.cucumbercraft.framework.DriverManager;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import static com.cucumbercraft.stepdefinitions.MasterStepDefs.properties;
import static org.testng.Assert.assertTrue;

public class GoogleStepDefs {
        static Logger log = Logger.getLogger(com.cucumbercraft.stepdefinitions.GoogleStepDefs.class);

        WebDriver driver = DriverManager.getWebDriver();

//        @Given("I am on loginpage")
//        public  void i_am_on_loginpage() throws InterruptedException {
//            driver.get(properties.getProperty("ApplicationUrl"));
//            WebDriverWait wait = new WebDriverWait(driver, 60);
//            assertTrue(driver.getTitle().equalsIgnoreCase("OrangeHRM"));
//        }
//        @When("^I enter valid Username and Password and click on login$")
//        public void iEnterValidUsernameAndPasswordAndClickOnLogin() {
//            driver.findElement(By.id("txtUsername")).sendKeys("Admin");
//            driver.findElement(By.id("txtPassword")).sendKeys("admin123");
//            driver.findElement(By.id("btnLogin")).click();
//        }
//
//        @Then("I should be logged into OrangeHRM")
//        public  void i_should_be_logged_into_OrangeHRM() throws InterruptedException {
//            Thread.sleep(3000);
//            WebElement welcome = driver.findElement(By.id("welcome"));
//            Assert.assertTrue(welcome.isDisplayed());
//            driver.quit();
//        }

    @Given("^I am on Googlesearch page$")
    public void iAmOnGooglesearchPage() {
        driver.get(properties.getProperty("ApplicationUrl"));
        WebDriverWait wait = new WebDriverWait(driver, 60);
        assertTrue(driver.getTitle().equalsIgnoreCase("Google"));
        
    }

    @When("^I enter cognizant and click on search$")
    public void iEnterCognizantAndClickOnSearch() {
        driver.findElement(By.xpath("//input[@title='Search']")).sendKeys("cognizant");
        driver.findElement(By.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']")).click();
    }

    @And("^I should get the results$")
    public void iShouldGetTheResults() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(driver, 60);
        assertTrue(driver.getTitle().equalsIgnoreCase("cognizant - Google Search"));
    }

    @Then("^I should click on the first link$")
    public void iShouldClickOnTheFirstLink() {
        System.out.println("kiran2");
        driver.findElement(By.xpath("//h3[contains(text(),'Cognizant: Digital Solutions to Advance Your Busin')]")).click();
    }

    @When("^I click on Settings tab$")
    public void iClickOnSettingsTab() {
        driver.findElement(By.xpath("/html/body/div[1]/div[5]/div[2]/div[2]/div/button")).click();
        //waiting for settings options to appear
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[1]/div[5]/div[2]/div[2]/div/ul/li[8]/div/div/div[1]")));
    }

    @Then("^I change the theme$")
    public void iChangeTheTheme() throws InterruptedException {
        driver.findElement(By.xpath("/html/body/div[1]/div[5]/div[2]/div[2]/div/ul/li[8]/div/div/div[1]")).click();
    }
}
