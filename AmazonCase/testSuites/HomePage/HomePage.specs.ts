import { test, expect } from '@playwright/test';
import { HomePage } from '../../test/pages/HomePage';
const expectedTestData = require('../../src/constants/ExpectedTestData');


test('TC 01 Validate Amazon page title', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validatePageTitle(expectedTestData.homePage.pageTitle);
});

test('TC 02 Validate Amazon Logo should be display at left corner', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateLogoDisplay();
});

test('TC 03 Validate Row selection available in Homepage', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateFirstRowSection();
});

test('TC 04 Validate Login option available in Homepage', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateLogInDisplay();
});

test('TC 05 Verify If The User Is Able To See Login/Signin Page', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.validatePageTitle(expectedTestData.loginPage.pageTitle);
});

test('TC 06 Validate Hyperlinks available in Homepage', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateHyperLinkDisplay();
});

test('TC 07 Validate Amazon About us page title', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.clickOnAboutUs()
    await homePage.validatePageTitle(expectedTestData.aboutUs.pageTitle);
});

test('TC 08 Validate Amazon Mobile page title', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openProductpage('Mobiles')
    await homePage.validatePageTitle(expectedTestData.mobilePage.pageTitle);
});

test('TC 09 Validate Amazon Mobile page has Mobile phones', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openProductpage('Mobiles');
    let mobileName = 'Redmi 13C';
    await homePage.searchProduct(mobileName);
    await homePage.vaildateSearchResultContains(mobileName);
});

test('TC 10 Validate Amazon Electron page title', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openProductpage('Electronics')
    await homePage.validatePageTitle(expectedTestData.electronicsPage.pageTitle);
});

test('TC 11 Validate Amazon Electronics page has TV', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openProductpage('Electronics');
    let electronicsName = 'TV';
    await homePage.searchProduct(electronicsName);
    await homePage.vaildateSearchResultContains(electronicsName);
});

test('TC 12 Verify If The User Is Able To Sort The Electronics Devices Using Filters ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openProductpage('Mobiles');
    let electronicsName = 'phones';
    await homePage.searchProduct(electronicsName);
    let sortOption = 'Price: Low to High'
    await homePage.sortBy(sortOption);
    await homePage.validateSortByDisplay(sortOption);
});

test('TC 13 Verifty Whether The Returns & Order Button Is Present In The Web Page ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateReturnOrderDisplay();
});

test('TC 21 Verifty whether  the Accounts & Lists button is visible and click to open', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    const secrets = await homePage.readPropertyFile('./data.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await homePage.validateAccountDisplay();
    await homePage.gotoAccountPage();
    await homePage.validatePageTitle(expectedTestData.accountPage.pageTitle);
});

test('TC 30 Verify if the user is able to see My orders after Logging in ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    const secrets = await homePage.readPropertyFile('./data.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await homePage.validateReturnOrderDisplay();
});


test('TC 32 Verify if the user is able to search a item in the search box  ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    let searchedProductName = await homePage.searchProductAndSelectFromSuggesttion("Mobile under 10000");
    expect(await homePage.getTitle()).toContain("Amazon.in : "+searchedProductName);
});

test('TC 33 Verify if the user is able to change the language from the homepage ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.changeLanguage('TA');
});

test('TC 34 Verify if the user is able to see the list account settings', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    const secrets = await homePage.readPropertyFile('./data.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await homePage.validateAccountisDisplay();
});

test('TC 35 Verify if the user is able to see the new releases ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateOptionDisplayInSidePanel('New Releases');
});

test('TC 36 Verify if the user is able to click back to top button ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.validateScrollToTop();
});

test('TC 37 Verify if the user is able to connect through social media ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openLinkAtBottom('Facebook');
    expect(await homePage.getTitle()).toEqual(expectedTestData.homePage.facebookPageTitle);
});

test('TC 38 Verify if the user is able to navigate to sell on amazon page ', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.openLinkAtBottom('Sell on Amazon');
    expect(await homePage.getTitle()).toEqual(expectedTestData.homePage.sellOnAmazonPageTitle);
});

test('TC 39 Verify if the user is able to navigate to website of different country language', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    const secrets = await homePage.readPropertyFile('./data.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await homePage.validateChangeRegion("Australia");
});

test.only('TC 40 Verify if the user is able to navigate to prime membership page', async ({ page }: any) => {
    const homePage = new HomePage(page);
    const prop = await homePage.readPropertyFile('./configuration.properties');
    const secrets = await homePage.readPropertyFile('./data.properties');
    await homePage.navigateTo(prop.getProperty('amazon_url'));
    await homePage.gotoSignPage();
    await homePage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await homePage.goToPrimeMemberpage();
    expect(await homePage.getTitle()).toEqual(expectedTestData.primePage.pageTitle);
});
