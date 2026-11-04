import { Given, Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { HomePage } from '../pages/HomePage';

Given(
    'user is on the e-commerce home page',
    async function (this: CustomWorld) {
        const homePage = new HomePage(this.page);

        await homePage.navigateToHomePage();

        console.log('E-commerce home page opened successfully');
    }
);
Then('the home page is displayed successfully',
    async function (this: CustomWorld){
        const homePage = new HomePage(this.page);

        await homePage.verifyHomepage();
        console.log("Homepage verified")

    }
);
When("the user clicks the Signup or login button",
    async function (this:CustomWorld)    {
    const homePage = new HomePage(this.page);

    await homePage.clickSignup();
    console.log("Signup button clicked")
    }
);

Then("the signup page is displayed successfully",
    async function (this:CustomWorld){
        const homePage = new HomePage(this.page);

        await homePage.verifySignupPage();
        console.log("Signup Page is displayed")
    }
);
When("the user enter name and email address",
     async function (this:CustomWorld){
     const homePage = new HomePage(this.page);

     await homePage.EnterCredentials();
     console.log("Credentials passed")

    }
);

Then("the user click signup Button",
    async function (this:CustomWorld){
    const homePage = new HomePage(this.page);

    await homePage.clickSignupButton();
    console.log("Clicked signup button")
    }
);
