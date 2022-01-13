import { Locator, Page } from '@playwright/test';


class ExistingModelPage {
    test: any;
    page: Page;
    expect: any;
    searchModels: Locator;
    firstMoedlField: Locator;
    modelField: Locator;
    radioButton: Locator;
    radioButton0: Locator;
    radioButton1: Locator;
    radioButton2: Locator;
    nextButton: Locator;
    cancelButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchModels = page.locator('#existing-model-search');
        this.firstMoedlField = page.locator('mat-radio-button >> nth=0');
        this.modelField = page.locator('tr.mat-row.ng-star-inserted >> nth=0');
        this.radioButton = page.locator('mat-radio-button >> nth=4');
        this.radioButton0 = page.locator('mat-radio-button >> nth=3');
        this.radioButton1 = page.locator('mat-radio-button >> nth=6');
        this.radioButton2 = page.locator('mat-radio-button >> nth=8');
        this.nextButton = page.locator('#existing-model-next');
        this.cancelButton = page.locator('#existing-model-cancel');
    }

    async searchModelsUse() {
        await this.searchModels.click();
        await this.searchModels.type('test100test100DoNotRemove');
    }

    async firstMoedlFieldChoose() {
        await this.firstMoedlField.click();
    }

    async modelFieldUse() {
        await this.searchModels.click();
    }

    async radioButtonChoose() {
        await this.radioButton.click();
    }

    async radioButtonChooseZero() {
        await this.radioButton0.click();
    }

    async radioButtonChooseOne() {
        await this.radioButton1.click();
    }

    async radioButtonChooseTwo() {
        await this.radioButton2.click();
    }

    async nextButtonClick() {
        await this.nextButton.click();
    }

    async cancelButtonClick() {
        await this.cancelButton.click();
    }
}

export {
    ExistingModelPage
}