/*import {test,expect, Locator} from "@playwright/test";
test("dynamic locators", async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//loop to click button 5 times
for (let i=0;i<=5;i++){
    let button:Locator= page.locator('//button[text()="STOP" or text()="START"]');
    button= await page.locator('//button[@name="start"]');
    button= await page.locator('//button[@name="start" or @name="stop"]');
    button= await page.locator('//button[contains@name,"st"]');
    button= await page.locator('//button[starts-with@name,"start"]');
    //click the button
    await button.click();
    //wait for 2 seconds
    await page.waitForTimeout(3000);
   
}
})*/
import {test,expect, Locator} from "@playwright/test";
test("dynamic locators", async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//loop to click button 5 times
for (let i=0;i<=5;i++){
    const button:Locator= page.getByRole('button',{name:/START|STOP/});

    //click the button
    await button.click();
    //wait for 2 seconds
    await page.waitForTimeout(3000);
   
}
})