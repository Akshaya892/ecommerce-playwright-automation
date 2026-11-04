import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

export class CustomWorld extends World {
    page!: Page;
}

setWorldConstructor(CustomWorld);