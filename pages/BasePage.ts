import {element, WebElement} from "protractor";
const {browser} = require("protractor");

/* Created by Edgar Tagharyan on 26/01/2022
*  BasePage Class implements the main functions
*  that are used for creating page classes */

export class BasePage {

    private basePageUrl = "https://www.list.am/"

    public async openPage(): Promise<void> {

        await browser.get(this.basePageUrl)
        await this.testPreConditions()
    }

    public async testPreConditions(): Promise<void> {

       await browser.manage().window().maximize()
       await browser.manage().timeouts().implicitlyWait(5000)
    }

    public elementFinder(locator: string): WebElement {

        return element(eval(locator));
    }

    public async commonWaits(): Promise<void> {

        await browser.sleep(2000)
    }

    public quitThePage(): void {
        browser.quit();
    }
}