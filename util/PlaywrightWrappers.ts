import {Locator, Page} from "@playwright/test";
export default class PlaywrightWrapper{
    constructor(private page: Page){}
    async goto(url: string){
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",

        });

    }
    async waitAndClick(locator: string | Locator) {
        const element = typeof locator === "string" ? this.page.locator(locator) : locator;
        await element.waitFor({state:"visible"});
        await element.click();
    }
}