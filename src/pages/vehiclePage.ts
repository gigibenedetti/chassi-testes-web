import { expect, Locator, Page } from '@playwright/test';

export class VehiclePage {
    readonly page: Page;
    readonly navAutomobileButton: Locator;
    readonly gettingStaterdTitle: Locator;
    readonly enginekW: Locator;
    readonly dateManufacture: Locator;
    readonly listPrice: Locator;
    readonly licensePlateNumber: Locator;
    readonly annualMileage: Locator;
    readonly make: Locator;
    readonly numberSeats: Locator;
    readonly fuelType: Locator;

    constructor(page: Page) {
        this.page = page;
        this.make = page.locator('#make');
        this.navAutomobileButton = page.getByRole('link', { name: 'Automobile', exact: true });
        this.gettingStaterdTitle = page.locator('text=Getting started');
        this.numberSeats = page.locator('#numberofseats');
        this.fuelType = page.locator('#fuel');
        this.enginekW = page.locator('#engineperformance');
        this.dateManufacture = page.locator('#dateofmanufacture');
        this.listPrice = page.locator('#listprice');
        this.licensePlateNumber = page.locator('#licenseplatenumber');
        this.annualMileage = page.locator('#annualmileage');
    }
}