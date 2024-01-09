import { test, expect, type Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ElementsPage } from '../pages/elementsPage';

test.describe('3 tests for Hometask 7', ()=>{
    
    test('Navigate to Elements page', async({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.checkMainPageTitle();
        await expect(navigateToElementsPage.elements).toBeVisible();

        await navigateToElementsPage.elements.click();
        
        await elementsPage.checkElementsTitleIsPresentOnPage();
    })

    test('Open page, fill in the form, click Submit and get entered data', async ({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        const fullName = 'John Patrick';
        const email = 'john@patrick.com';
        const currentAddress = 'Ukraine, Kyiv';
        const permanentAddress = 'Ukraine, Lviv';

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await expect(elementsPage.textBox).toBeVisible();
        await elementsPage.textBox.click();
        await elementsPage.checkTextBoxTitleIsPresentOnPage();

        await expect(elementsPage.enteredDataBox).not.toBeVisible();

        await elementsPage.fillInForm(fullName, email, currentAddress, permanentAddress);
        await elementsPage.submitButton.click();

        await expect(elementsPage.enteredDataBox).toBeVisible();
        await expect(elementsPage.enteredDataBox).toContainText(fullName);
        await expect(elementsPage.enteredDataBox).toContainText(email);
        await expect(elementsPage.enteredDataBox).toContainText(currentAddress);
        await expect(elementsPage.enteredDataBox).toContainText(permanentAddress);
    });

    test('Open page and check folder "Notes"', async ({ page }) =>{
        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        
        await elementsPage.checkBox.click();
        await elementsPage.expandHomeFolder.click();
        await elementsPage.expandDekstopFolder.click();
        await expect(elementsPage.notesFolder).toBeVisible();
        await elementsPage.noteFolderCheckbox.click();
        await expect(elementsPage.youHaveSelected).toBeVisible();
    });
})
