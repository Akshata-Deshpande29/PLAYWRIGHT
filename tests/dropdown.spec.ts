import { test, expect, Locator } from '@playwright/test';
//single select dropdown
test('drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   //slect option from drpdwn
   //await page.locator('#country').selectOption('India');// by passing visible text
   //await page.locator('#country').selectOption({value:'uk'});// by passing value of attribute
    //await page.locator('#country').selectOption({label:'Canada'});// by passing label of option
    await page.locator('#country').selectOption({index:4});// by passing index of option
   //await page.waitForTimeout(3000);
   //check no.of options in dropdown
const drop:Locator = page.locator('#country>option');// by passing index of option
await expect(drop).toHaveCount(10);
//chek an option is present in drpdwn
const optionText:string [] = (await drop.allTextContents()).map(text=>text.trim());//as we are getting output with unnecessary spaces so we are using trim to remove those spaces
console.log(optionText);
expect(optionText).toContain('Japan');// check if array contains japan
//print options drom dropdown
for(const word of optionText)
    {
    console.log(word);
    }
    //multi select dropdown 
})
test("multipledrop", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#colors").selectOption(['Red','Blue','Green']);//using visible text
    await page.locator("#colors").selectOption(['red','blue','white']);//using value of attribute
    //same with index and label as single select dropdown
    await page.waitForTimeout(5000);
    //count of options in multi select dropdown
    const options:Locator = page.locator('#colors>option');
    await expect(options).toHaveCount(7);
    //check an option is present in multi select dropdown
    const optionText:string [] = (await options.allTextContents()).map(text=>text.trim());
})