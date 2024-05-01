import { Page } from 'playwright';
import { expect } from 'playwright/test';
const { Action } = require('./Actions');
const expectedTestData = require('../../src/constants/ExpectedTestData');
const locator = require('../../src/constants/Locators');
export class LoginPage extends Action {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async validatePageTitle(expectedPageTile: string){
        expect(await this.getTitle()).toContain(expectedPageTile);
    }

    async signOut(){
        await this.hover(locator.homePage.loginIcon);
        await this.waitUntilLoad();
        await this.click(locator.homePage.logOutButton);
        await this.waitUntilLoad();
    }

    async validateEmptyUserNameError(){
        expect(await this.getText(locator.loginPage.userNameErrorMessage)).toContain(expectedTestData.loginPage.emptyUserNameErrorMessage);
    }

    async validateEmptyPasswordError(){
        expect(await this.getText(locator.loginPage.passwordErrorMessage)).toContain(expectedTestData.loginPage.emptyPasswordErrorMessage);
    }

    async validateIncorrectErrorMessage(){
        expect(await this.getText(locator.loginPage.incorrectPasswordErrormessage)).toContain(expectedTestData.loginPage.incorrectPasswordErrormessage);
    }

    async siginSuccessfull(){
        await this.hover(locator.homePage.loginIcon);
        expect(await this.isElementAvaialble(locator.homePage.signInButton)).toBeFalsy();
    }
    
    


}