import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly elements: Locator;

    constructor(page: Page){
        this.page = page;
        this.elements = page.locator('//div[1]/div/div[@class="card-up"]');
    }

    async goToMainPage(){
        await this.page.goto('https://demoqa.com/');
    }

    async checkMainPageTitle(){
        expect(this.page).toHaveTitle('DEMOQA')
    }
}