import { expect, type Locator, type Page } from '@playwright/test';

export class ElementsPage {
    
    readonly page: Page;

    readonly textBox: Locator;
    readonly textBoxTitle: Locator;
    readonly enteredDataBox: Locator;
    readonly inputFullName: Locator;
    readonly inputEmail: Locator;
    readonly inputCurrentAddress: Locator;
    readonly inputPermanentAddress: Locator;
    readonly submitButton: Locator;

    readonly checkBox: Locator;
    readonly expandHomeFolder: Locator;
    readonly expandDekstopFolder: Locator;
    readonly notesFolder: Locator;
    readonly noteFolderCheckbox: Locator;
    readonly youHaveSelected: Locator;

    readonly buttons: Locator;
    readonly buttonDoubleClick: Locator;
    readonly buttonDoubleClickSuccessMessage: Locator;
    readonly buttonRightClick: Locator;
    readonly buttonRightClickSuccessMessage: Locator;

    readonly brokenLinkAndImages: Locator;
    readonly brokenLink: Locator;
    readonly validLink: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.textBox = page.locator('//div[1]/div/ul[@class="menu-list"]/li[1]/span[@class="text"]');
        this.textBoxTitle = page.locator('//div[@id="app"]//div[@class="main-header"]');
        this.enteredDataBox = page.locator('//div[@id="output"]');
        this.inputFullName = page.locator('//input[@id="userName"]');
        this.inputEmail = page.locator('//input[@id="userEmail"]');
        this.inputCurrentAddress = page.locator('//textarea[@id="currentAddress"]');
        this.inputPermanentAddress = page.locator('//textarea[@id="permanentAddress"]');
        this.submitButton = page.locator('//button[@id="submit"]');
        this.checkBox = page.locator('.collapse.element-list.show > .menu-list > li:nth-of-type(2) > .text');
        this.expandHomeFolder = page.locator('button[title="Toggle"]  path');
        this.expandDekstopFolder = page.locator('ol  ol > li:nth-of-type(1) > .rct-text > button[title="Toggle"]  path');
        this.notesFolder = page.locator('ol  ol  ol > li:nth-of-type(1) > .rct-text > label > .rct-title');
        this.noteFolderCheckbox = page.locator('//ol/li/ol/li[1]/ol/li[1]/span[@class="rct-text"]/label/span[@class="rct-title"]');
        this.youHaveSelected = page.locator('//div[@id="result"]/span[@class="text-success"]');
        this.buttons = page.locator('//div[1]/div/ul[@class="menu-list"]/li[5]/span[@class="text"]');
        this.buttonDoubleClick = page.locator('//button[@id="doubleClickBtn"]');
        this.buttonRightClick = page.locator('//button[@id="rightClickBtn"]');
        this.buttonDoubleClickSuccessMessage = page.locator('//p[@id="doubleClickMessage"]');
        this.buttonRightClickSuccessMessage = page.locator('//p[@id="rightClickMessage"]');
        this.brokenLinkAndImages = page.locator('//div[1]/div/ul[@class="menu-list"]/li[7]/span[@class="text"]');
        this.brokenLink = page.locator('//div[@class="body-height"]//a[@href="http://the-internet.herokuapp.com/status_codes/500"]');
        this.validLink = page.locator('//div[@class="body-height"]//a[@href="http://demoqa.com"]');
    }

    async checkElementsTitleIsPresentOnPage(){
        await expect(this.page.getByText('Elements').first()).toHaveText('Elements');
    }

    async checkTextBoxTitleIsPresentOnPage(){
        await expect(this.textBoxTitle).toHaveText('Text Box');
    }

    async fillInForm(fullName: string, email: string, currentAddress: string, permanentAddress: string){
        await this.inputFullName.fill(fullName);
        await this.inputEmail.fill(email);
        await this.inputCurrentAddress.fill(currentAddress);
        await this.inputPermanentAddress.fill(permanentAddress);
    }

    async wait(){
        this.page.waitForTimeout(5000);
    }

}