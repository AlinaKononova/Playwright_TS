import { expect, type Locator, type Page } from '@playwright/test';

export class ElementsPageTable {

    readonly page: Page;
    readonly webTables: Locator;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly ageInput: Locator;
    readonly salaryInput: Locator;
    readonly departmentInput: Locator;
    readonly submitNewUserButton: Locator;
    readonly tableWithUsers: Locator;

    readonly searchField: Locator;
    readonly deleteUser: Locator;

    constructor(page: Page){
        this.page = page;
        this.webTables = page.locator('//div[1]/div/ul[@class="menu-list"]/li[4]/span[@class="text"]');
        this.addButton = page.locator('//button[@id="addNewRecordButton"]');
        this.firstNameInput = page.locator('//input[@id="firstName"]');
        this.lastNameInput = page.locator('//input[@id="lastName"]');
        this.emailInput = page.locator('//input[@id="userEmail"]');
        this.ageInput = page.locator('//input[@id="age"]');
        this.salaryInput = page.locator('//input[@id="salary"]');
        this.departmentInput = page.locator('//input[@id="department"]');
        this.submitNewUserButton = page.locator('//button[@id="submit"]');
        this.tableWithUsers = page.locator('.rt-tbody');
        this.searchField = page.locator('//input[@id="searchBox"]');
        this.deleteUser = page.locator('//span[@id="delete-record-1"]');
    }

    async addUserInTable(firstName: string, lastName: string, email: string, age: string, salary: string, departament: string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.ageInput.fill(age);
        await this.salaryInput.fill(salary);
        await this.departmentInput.fill(departament);
    }
}
    
    
