import {LoginPage} from "../pages/LoginPage";
import {hooks} from "./hooks"

/* This module contains test specs,
*  @before and @after each spec default steps
*  are regulated by "hooks()" function */

describe('check the login with invalid credentials', function () {

    hooks()
    let login: LoginPage = new LoginPage()

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

module.exports