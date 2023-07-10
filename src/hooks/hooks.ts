import { BeforeAll, AfterAll, Before, After} from "@cucumber/cucumber";
import { chromium,Browser,Page, BrowserContext} from "@playwright/test";
import { fixture } from "./pageFixture";

let browser: Browser;
let context:BrowserContext;

BeforeAll(async function (){
    browser=await chromium.launch({headless:false});
});
Before(async function () {
    //BrowserContexts fournit un moyen d'exploiter plusieurs sessions de navigateur indépendantes
    context=await browser.newContext();
    const page=await browser.newPage();
    fixture.page=page;
});
After(async function({pickle}) {
    //Screenshot
    const img= await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
    await this.attach(img,"image/png");
    await fixture.page.close();
    await context.close();
});
AfterAll(async function() {
    await browser.close();
})