"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("../pages/LoginPage");
const hooks_1 = require("./hooks");
/* This module contains test specs,
*  @before and @after each spec default steps
*  are regulated by "hooks()" function */
describe('check the login with invalid credentials', function () {
    (0, hooks_1.hooks)();
    let login = new LoginPage_1.LoginPage();
    it('Error message should appear when login with invalid credentials', function () {
        login.login("User_1");
        let errorMessageIs = login.getErrorMessage();
        let expectedErrorMessage = "Մուտքագրված տվյալները սխալ են:";
        expect(expectedErrorMessage).toBe(errorMessageIs);
    });
    it('Error message should appear when email format is Invalid', function () {
        login.login("User_2");
        let errorMessageIs = login.getErrorMessage();
        let expectedErrorMessage = "Տվյալ էլ փոստի հասցեն սխալ է:";
        expect(expectedErrorMessage).toEqual(errorMessageIs);
    });
});
module.exports;
