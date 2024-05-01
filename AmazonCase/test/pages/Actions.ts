import { Page } from 'playwright';
import {PropertiesReaderWrapper} from '../../src/utils/Property';
const locator = require('../../src/constants/Locators');

export class Action {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.click(locator);
        
    }

    async getTitle() {
        return await this.page.title();
    }

    async readPropertyFile(filePath:string){
        return new PropertiesReaderWrapper(filePath);
    }

    async isElementAvaialble(locator : string){
        await this.waitUntilLoad();
        return await this.page.locator(locator).isVisible();
    }

    async getAllText(locator: string){
        return await this.page.locator(locator).allTextContents();
    }
    async getText(locator: string){
        await this.waitUntilLoad();
        return await this.page.locator(locator).first().textContent();
    }

    async hover(locator:string){
        await this.page.locator(locator).hover();
    }

    async type(locator:string, password:string){
        await this.page.fill(locator,password);
    }

    async scrollToElement(locator:string){
        await this.page.locator(locator).first().scrollIntoViewIfNeeded();
    }

    async waitUntilLoad(){
        await this.page.waitForTimeout(1000);
       await this.page.waitForLoadState('load');
       // await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async gotoSignPage(){
        await this.hover(locator.homePage.loginIcon);
        await this.click(locator.homePage.signInButton);
        await this.waitUntilLoad();
    }

    async signWith(userName:string,password: string){
        await this.type(locator.loginPage.userName,userName);
        await this.click(locator.loginPage.continue);
        await this.type(locator.loginPage.password,password);
        await this.click(locator.loginPage.continue);
        await this.waitUntilLoad();
    }

    async enterUsername(userName:string){
        await this.type(locator.loginPage.userName,userName);
        await this.click(locator.loginPage.continue);
    }

    async enterPassword(password:string){
        await this.type(locator.loginPage.password,password);
        await this.click(locator.loginPage.continue);
    }

    async getScreenPoistion() {
        const scrollTop = await this.page.evaluate(() => {
          return window.scrollY;
        });
        return scrollTop;
      }
    
}