import { test, expect } from '@playwright/test';
import { ReturnOrderPage } from '../../test/pages/ReturnOrderPage';
const expectedTestData = require('../../src/constants/ExpectedTestData');

test('TC 14 Verifty Whether The Orders Button Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateTabDisplay('Orders');
});

test('TC 15 Verifty Whether The Buy Again Button Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateTabDisplay('Buy Again');
});

test('TC 17 Verifty Whether The  Not Yet Shipped Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateTabDisplay('Not Yet Shipped');
});

test('TC 18 Verifty Whether The  Cancelled Orders Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateTabDisplay('Cancelled Orders');
});

test('TC 19 Verifty Whether The View Or Edit Your Browsing History Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateHistoryViewButtonDisplay();
});

test('TC 20 Verifty Whether The Search Orders Is Present Under  The Returns And Order Tab  In Web Page', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    await returnOrderPage.validateSearchButtonDisplay();
});

test.only('TC 31 Verify if the user is see the returns and orders ', async ({ page }: any) => {
    const returnOrderPage = new ReturnOrderPage(page);
    const prop = await returnOrderPage.readPropertyFile('./configuration.properties');
    const secrets = await returnOrderPage.readPropertyFile('./data.properties');
    await returnOrderPage.navigateTo(prop.getProperty('amazon_url'));
    await returnOrderPage.gotoSignPage();
    await returnOrderPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await returnOrderPage.goToReturnOrderPage();
    expect(await returnOrderPage.getTitle()).toEqual(expectedTestData.returnOrderPage.pageTitle);
});