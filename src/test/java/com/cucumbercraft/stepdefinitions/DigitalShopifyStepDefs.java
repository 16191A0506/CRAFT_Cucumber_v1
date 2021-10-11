package com.cucumbercraft.stepdefinitions;

import com.cucumbercraft.framework.DriverManager;
import com.cucumbercraft.framework.Util;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import static org.testng.Assert.assertTrue;

public class DigitalShopifyStepDefs extends MasterStepDefs {

	static Logger log = Logger.getLogger(DigitalShopifyStepDefs.class);

	WebDriver driver = DriverManager.getWebDriver();

	@Given("I am on homepage")
	public  void i_am_on_homepage() throws InterruptedException {
		driver.get(properties.getProperty("ApplicationUrl"));
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\'root\']/div/header/div/button[1]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\'login\']")).click();

	}
	@When("I click on login")
	public  void i_click_on_login() throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.id("email")).sendKeys("kirandeepmungara@gmail.com");
		driver.findElement(By.id("password")).sendKeys("1234567890");
		driver.findElement(By.id("buttonlogin")).click();
	}
	@Then("I should be logged in")
	public  void i_should_be_logged_in(){
		Assert.assertEquals(driver.getTitle(), "React App");
		driver.quit();
	}

}
