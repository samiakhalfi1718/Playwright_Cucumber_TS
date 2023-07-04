import { BeforeAll, AfterAll} from "@cucumber/cucumber";
import { chromium,Browser,Page} from "@playwright/test";
import { fixture } from "./pageFixture";

let browser: Browser;

BeforeAll(async function (){
    browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    fixture.page=page;
})
AfterAll(async function() {
    await fixture.page.close();
    await browser.close();
})