import {test,expect, Locator} from "@playwright/test";
test("xpath axes", async({page})=>{
await page.goto("https://www.w3schools.com/html/html_tables.asp");
await page.waitForTimeout(2000);
//self axis- td element that contains germany
const germanycell:Locator =page.locator("//td[text()='Germany']/self::td")
await expect(germanycell).toHaveText("Germany");
//parent axis-
const parent:Locator =page.locator("//td[text()='Germany']/parent::tr");
//await expect(parentoggermany).toContainText("Maria Anders")
await expect(parent).toContainText("Alfreds Futterkiste Maria Anders Germany");
console.log(await parent.textContent());
//child axis
const child:Locator =page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(child).toHaveCount(3);
//ancestor axis
const ancestor:Locator =page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestor).toHaveAttribute('class' ,'ws-table-all');
//descendant axis
const all:Locator =page.locator("//table[@id='customers']/descendant::td");
await expect(all).toHaveCount(18);
//console.log(await all.allTextContents());
//following axis
const follow:Locator =page.locator("//td[normalize-space()='Germany']/following::td[1]")//capture td that comes after germany
await expect(follow).toHaveText("Centro comercial Moctezuma");
console.log(await follow.allTextContents());
//following-sibling axis-The following-sibling axis in XPath is used to select all sibling nodes that appear after the current node.
const followSib: Locator =page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td")
console.log(await followSib.textContent());// here this is second last element  have following sibling 1
const precedingSib: Locator =page.locator("//td[normalize-space()='Maria Anders']/preceding::td")
await expect(precedingSib).toHaveText("Alfreds Futterkiste");
})