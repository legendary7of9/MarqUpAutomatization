import { Locator, Page } from '@playwright/test';


class ModelPage {
    test: any;
    page: Page;
    expect: any;
    addModel: Locator;
    addModelModalWindow: Locator;
    modalWindowChooseAModelButton: Locator;
    modalWindowNewModalButton: Locator;
    modalWindowCancelButton: Locator;
    modelFilter: Locator;
    modelTypeFilter: Locator;
    templatesFilter: Locator;
    clientFilter: Locator;
    descriptionFilter: Locator;
    statusFilter: Locator;
    dealsFilter: Locator;
    createFilter: Locator;
    editedFilter: Locator;
    threeDotsMenuButton: Locator;
    threeDotsMenuButton2: Locator;
    threeDotsMenuEditButton: Locator;
    threeDotsMenuActivateButton: Locator;
    threeDotsMenuArchivateButton: Locator;
    threeDotsMenuSaveAsNewButton: Locator;
    threeDotsMenuDeleteButton: Locator;
    threeDotsMenuDeletePopupCancelButton: Locator;
    threeDotsMenuDeletePopupDeleteButton: Locator;
    listFirstItem: Locator;
    linkFirstItem: Locator;



    constructor(page: Page) {
        this.page = page;
        this.addModel = page.locator('#models-list-add-model');
        this.addModelModalWindow = page.locator('#mat-dialog-0');
        this.modalWindowChooseAModelButton = page.locator('#choose-a-model');
        this.modalWindowNewModalButton = page.locator('#new-model');
        this.modalWindowCancelButton = page.locator('#cancel');
        this.modelFilter = page.locator('#model-name-column-sort');
        this.modelTypeFilter = page.locator('#model-type-column-sort');
        this.templatesFilter = page.locator('#deals-column-sort >> nth=0');
        this.clientFilter = page.locator('#client-column-sort');
        this.descriptionFilter = page.locator('#description-column-sort');
        this.statusFilter = page.locator('#status-column-sort');
        this.dealsFilter = page.locator('#deals-column-sort >> nth=1');
        this.createFilter = page.locator('#created-column-sort');
        this.editedFilter = page.locator('#edited-column-sort');
        this.threeDotsMenuButton = page.locator('.mat-icon-button >> nth=0');
        this.threeDotsMenuButton2 = page.locator('.mat-icon-button >> nth=1');
        this.threeDotsMenuEditButton = page.locator('.context-menu-edit');
        this.threeDotsMenuActivateButton = page.locator('.context-menu-archive.action-active');
        this.threeDotsMenuArchivateButton = page.locator('.context-menu-archive.action-archive');
        this.threeDotsMenuSaveAsNewButton = page.locator('.context-menu-save-as-new');
        this.threeDotsMenuDeleteButton = page.locator('.context-menu-delete');
        this.threeDotsMenuDeletePopupCancelButton = page.locator('.mat-button >> text=Cancel'); //to be refactored
        this.threeDotsMenuDeletePopupDeleteButton = page.locator('.mat-button >> text=Delete'); //to be refactored

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
        await this.page.waitForTimeout(1500);
    }

    async addModalNewModalButtonClick() {
        await this.modalWindowNewModalButton.click();
    }

    async addModalCancelButtonClick() {
        await this.modalWindowCancelButton.click();
    }

    async modelFilterClick() {
        await this.modelFilter.click();
    }

    async modelTypeFilterClick() {
        await this.modelTypeFilter.click();
    }

    async templatesFilterClick() {
        await this.templatesFilter.click();
    }

    async clientFilterClick() {
        await this.clientFilter.click();
    }

    async descriptionFilterClick() {
        await this.descriptionFilter.click();
    }

    async statusFilterClick() {
        await this.statusFilter.click();
    }

    async dealsFilterClick() {
        await this.dealsFilter.click();
    }

    async createFilterClick() {
        await this.createFilter.click();
    }

    async editedFilterClick() {
        await this.editedFilter.click();
    }

    async threeDotsMenuButtonClick() {
        await this.threeDotsMenuButton.click();
    }

    async threeDotsMenuButtonClick2() {
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
        await this.page.waitForTimeout(1000);
    }

    async threeDotsMenuDeleteButtonClick() {
        await this.threeDotsMenuDeleteButton.click();
    }

    async threeDotsMenuDeletePopupCancelButtonClick() {
        await this.threeDotsMenuDeletePopupCancelButton.click();
    }

    async threeDotsMenuDeletePopupDeleteButtonClick() {
        await this.threeDotsMenuDeletePopupDeleteButton.click();
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