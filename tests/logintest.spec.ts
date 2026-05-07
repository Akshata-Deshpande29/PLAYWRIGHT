import { test } from '@playwright/test';
import { LoginPage } from './Login.page';
 
test.describe('Login Tests', () => {
  test('User should login successfully', async ({ page }) => {
 
    const loginPage = new LoginPage(page);
 
    await loginPage.open();
    await loginPage.login('practice', 'SuperSecretPassword!');
   // await loginPage.verifyLoginSuccess();
  
  });
});
