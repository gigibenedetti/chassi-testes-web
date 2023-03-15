import { test, expect, type Page } from '@playwright/test';
import { click, wait, getText, clickAndFill, clickOptionInSelect} from '../utils/utils';
import { VehiclePage } from '../pages/vehiclePage';

test.describe('Sample App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://sampleapp.tricentis.com/101/index.php');
    });
        test('Enter Vehicle Data', async ({ page }) => {
            const vehiclePage = new VehiclePage(page);

            await click(page, vehiclePage.navAutomobileButton)
            await clickAndFill(page, vehiclePage.enginekW, '1234')
        }); 
  });