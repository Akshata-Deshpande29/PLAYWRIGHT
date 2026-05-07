import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  usernameInput = () => this.page.getByLabel('username');
  passwordInput = () => this.page.getByLabel('Password');
  loginButton = () =>
    this.page.getByRole("button", { name: 'Login'});

  // Actions
  async open() {
    await this.page.goto('https://practice.expandtesting.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  // Assertions
  // async verifyLoginSuccess() {
  //   await expect(
  //     this.page.getByText('Welcome')
  //   ).toBeVisible();
  // }
}