import { Page, Locator } from '@playwright/test';


export async function click(page: Page, selector: Locator): Promise<void> {
  await selector.click();
}

export async function wait(page: Page, selectorOrCondition: string | (() => boolean)): Promise<void> {
  if (typeof selectorOrCondition === 'string') {
    await page.waitForSelector(selectorOrCondition);
  } else {
    await page.waitForFunction(selectorOrCondition);
  }
}

export async function getText(page: Page, selector: string): Promise<string> {
  const element = await page.waitForSelector(selector);
  return element.innerText();
}

export async function clickAndFill(page: Page, selector: Locator, text: string): Promise<void> {
    await selector.click();
    await selector.fill(text)
}


export async function clickOptionInSelect(page: Page, selectSelector: string, optionText: string): Promise<void> {
  const selectElement = await page.waitForSelector(selectSelector);
  await selectElement.selectOption(optionText);
}
