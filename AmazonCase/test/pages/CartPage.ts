import { Page } from 'playwright';
import { expect } from 'playwright/test';
const { Action } = require('./Actions');
const expectedTestData = require('../../src/constants/ExpectedTestData');
const locator = require('../../src/constants/Locators');
const {HomePage} = require('./HomePage');

export class CartPage extends Action {
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.homePage = new HomePage(page);
    }

    async goToCartPage(){
        await this.click(locator.homePage.cartButton);
        await this.waitUntilLoad();
    }

    async validateItemDisplayInCart(){
        expect((await this.getAllText(locator.cartPage.productList)).length).toBeGreaterThan(0);
    }

    async searchProductAndAddToCart(productName:string){
        await this.homePage.searchProduct(productName);
        let firstResultProduct =  await this.page.locator(locator.searchResultPage.productName).first().textContent();
        await this.scrollToElement(locator.searchResultPage.productAddToCart)
        await this.click(locator.searchResultPage.productAddToCart);
        await this.page.waitForTimeout(2*1000);
        await this.goToCartPage();
        expect((await this.getAllText(locator.cartPage.productList))).toContain(firstResultProduct);
    }

    
}