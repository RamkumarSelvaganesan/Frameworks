import { test, expect } from '@playwright/test';
import { LoginPage } from '../../test/pages/LoginPage';
const expectedTestData = require('../../src/constants/ExpectedTestData');

test.only('TC 29 Verify if user is able to login with valid email and valid password ', async ({ page }: any) => {
    const loginPage = new LoginPage(page);
    const prop = await loginPage.readPropertyFile('./configuration.properties');
    const secrets = await loginPage.readPropertyFile('./data.properties');
    await loginPage.navigateTo(prop.getProperty('amazon_url'));
    await loginPage.gotoSignPage();
    await loginPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await loginPage.siginSuccessfull();
});

test('TC 24 Verify the user is able to sign out from amazon', async ({ page }: any) => {
    const loginPage = new LoginPage(page);
    const prop = await loginPage.readPropertyFile('./configuration.properties');
    const secrets = await loginPage.readPropertyFile('./data.properties');
    await loginPage.navigateTo(prop.getProperty('amazon_url'));
    await loginPage.gotoSignPage();
    await loginPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await loginPage.signOut();
    await loginPage.validatePageTitle(expectedTestData.loginPage.pageTitle);
    
});

test('TC 26 Verify if the user is able to login with blank user id ', async ({ page }: any) => {
    const loginPage = new LoginPage(page);
    const prop = await loginPage.readPropertyFile('./configuration.properties');
    await loginPage.navigateTo(prop.getProperty('amazon_url'));
    await loginPage.gotoSignPage();
    await loginPage.enterUsername("");
    await loginPage.validateEmptyUserNameError();
});

test('TC 27 Verify if the user is able to login with blank password ', async ({ page }: any) => {
    const loginPage = new LoginPage(page);
    const prop = await loginPage.readPropertyFile('./configuration.properties');
    const secrets = await loginPage.readPropertyFile('./data.properties');
    await loginPage.navigateTo(prop.getProperty('amazon_url'));
    await loginPage.gotoSignPage();
    await loginPage.enterUsername(secrets.getProperty('user_name').toString());
    await loginPage.enterPassword("");
    await loginPage.validateEmptyPasswordError();
});

test('TC 28 Verify if the user is able to login with INVALID password', async ({ page }: any) => {
    const loginPage = new LoginPage(page);
    const prop = await loginPage.readPropertyFile('./configuration.properties');
    const secrets = await loginPage.readPropertyFile('./data.properties');
    await loginPage.navigateTo(prop.getProperty('amazon_url'));
    await loginPage.gotoSignPage();
    await loginPage.enterUsername(secrets.getProperty('user_name').toString());
    await loginPage.enterPassword("WrongPassword");
    await loginPage.validateIncorrectErrorMessage();
});

