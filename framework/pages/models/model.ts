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


    threeDotsMenuButton: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuActivateButton: Locator;
    threeDotsMenuArchivateButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;
    listFirstItem: Locator;
    linkFirstItem: Locator;




    constructor(page: Page) {
        this.page = page;
        this.addModel = page.locator('#models-list-add-model');
        this.addModelModalWindow = page.locator('#mat-dialog-0');
        this.modalWindowChooseAModelButton = page.locator('#choose-a-model');
        this.modalWindowNewModalButton = page.locator('#new-model');
        this.modalWindowCancelButton = page.locator('#cancel');

        this.createFilter = page.locator('#created-column-sort');

        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuActivateButton = page.locator('.context-menu-archive.action-active');
        this.threeDotsMenuArchivateButton = page.locator('.context-menu-archive.action-archive');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');

        this.listFirstItem = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
        this.linkFirstItem = page.locator('a.td__link.model-name-column-link >> nth=0');


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

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
    }

    async threeDotsMenuEditButtonClick() {
        await this.threeDotsMenuEditButton.click();
    }

    async threeDotsMenuActivateButtonClick() {
        await this.threeDotsMenuActivateButton.click();
    }

    async threeDotsMenuArchiveButtonClick() {
        await this.threeDotsMenuArchivateButton.click();
    }

    async threeDotsMenuSaveAsNewButtonClick() {
        await this.threeDotsMenuSaveAsNewButton.click();
    }



    async listFirstItemFocus() {
        await this.listFirstItem.focus();
    }

    async linkFirstItemClick() {
        await this.linkFirstItem.click();
    }

}


export {
    ModelPage
}