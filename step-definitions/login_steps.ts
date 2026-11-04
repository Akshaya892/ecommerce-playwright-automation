import { Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { HomePage } from '../pages/HomePage';

Then('the login page displayed successfully',
    async function (this: CustomWorld){
        const homePage = new HomePage(this.page);

        await homePage.verifyHomepage();
        console.log("Homepage verified")

    }
);
When('the user enter login credentials',
    async function (this: CustomWorld){
        const homePage = new HomePage(this.page);

        await homePage.EnterCreds();
        console.log("Credentials passed")


    }
);
When('the user click login button',
    async function (this: CustomWorld){
        const homePage = new HomePage(this.page);

        await homePage.loginButton();
        console.log("Login Button clicked")

    }
);