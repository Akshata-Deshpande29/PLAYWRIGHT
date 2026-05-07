import{test,expect} from "@playwright/test";

/*test("title", ()=>{
//step1 and so on steps
})
*/
//fixture-global variable: page, browser
test("Verify page title", async({page})=>{
await page.goto("https://demo.nopCommerce.com/");
let title :string =await page.title();
console.log("title",title);
//await expect(page).toHaveTitle("myShop");
})