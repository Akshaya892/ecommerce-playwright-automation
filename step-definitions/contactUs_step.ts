import { Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { ContactUs_page } from '../pages/contactUs_page';

When('the user clicks on the Contact Us button',
    async function (this: CustomWorld){
        const contactPage = new ContactUs_page(this.page);

        await contactPage.clicksContactUs();
        console.log("Contact us Button clicked ")

    }
);


Then('the user should see GET IN TOUCH',
    async function(this:CustomWorld){
    const contactPage = new ContactUs_page(this.page)

    await contactPage.verifyGetIntouch();
    console.log("Verify GET IN TOUCH")

});

When('the user enters name, email, subject and message',
    async function(this:CustomWorld){
        const contactPage = new ContactUs_page(this.page)

        await contactPage.EnterDetails();
        console.log("Details passed")

    }
);
When('the user uploads a file',
    async function(this:CustomWorld){
        const contactPage = new ContactUs_page(this.page)
        await contactPage.UploadFile();
        console.log("File uploaded")


    });


When('the user clicks on the Submit button',
    async function(this:CustomWorld){
        const contactPage = new ContactUs_page(this.page)
        await contactPage.ClickSubmit();
        console.log("Submit Button clicked")
    }
    );


Then('the user should see the success message',
    async function(this:CustomWorld){
        const contactPage = new ContactUs_page(this.page)
        await contactPage.VerifySuccessPage();
        console.log('Success message verified')
    }
)
When('the user navigates back to the homepage',
    async function(this:CustomWorld){
        const contactPage = new ContactUs_page(this.page)
        await contactPage.VerifyHomePage();
        console.log('Home page verified')
    }
);