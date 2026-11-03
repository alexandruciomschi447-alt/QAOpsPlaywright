const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   //link to website
   await page.goto("https://rahulshettyacademy.com/client");

   //locators
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");

   //button action
   await page.locator("[value='Login']").click();

   //wait for information from the site
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
});