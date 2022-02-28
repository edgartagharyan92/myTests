"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
const locators = require("../resources/locators/loginPageLocators/loginPageLocators.json");
const userCredentials = require("../resources/logingCredentials/userCredentials.json");
/* Created by Edgar Tagharyan on 27/01/2022
*  LoginPage Class implements the
*  main functionalities to login */
class LoginPage extends BasePage_1.BasePage {
    navigateToLoginPage() {
        const _super = Object.create(null, {
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.elementFinder.call(this, locators.MyAccountButton.locator).click();
        });
    }
    enterUserName(username) {
        const _super = Object.create(null, {
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.elementFinder.call(this, locators.UserNameField.locator).sendKeys(username);
        });
    }
    enterPassword(password) {
        const _super = Object.create(null, {
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.elementFinder.call(this, locators.PasswordField.locator).sendKeys(password);
        });
    }
    pressSubmitButton() {
        const _super = Object.create(null, {
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.elementFinder.call(this, locators.SubmitToLogin.locator).click();
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterUserName(userCredentials[user].username).then(() => this.enterPassword(userCredentials[user].password).then(() => this.pressSubmitButton()));
        });
    }
    getErrorMessage() {
        const _super = Object.create(null, {
            commonWaits: { get: () => super.commonWaits },
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.commonWaits.call(this);
            let message = yield _super.elementFinder.call(this, locators.ErrorMessage.locator).getText();
            return message;
        });
    }
    cleanUsernameAndPasswordFields() {
        const _super = Object.create(null, {
            elementFinder: { get: () => super.elementFinder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.elementFinder.call(this, locators.UserNameField.locator).clear().then(() => _super.elementFinder.call(this, locators.PasswordField.locator).clear());
        });
    }
}
exports.LoginPage = LoginPage;
