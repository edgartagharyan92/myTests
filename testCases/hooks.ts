import {browser} from "protractor";
import {LoginPage} from "../pages/LoginPage";

/* This module contains steps that should be executed
   @before and @after each step of loginTest        */

export function hooks() {

    let login: LoginPage = new LoginPage()

    beforeEach(() => {
        browser.waitForAngularEnabled(false)
            .then(r => login.openPage()
                .then(() => login.navigateToLoginPage()));
    });

    afterEach(() => {
        login.cleanUsernameAndPasswordFields()
    });

    afterAll(() => {
        login.quitThePage()
    });
}



