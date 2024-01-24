import { test, expect, type Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ElementsPage } from '../pages/elementsPage';

test.describe('3 test for hometask 9', () =>{
    test('Make click, double click and right click', async ({ page })=>{

        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPage.buttons.click();
    
        expect(elementsPage.buttonDoubleClick).toBeVisible;
        expect(elementsPage.buttonDoubleClickSuccessMessage).not.toBeVisible;
        await elementsPage.buttonDoubleClick.dblclick();
        expect(elementsPage.buttonDoubleClickSuccessMessage).toBeVisible;
        expect(elementsPage.buttonDoubleClickSuccessMessage).toContainText('You have done a double click');
    
        expect(elementsPage.buttonRightClick).toBeVisible;
        expect(elementsPage.buttonRightClickSuccessMessage).not.toBeVisible;
        await elementsPage.buttonRightClick.click({ button: 'right' });
        expect(elementsPage.buttonRightClickSuccessMessage).toBeVisible;
        expect(elementsPage.buttonRightClickSuccessMessage).toContainText('You have done a right click');
    
    });
    
    test('Check Broken link and status code 500', async ({ page })=>{

        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPage.brokenLinkAndImages.click();
        expect(elementsPage.brokenLink).toBeVisible;
        await elementsPage.brokenLink.click();
    
        const fiveHundredPage = page.url();
        expect(fiveHundredPage).toContain('500');

    });

    test('Check valid link redirect to Main page', async ({ page })=>{

        const navigateToElementsPage = new MainPage(page);
        const elementsPage = new ElementsPage(page);

        await navigateToElementsPage.goToMainPage();
        await navigateToElementsPage.elements.click();
        await elementsPage.brokenLinkAndImages.click();
        expect(elementsPage.validLink).toBeVisible;
        await elementsPage.validLink.click();
    
        const mainPage = page.url();
        expect(mainPage).toContain('https://demoqa.com/');
        expect(navigateToElementsPage.elements).toBeVisible;
        
    });

})


