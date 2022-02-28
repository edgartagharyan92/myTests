import {BasePage} from "./BasePage";

const locators = require("../resources/locators/loginPageLocators/loginPageLocators.json")
const userCredentials = require("../resources/logingCredentials/userCredentials.json")

/* Created by Edgar Tagharyan on 27/01/2022
*  LoginPage Class implements the
*  main functionalities to login */

export class LoginPage extends BasePage {

    public async navigateToLoginPage(): Promise<void> {

        await super.elementFinder(locators.MyAccountButton.locator).click();
    }

    public async enterUserName(username: string): Promise<void> {

        await super.elementFinder(locators.UserNameField.locator).sendKeys(username)
    }

    public async enterPassword(password: string): Promise<void> {

        await super.elementFinder(locators.PasswordField.locator).sendKeys(password)
    }

    public async pressSubmitButton(): Promise<void> {

        await super.elementFinder(locators.SubmitToLogin.locator).click()
    }

    public async login(user: string): Promise<void> {

        await this.enterUserName(userCredentials[user].username).then(() =>
            this.enterPassword(userCredentials[user].password).then(() =>
                this.pressSubmitButton()))
    }

    public async getErrorMessage(): Promise<string> {

        await super.commonWaits();
        let message: string = await super.elementFinder(locators.ErrorMessage.locator).getText()
        return message;
    }

    public async cleanUsernameAndPasswordFields(): Promise<void> {

        await super.elementFinder(locators.UserNameField.locator).clear().then(() =>
            super.elementFinder(locators.PasswordField.locator).clear())
    }
}