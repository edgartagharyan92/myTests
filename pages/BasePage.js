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
exports.BasePage = void 0;
const protractor_1 = require("protractor");
const { browser } = require("protractor");
/* Created by Edgar Tagharyan on 26/01/2022
*  BasePage Class implements the main functions
*  that are used for creating page classes */
class BasePage {
    constructor() {
        this.basePageUrl = "https://www.list.am/";
    }
    openPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.get(this.basePageUrl);
            yield this.testPreConditions();
        });
    }
    testPreConditions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.manage().window().maximize();
            yield browser.manage().timeouts().implicitlyWait(5000);
        });
    }
    elementFinder(locator) {
        return (0, protractor_1.element)(eval(locator));
    }
    commonWaits() {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.sleep(2000);
        });
    }
    quitThePage() {
        browser.quit();
    }
}
exports.BasePage = BasePage;
