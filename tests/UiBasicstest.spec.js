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

test('UI Controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator("[href*='documents-request']");

  // dropdown
  await page.locator('select.form-control').selectOption('consult');

  // radio button
  await page.locator('.radiotextsty').last().click();
  await page.locator('#okayBtn').click();
  await expect(page.locator('.modal-backdrop')).toBeHidden();
  const userRadio = page.locator('input[type="radio"]').last();
  console.log(await userRadio.isChecked());
  await expect(userRadio).toBeChecked();

  // checkbox
  await page.locator('#terms').check();
  await expect(page.locator('#terms')).toBeChecked();
  await page.locator('#terms').uncheck();
  await expect(page.locator('#terms')).not.toBeChecked();

  // atribut
  await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});
