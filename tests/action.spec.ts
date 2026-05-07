/*tag with id tag#id, #id
tag with class .class
tag with attribute [attr=value]
tag with class and attribute .class[attr=value]*/
import { test, expect, Locator } from '@playwright/test';
test('textbox', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
    //tag#id
//await page.locator('input#small-searchterms').fill('laptop');
const textbox:Locator = page.locator('#name');
await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();
const maxlength:any = await textbox.getAttribute("maxlength");//returns value of maxlength attribute
expect(maxlength).toBe('15');
await textbox.fill("akshata");
console.log("typed value in box:",await textbox.inputValue())

});
test('radio button actions', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const maleradio:Locator = page.locator('#male');
await expect(maleradio).toBeVisible();
await expect(maleradio).toBeEnabled();
 expect(await maleradio.isChecked()).toBe(false);
 await page.waitForTimeout(3000);
 await maleradio.check();
 await expect(maleradio).toBeChecked();
 //const sundaylabel:Locator = page.getByLabel('sunday');
//
const days:string[] = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));  
expect(checkboxes.length).toBe(7);
//select all checkboxes and assert each is chekced
for(const checkbox of checkboxes){
    await checkbox.check();
}
//select last 2 checkboxes and assert
for(const checkbox of checkboxes.slice(-2)){
    await checkbox.uncheck();
    await page.waitForTimeout(2000);
    await expect(checkbox).not.toBeChecked();
}
//randomly check 3
 const randomIndexes:number[] = [1,3,6];
 for(const i of randomIndexes){
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
 }

//select checkbox based on label*/
const weekname:string = 'Friday';
for (let i = 0; i < days.length; i++) {
    if (days[i].toLowerCase() === weekname.toLowerCase()) {
        await checkboxes[i].check(); 
        await expect(checkboxes[i]).toBeChecked();
    }
}
});
