const {test, expect} =  require('@playwright/test');

test('First Playwright test', async ({browser})=>
{
      const context = await browser.newContext();
      const page =  await context.newPage();
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      await page.locator('#username').fill('rahulshettyacademy ');
      await page.locator('#password').fill('Learning@830$3mK2');
      await page.locator('#signInBtn').click();
});

test('UI Controls', async ({page})=>
{
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      const userName = await page.locator('#username');
      const signIn = await page.locator('#signInBtn');
      const documentLink = page.locator("[href*='documents-request'");
      //dropdown example
      const dropdown = await page.locator('select.form-control');
      await dropdown.selectOption('consult');
      //buttons
      await page.locator('.radiotextsty').last().click();
      await page.locator('#okayBtn').click();
      //if it's checked
      console.log(page.locator('.radiotextsty').last().isChecked());
      await expect(page.locator('.radiotextsty').last()).toBeChecked();
      //verify is to be checked 
      await page.locator('#terms').click().toBeChecked();
      //unchheck a btn
      await page.locator('#terms').uncheck()
      expect(await page.locator('#terms').isChecked).toBeFalsy();
      await expect(documentLink).toHaveAttribute('class','blinkingText')
});
