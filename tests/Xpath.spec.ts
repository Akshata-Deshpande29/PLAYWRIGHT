import {test,expect, Locator} from "@playwright/test";
import { LoginPage } from './Login.page';
test("xpath locators", async({page})=>{
const loginPage = new LoginPage(page);
await loginPage.open();
//page.goto("https://practice.expandtesting.com/login");
const absolutelogo=page.locator("//html/body/div/div/div[1]");
await page.waitForTimeout(3000);
await expect(absolutelogo).toBeVisible();
const relativelogo=page.locator("//h4[contains(text(),'Accepted usernames are:')]");
await expect(relativelogo).toBeVisible();
//contains
const products:Locator=page.locator("//input[contains(@class,'input_error form_input')]");
const productCount:number=await products.count();
console.log("no. of products are:",productCount);
expect(productCount).toBeGreaterThan(0);
//console.log(await products.textContent());//err strict mode validation
console.log ("1st",await products.first().textContent());
console.log ("nth",await products.nth(1).textContent());
let productTitle:string[]= await products.allTextContents();// all matched products
console.log("all titles",productTitle);
for(let pt of productTitle ){
 console.log(pt);
}
//startwith
const registerprod:Locator = page.locator("//input[starts-with(@class,'input')]");
const count:number=await registerprod.count();
expect(count).toBeGreaterThan(0);
console.log("start count",count);
//last item
const lastitem:Locator= page.locator("(//div[@id='login_credentials']/text()[last()]");
console.log("last item", lastitem);
});
//position
//const positionitem:Locator= page.locator("//div[@id='login_credentials']//br[last()]");
//console.log("last item",positionitem.textContent);
