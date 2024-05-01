import exp from 'constants';
import { Page } from 'playwright';
import { expect } from 'playwright/test';
const { Action } = require('./Actions');
const expectedTestData = require('../../src/constants/ExpectedTestData');
const locator = require('../../src/constants/Locators');

export class ReturnOrderPage extends Action {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async goToReturnOrderPage(){
        await this.click(locator.homePage.returnOrderButton);
        await this.waitUntilLoad();
    }

    async validateTabDisplay(tabName:string){
        expect(this.isElementAvaialble(locator.returnOrderPage.tablist(tabName))).toBeTruthy();
    }

    async validateHistoryViewButtonDisplay(){
        expect(this.isElementAvaialble(locator.returnOrderPage.historyViewButton)).toBeTruthy();
    }

    async validateSearchButtonDisplay(){
        expect(this.isElementAvaialble(locator.returnOrderPage.searchButton)).toBeTruthy();
    }


}