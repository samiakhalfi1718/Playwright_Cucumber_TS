import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browsermanager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/utils/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});
Before(async function ({pickle}) {
    const scenarioName=pickle.name+pickle.id;
    //BrowserContexts fournit un moyen d'exploiter plusieurs sessions de navigateur indépendantes
    context = await browser.newContext();
    const page = await browser.newPage();
    fixture.page = page;
    fixture.logger=createLogger(options(scenarioName));
});
After(async function ({ pickle, result }) {
    console.log(result?.status);
    //Screenshot
    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");
    }
    await fixture.page.close();
    await context.close();
});
AfterAll(async function () {
    await browser.close();
    fixture.logger.close();
})