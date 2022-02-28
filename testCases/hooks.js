"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
const protractor_1 = require("protractor");
const LoginPage_1 = require("../pages/LoginPage");
/* This module contains steps that should be executed
   @before and @after each step of loginTest        */
function hooks() {
    let login = new LoginPage_1.LoginPage();
    beforeEach(() => {
        protractor_1.browser.waitForAngularEnabled(false)
            .then(r => login.openPage()
            .then(() => login.navigateToLoginPage()));
    });
    afterEach(() => {
        login.cleanUsernameAndPasswordFields();
    });
    afterAll(() => {
        login.quitThePage();
    });
}
exports.hooks = hooks;
