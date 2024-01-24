import { test, expect, type Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ElementsPageTable } from '../pages/elementsPageTable';

test.describe('3 tests for Hometask 8', () =>{


    test('Number One: add a new User in the table', async({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPageTable = new ElementsPageTable(page);

        const firstName = 'John';
        const lastName = 'Morgan';
        const email = 'john@morgan.com';
        const age = '35';
        const salary = '5000';
        const departament = 'Sale';

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPageTable.webTables.click();

        await elementsPageTable.addButton.click();
        await elementsPageTable.addUserInTable(firstName, lastName, email, age, salary, departament);
        await elementsPageTable.submitNewUserButton.click();
        expect(elementsPageTable.tableWithUsers).toContainText(email);

    })

    test('Number Two: search for a User', async({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPageTable = new ElementsPageTable(page);

        const userFirstName = 'Cierra';

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPageTable.webTables.click();

        await elementsPageTable.searchField.fill(userFirstName);
        expect(elementsPageTable.tableWithUsers).toContainText(userFirstName);
    })

    test('Number Three: delete a User', async({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPageTable = new ElementsPageTable(page);

        const userFirstName = 'Cierra';

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPageTable.webTables.click();

        await elementsPageTable.searchField.fill(userFirstName);
        await elementsPageTable.deleteUser.click();
        expect(elementsPageTable.tableWithUsers).not.toContainText(userFirstName);

    })
})