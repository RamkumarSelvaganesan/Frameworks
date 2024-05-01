import { link } from "fs";

export ={
    homePage :{
        logoLocator : '//a[@id="nav-logo-sprites"]',
        firstSectionData: '//div[@id="nav-xshop-container"]//a',
        loginIcon : '//span[@id="nav-link-accountList-nav-line-1"]',
        signInButton : '//div[@id="nav-flyout-ya-signin"]//span[@class="nav-action-inner"]',
        hyperLinks: "//div[contains(@class,'navFooterLinkCol')][1]//a",
        topNavigation:(name :string) =>  `//div[@id="nav-xshop"]//a[contains(text(),"${name}")]`,
        searchTextBox: '//input[@id="twotabsearchtextbox"]',
        searchIcon: '//input[@id="nav-search-submit-button"]',
        searchResultList : '//div[@data-cy="title-recipe"]//h2//span',
        sortBy: '//select[@name="s"]',
        sortValue:(value:string) =>`//a[text() = '${value}']`,
        displaySortValue: '//span[@data-action="a-dropdown-button"]//span[2]',
        returnOrderButton: '//a[@id="nav-orders"]',
        accountButton: '//a[@id="nav-link-accountList"]',
        cartButton: '//div[@id="nav-cart-count-container"]',
        logOutButton: '//a[@id="nav-item-signout"]',
        searchSuggestionList: '//div[@class="autocomplete-results-container"]//div[@role="button"]',
        displaylanguage: '//span[@class="nav-line-2"]//div',
        languageOption:(name:string) => `//div[@id="nav-flyout-icp"]//span[@dir="ltr" and text()="${name}"]`,
        accountPageHyperLink: `//div[@id="nav-al-container"]//div[text()='Your Account']`,
        primeMemberHyperLink :  `//div[@id="nav-al-container"]//span[text()='Your Prime Membership']`,
        topAllOptions: '//a[@id="nav-hamburger-menu"]//span',
        sidePanelOptions:(optionName:string) => `//ul[contains(@class,'hmenu-visible')]//*[text()='${optionName}']`,
        backToTop: '//div[@class="navFooterBackToTop"]//span',
        linksAtBottomPage: (linkName: string) => `//div[@role="presentation"]//*[text()='${linkName}']`,
        goToButton: "//a[contains(text(),'Go to')]",
        changeRegionButton: '//div[@id="nav-flyout-icp"]//div[text()="Change country/region."]',
        countryDropdown: '//span[@id="icp-dropdown"]',
        countryDropdownOptions:(options:string) =>`//div[@class="a-popover-wrapper"]//a[contains(text(),'${options}')]`,
        getCountryDetails: '//a[@id="icp-touch-link-country"]//span[@class="icp-color-base"]',
        goToWebsite: '//span[@id="icp-save-button-announce"]//..//input'
    },

    loginPage: {
        userName: '//input[@id="ap_email"]',
        password: '//input[@id="ap_password"]',
        continue: '//input[@type="submit"]',
        userNameErrorMessage : '//div[@id="auth-email-missing-alert"]//div[@class="a-alert-content"]',
        passwordErrorMessage: '//div[@id="auth-password-missing-alert"]//div[@class="a-alert-content"]',
        incorrectPasswordErrormessage: '//div[@class="a-alert-content"]//span'
    },

    returnOrderPage: {
        tablist:(tabName:string)=> `//ul[@role="tablist"]//li[contains(text(),'${tabName}')]`,
        historyViewButton : '//a[@href="/gp/history"]',
        searchButton: "//input[@type='submit']//..//span[text()='Search Orders']"
    },

    cartPage: {
        productList: "//div[@class='sc-item-content-group']//span[contains(@class,'sc-product-title')]//span[contains(@class,'a-truncate-full')]"
    },

    searchResultPage: {
        productName: "//div[@data-cy='title-recipe'][1]//h2//span",
        productAddToCart: "//div[@data-cy='title-recipe'][1]//..//button[text()='Add to cart']"
    }
}