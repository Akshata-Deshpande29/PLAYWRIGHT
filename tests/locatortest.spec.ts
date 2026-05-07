import{test,expect, Locator} from "@playwright/test";
test("Verify locators", async({page})=>{
await page.goto("https://demo.nopCommerce.com/");
//getByAltText
 const logo: Locator = page.getByAltText("nopCommerce demo store");
 await page.waitForTimeout(3000);
//logo.click();
 await expect(logo).toBeVisible();
 await page.waitForTimeout(3000);
//getByText
await expect(page.getByText("Welcome to our store")).toBeVisible();
//await expect(page.getByText(/welcome\s+to\s+our\s+store/i)).toBeVisible();//regular- case insenstive
await page.waitForTimeout(3000);
//console.log(Text);
//getbyrole
await page.getByRole("link",{name:'register'}).click();
await expect(page.getByRole("heading",{name:'register'})).toBeVisible();
await page.waitForTimeout(1000);
//getbylabel
await page.getByLabel('First name:').fill("akshata");
await page.getByLabel('Last name:').fill("D");
await page.getByLabel('Email:').fill("ak@gmail.com");
//await page.pause();
//page.getByPlaceHolder
//find holder with given placeholder text, best for inputs without a label but having a placeholder
await page.getByPlaceholder('Search store').fill('Apple MacBook Pro');
//await page.pause();
})
