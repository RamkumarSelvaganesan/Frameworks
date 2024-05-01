import { test, expect } from '@playwright/test';
import { CartPage } from '../../test/pages/CartPage';
const expectedTestData = require('../../src/constants/ExpectedTestData');

test('TC 23 Verify the user is able to see the item added into the cart ', async ({ page }: any) => {
    const cartPage = new CartPage(page);
    const prop = await cartPage.readPropertyFile('./configuration.properties');
    const secrets = await cartPage.readPropertyFile('./data.properties');
    await cartPage.navigateTo(prop.getProperty('amazon_url'));
    await cartPage.gotoSignPage();
    await cartPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await cartPage.goToCartPage();
    await cartPage.validateItemDisplayInCart();
});

test('TC 22 Verify Whether User should be able to add an element into the cart ', async ({ page }: any) => {
    const cartPage = new CartPage(page);
    const prop = await cartPage.readPropertyFile('./configuration.properties');
    await cartPage.navigateTo(prop.getProperty('amazon_url'));
    const secrets = await cartPage.readPropertyFile('./data.properties');
    await cartPage.navigateTo(prop.getProperty('amazon_url'));
    await cartPage.gotoSignPage();
    await cartPage.signWith(secrets.getProperty('user_name').toString(),secrets.getProperty('password'));
    await cartPage.searchProductAndAddToCart('TV');
});