import { expect, Locator, Page } from '@playwright/test';


class modelPage {
    test: any;
    page: Page;
    expect: any;
    addModel: Locator;
    addModelModalWindow: Locator;
    modalWindowChooseAModelButton: Locator;
    modalWindowNewModalButton: Locator;
    modalWindowCancelButton: Locator;





    constructor(page: Page) {
        this.page = page;
        this.addModel = page.locator('#models-list-add-model');
        this.addModelModalWindow = page.locator('#mat-dialog-0');
        this.modalWindowChooseAModelButton = page.locator('#choose-a-model');
        this.modalWindowNewModalButton = page.locator('#new-model');
        this.modalWindowCancelButton = page.locator('#cancel');

    }

    async addModelButton() {
        await this.addModel.click();
    }

    async addModelPopup() {
        await this.addModelModalWindow.click();
    }

    async addModelChooseButton() {
        await this.modalWindowChooseAModelButton.click();
    }

    async addModalNewModalButton() {
        await this.modalWindowNewModalButton.click();
    }

    async addModalCancelButton() {
        await this.modalWindowCancelButton.click();
    }



}


export {
    modelPage
}