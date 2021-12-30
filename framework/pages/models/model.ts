import { expect, Locator, Page } from '@playwright/test';


class ModelPage {
    test: any;
    page: Page;
    expect: any;
    addModel: Locator;
    addModelModalWindow: Locator;
    modalWindowChooseAModelButton: Locator;
    modalWindowNewModalButton: Locator;
    modalWindowCancelButton: Locator;

    createFilter: Locator;





    constructor(page: Page) {
        this.page = page;
        this.addModel = page.locator('#models-list-add-model');
        this.addModelModalWindow = page.locator('#mat-dialog-0');
        this.modalWindowChooseAModelButton = page.locator('#choose-a-model');
        this.modalWindowNewModalButton = page.locator('#new-model');
        this.modalWindowCancelButton = page.locator('#cancel');

        this.createFilter = page.locator('#created-column-sort');

    }

    async addModelButtonClick() {
        await this.addModel.click();
    }

    async addModelPopupClick() {
        await this.addModelModalWindow.click();
    }

    async addModelChooseButtonClick() {
        await this.modalWindowChooseAModelButton.click();
    }

    async addModalNewModalButtonClick() {
        await this.modalWindowNewModalButton.click();
    }

    async addModalCancelButtonClick() {
        await this.modalWindowCancelButton.click();
    }

    async createFilterClick() {
        await this.createFilter.click();
    }



}


export {
    ModelPage
}