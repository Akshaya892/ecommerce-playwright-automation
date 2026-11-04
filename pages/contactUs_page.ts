import {expect, Page, Locator} from "@playwright/test";

export class ContactUs_page {
    constructor(private page: Page) {
    }

    async clicksContactUs(): Promise<void> {
        const contact: Locator = this.page.getByRole('link', {name: 'Contact us'})
        await expect(contact).toBeVisible()
        await contact.click();
    }

    async verifyGetIntouch(): Promise<void> {
        const GetIntouch: Locator = this.page.getByRole('heading', {name: 'Get In Touch'})
        await expect(GetIntouch).toBeVisible()
    }

    async EnterDetails(): Promise<void> {
        const name: Locator = this.page.getByPlaceholder('Name');
        await expect(name).toBeVisible()
        await name.fill("Lisha")
        const email: Locator = this.page.locator('[data-qa="email"]')
        await email.fill("lisha@gmail.com")
        const subject: Locator = this.page.locator('[data-qa="subject"]')
        await subject.fill("Quality Assurance")
        const message: Locator = this.page.locator('[data-qa="message"]')
        await message.fill("Thanks for contacting")
    }

    async UploadFile(): Promise<void> {
        const uploadFile: Locator = this.page.locator('input[name="upload_file"]')
        await uploadFile.setInputFiles('C:\\Users\\leksh\\Downloads\\Automation QA.pdf');
        await this.page.waitForTimeout(5000);
    }


    async ClickSubmit(): Promise<void> {

        const submitButton = this.page.locator('[data-qa="submit-button"]');

        await expect(submitButton).toBeVisible();
        await expect(submitButton).toBeEnabled();

        // Handle confirmation dialog
        this.page.once('dialog', async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        });

        await submitButton.click();

    }

    async VerifySuccessPage(): Promise<void> {

        const successMessage = this.page.locator('div.status.alert.alert-success');
        await expect(successMessage).toBeVisible({timeout: 10000});
        await expect(successMessage).toHaveText(
            'Success! Your details have been submitted successfully.'
        );
    }
    async VerifyHomePage(): Promise<void> {
        const homeButton = this.page.locator(
            'a[href="/"]').filter({has: this.page.locator('i.fa-home')});

        await expect(homeButton).toBeVisible();
        await homeButton.click();
        await this.page.waitForTimeout(5000);

        await expect(this.page).toHaveURL(
            'https://automationexercise.com/'
        );
    }
}