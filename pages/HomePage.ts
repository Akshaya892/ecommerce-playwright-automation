import {expect, Page, Locator} from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async navigateToHomePage(): Promise<void> {
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyHomepage(): Promise<void> {
        const HomeButton = this.page.getByRole('link', { name: 'Home' });
        await expect(HomeButton).toBeVisible();
    }

    async clickSignup(): Promise<void> {
        const SignUp:Locator = this.page.getByRole('link', { name: 'Signup / Login' });
        await expect(SignUp).toBeVisible();
        await SignUp.click();
    }

    async verifySignupPage(): Promise<void> {
        const signUpPage:Locator = this.page.getByRole('heading', {name:'New User Signup!'})
        await expect(signUpPage).toBeVisible();
    }

    async EnterCredentials(): Promise<void> {
        const name:Locator = this.page.getByPlaceholder("Name")
        await name.fill("Akshaya");
        const email:Locator = this.page.getByRole('textbox', { name: 'Your email address' })
        await email.click();
        await email.fill("akshayaqa@gmail.com")
    }

    async clickSignupButton(): Promise<void>{
        const signupButton:Locator = this.page.getByRole('button', {name: 'Signup'})
        await signupButton.click();
        await this.page.waitForTimeout(5000)
    }

    async EnterCreds(): Promise<void>{
        const Email:Locator = this.page.locator('[data-qa="login-email"]');
        await Email.click()
        await Email.fill("akshayalechu1999@gmail.com")

        const Password:Locator = this.page.locator('[data-qa="login-password"]');
        await Password.fill("ni8W6Mh36@ryPw")

    }

    async loginButton(): Promise<void>{
        const login:Locator = this.page.getByRole('button', {name: 'Login'})
        await login.click();
    }

}