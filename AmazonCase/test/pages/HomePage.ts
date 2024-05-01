import { Page } from 'playwright';
import { expect } from 'playwright/test';
const { Action } = require('./Actions');
const expectedTestData = require('../../src/constants/ExpectedTestData');
const locator = require('../../src/constants/Locators');

export class HomePage extends Action {
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
   
    async validatePageTitle(expectedPageTile: string){
        expect(await this.getTitle()).toContain(expectedPageTile);
    }

    async validateLogoDisplay(){
        expect(await this.isElementAvaialble(locator.homePage.logoLocator)).toBeTruthy();
    }

    async validateFirstRowSection(){
      //  console.log(locator.homePage.firstRowData);
        //console.log(expectedTestData.firstRowData);
    //expect(await this.getAllText(locator.homePage.firstSectionData)).toEqual(expectedTestData.homePage.firstRowData);

    }

    async validateLogInDisplay(){
        await this.hover(locator.homePage.loginIcon);
        expect(await this.isElementAvaialble(locator.homePage.signInButton)).toBeTruthy();
    }
   
    async validateHyperLinkDisplay(){
        await this.scrollToElement(locator.homePage.hyperLinks);
        expect(await this.getAllText(locator.homePage.hyperLinks)).toEqual(expectedTestData.homePage.hyperLinks);
    }

    async clickOnAboutUs(){
        await this.page.locator(locator.homePage.hyperLinks).first().click();
    }

    async openProductpage(productName: string){
        await this.page.locator(locator.homePage.topNavigation(productName)).first().click();
        await this.waitUntilLoad();
    }

    async searchProduct(productName : string){
        await this.type(locator.homePage.searchTextBox, productName);
        await this.click(locator.homePage.searchIcon);
        await this.waitUntilLoad();
    }

    async searchProductAndSelectFromSuggesttion(productName:string){
        await this.type(locator.homePage.searchTextBox, productName);
        await this.waitUntilLoad();
        await this.page.keyboard.press('ArrowDown');
        let firstSuggestioned = await this.page.locator(locator.homePage.searchSuggestionList).first().textContent();
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.waitUntilLoad();
        return firstSuggestioned;
    }

    async changeLanguage(language:string){
        await this.hover(locator.homePage.displaylanguage);
        await this.click(locator.homePage.languageOption(language));
        expect(await this.getText(locator.homePage.displaylanguage)).toContain(language);
    }

    async vaildateSearchResultContains(productName:string){
        expect(await this.getText(locator.homePage.searchResultList)).toContain(productName);
    }

    async sortBy(value: string){
        await this.click(locator.homePage.displaySortValue);
        await this.waitUntilLoad();
        await this.click(locator.homePage.sortValue(value));
    }

    async validateSortByDisplay(value: string){
        expect(await this.getText(locator.homePage.displaySortValue)).toContain(value);
    }

    async validateReturnOrderDisplay(){
        expect(await this.isElementAvaialble(locator.homePage.returnOrderButton)).toBeTruthy();
    }

    async validateAccountDisplay(){
        expect(await this.isElementAvaialble(locator.homePage.accountButton)).toBeTruthy();
    }

    async gotoAccountPage(){
        await this.click(locator.homePage.accountButton);
        await this.waitUntilLoad();
    }

    async validateAccountisDisplay(){
        await this.hover(locator.homePage.accountButton);
        expect(await this.isElementAvaialble(locator.homePage.accountPageHyperLink)).toBeTruthy();
    }

    async validateOptionDisplayInSidePanel(OptionName:string){
        await this.click(locator.homePage.topAllOptions);
        expect(await this.isElementAvaialble(locator.homePage.sidePanelOptions(OptionName))).toBeTruthy();
    }

    async validateScrollToTop(){
        await this.scrollToElement(locator.homePage.backToTop);
        await this.page.waitForTimeout(1500);
        await this.click(locator.homePage.backToTop);
        expect(await this.getScreenPoistion()).toBe(0);
    }

    async openLinkAtBottom(name:string){
        await this.scrollToElement(locator.homePage.linksAtBottomPage(name));
        await this.click(locator.homePage.linksAtBottomPage(name));
        await this.waitUntilLoad();
        if(await this.isElementAvaialble(locator.homePage.redirectGoTo)){
        await this.click(locator.homePage.redirectGoTo);
        }
        await this.waitUntilLoad();
    }

    async validateChangeRegion(regionName:string){
        await this.hover(locator.homePage.displaylanguage);
        await this.click(locator.homePage.changeRegionButton);
        await this.click(locator.homePage.countryDropdown);
        await this.click(locator.homePage.countryDropdownOptions(regionName));
        const context = await this.page.context();
        await this.click(locator.homePage.goToWebsite);
        const newTab = await context.waitForEvent('page');
        expect(await newTab.locator(locator.homePage.getCountryDetails).textContent()).toContain(regionName);
    }

    async goToPrimeMemberpage(){
        await this.hover(locator.homePage.accountButton);
        await this.click(locator.homePage.primeMemberHyperLink);
        await this.waitUntilLoad();
    }


}