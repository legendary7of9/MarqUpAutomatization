import { Locator, Page } from '@playwright/test';


class NewEditCopyTemplatePage {
    test: any;
    page: Page;
    expect: any;
    templateTitleField: Locator;
    categoryNameDropDown: Locator;
    categoryNameDropDownDefaultValue: Locator;
    categoryNameField: Locator;
    modelDropDown: Locator;
    textEditorField: Locator;
    createContractButton: Locator;
    saveButton: Locator;
    publishToggle: Locator;
    draftToggle: Locator;
    permissionVisibilityDropDown: Locator;
    permissionVisibilityEvryoneValue: Locator;
    permissionVisibilityOnlyAAValue: Locator;
    permissionVisibilityOnlyMeValue: Locator;
    permissionContractPublicationDropDown: Locator;
    permissionContractPublicationNotRequiredValue: Locator;
    permissionContractPublicationRequiredValue: Locator;
    variablePanelSearch: Locator;


    editVariablePanel: Locator;
    editVariablePanelSearch: Locator;
    newVariableBtton: Locator;
    variablePanelVariableNameField: Locator;

    inputRadioButton: Locator;
    listRadioButton: Locator;
    signerRadioButton: Locator;

    inputTextVariable: Locator;
    inputDateVariable: Locator;
    inputNumberVariable: Locator;
    inputUrlVariable: Locator;
    inputCheckboxVariable: Locator;
    inputTextareaVariable: Locator;

    listTextVariable: Locator;
    listDateVariable: Locator;
    listNumberVariable: Locator;
    listUrlVariable: Locator;
    listTriggeredTextVariable: Locator;
    listMultipleChoiceVariable: Locator;

    signerInputTextVariable: Locator;
    signerInputDateVariable: Locator;
    signerInputNumberVariable: Locator;
    signerInputUrlVariable: Locator;

    signerListTextVariable: Locator;
    signerListDateVariable: Locator;
    signerListNumberVariable: Locator;
    signerListUrlVariable: Locator;

    textEditorFieldVariablesPanel: Locator;
    textEditorFieldNestedDropDown: Locator;

    threeDotsMenuVariablePanelInsertButton: Locator;
    threeDotsMenuVariablePanelEditButton: Locator;
    threeDotsMenuVariablePanelCopyButton: Locator;
    threeDotsMenuVariablePanelDeleteButton: Locator;


    shareAccessButton: Locator;
    shareAccessPopupSearchField: Locator;
    shareAccessPopupAddButton: Locator;
    shareAccessPopupCloseButton: Locator;
    paytractsToggle: Locator;
    paytractsInsertButton: Locator;
    multipartyToggle: Locator;
    disableSignatureCheckbox: Locator;


    constructor(page: Page) {
        this.page = page;
        this.templateTitleField = page.locator('[formcontrolname="title"]');
        this.categoryNameDropDown = page.locator('[formcontrolname="category_id"]');
        this.categoryNameDropDownDefaultValue = page.locator('.mat-option >> text=test100test');

        this.categoryNameField = page.locator('[formcontrolname="category_name"]');

        this.modelDropDown = page.locator('#form-control-model_id mat-select');
        this.textEditorField = page.locator('[role="textbox"] >> nth=0');
        this.createContractButton = page.locator('#template-detail-create-contract');
        this.saveButton = page.locator('#template-detail-save');
        this.publishToggle = page.locator('#template-detail-status-publish-button');
        this.draftToggle = page.locator('#template-detail-status-draft-button');
        this.permissionVisibilityDropDown = page.locator('#form-control-visibility_status');
        this.permissionVisibilityEvryoneValue = page.locator('.mat-option-text >> text=Everyone at the company');
        this.permissionVisibilityOnlyAAValue = page.locator('.mat-option-text >> text=Only Account Admins');
        this.permissionVisibilityOnlyMeValue = page.locator('.mat-option-text >> text=Only Me');

        this.permissionContractPublicationDropDown = page.locator('#form-control-is_securx');
        this.permissionContractPublicationNotRequiredValue = page.locator('.mat-option-text >> text=Approval not required');
        this.permissionContractPublicationRequiredValue = page.locator('.mat-option-text >> text=Approval required');

        this.variablePanelSearch = page.locator('#configurator-search-field >> nth=0');


        this.editVariablePanel = page.locator('.template-values-wrapper-opener');
        this.editVariablePanelSearch = page.locator('#configurator-search-field >> nth=0');
        this.newVariableBtton = page.locator('#variables-list-add-new-variable');
        this.variablePanelVariableNameField = page.locator('.variables-list-form-control-name textarea');

        this.inputRadioButton = page.locator('#variables-list-form-control-type-0-Input');
        this.listRadioButton = page.locator('#variables-list-form-control-type-0-List');
        this.signerRadioButton = page.locator('#variables-list-form-control-type-0-Signer');

        this.inputTextVariable = page.locator('.mat-option >> nth=0');
        this.inputDateVariable = page.locator('.mat-option >> text= date ');
        this.inputNumberVariable = page.locator('.mat-option >> text= number ');
        this.inputUrlVariable = page.locator('.mat-option >> text= url ');
        this.inputCheckboxVariable = page.locator('.mat-option >> text= checkbox ');
        this.inputTextareaVariable = page.locator('.mat-option >> text= textarea ');

        this.listTextVariable = page.locator('.mat-option >> nth=0');
        this.listDateVariable = page.locator('.mat-option >> text= date ');
        this.listNumberVariable = page.locator('.mat-option >> text= number ');
        this.listUrlVariable = page.locator('.mat-option >> text= url ');
        this.listTriggeredTextVariable = page.locator('.mat-option >> text= triggered text ');
        this.listMultipleChoiceVariable = page.locator('.mat-option >> text= multiple choice ');

        this.signerInputTextVariable = page.locator('.mat-option >> nth=0');
        this.signerInputDateVariable = page.locator('.mat-option >> nth=1');
        this.signerInputNumberVariable = page.locator('.mat-option >> nth=2');
        this.signerInputUrlVariable = page.locator('.mat-option >> nth=3');
        this.signerListTextVariable = page.locator('.mat-option >> nth=4');
        this.signerListDateVariable = page.locator('.mat-option >> nth=5');
        this.signerListNumberVariable = page.locator('.mat-option >> nth=6');
        this.signerListUrlVariable = page.locator('.mat-option >> nth=7');

        this.textEditorFieldVariablesPanel = page.locator('[aria-label="Rich Text Editor, editor2"]');
        this.textEditorFieldNestedDropDown = page.locator('.nested-variable-editor-toolbar');

        this.threeDotsMenuVariablePanelInsertButton = page.locator('.action-add');
        this.threeDotsMenuVariablePanelEditButton = page.locator('.action-edit');
        this.threeDotsMenuVariablePanelCopyButton = page.locator('.action-copy');
        this.threeDotsMenuVariablePanelDeleteButton = page.locator('.action-delete');

        this.shareAccessButton = page.locator('#template-detail-share-access');
        this.shareAccessPopupSearchField = page.locator('#modal-share-access-search');
        this.shareAccessPopupAddButton = page.locator('#modal-share-access-add');
        this.shareAccessPopupCloseButton = page.locator('#modal-share-access-close');
        this.paytractsToggle = page.locator('#form-control-is_paytracts');
        this.paytractsInsertButton = page.locator('#template-detail-paytracts-insert-variable');
        this.multipartyToggle = page.locator('#multiple-signatures-toggle');
        this.disableSignatureCheckbox = page.locator('#template-detail-disable-signature');
    }

    async templateTitleFieldFill(text:string) {
        await this.templateTitleField.fill(text);
    }

    async templateTitleFieldType(text:string) {
        await this.templateTitleField.type(text);
    }

    async selectCategoryName() {
        await this.categoryNameDropDown.click();
        await this.page.waitForTimeout(1000);
        if (await this.categoryNameDropDownDefaultValue.isHidden()) 
        {
            this.page.waitForTimeout(1000);
            this.categoryNameDropDown.click();
        }
        await this.page.waitForSelector('.mat-select-content');
        await this.categoryNameDropDownDefaultValue.click();
    }

    async categoryNameFieldFillDefaultValue() {
        await this.categoryNameField.fill('test100test');
    }

    async modelDropDownOpen() {
        await this.modelDropDown.click();
        await this.page.waitForSelector('.mat-select-content');
    }

    async modelDropDownOpenNoModels() {
        await this.modelDropDown.click();
    }

    async modelDropDownClose() {
        await this.page.locator('.cdk-overlay-backdrop').click();
    }

    async textEditorFieldRandomFill(text:string) {
        await this.textEditorField.type(text);
    }

    async textEditorFieldClear() {
        await this.textEditorField.fill('');
    }

    async createContractButtonClick() {
        await this.createContractButton.click();
        await this.page.waitForSelector('#contract-detail-save-and-generate');
    }

    async createContractButtonForErrorsClick() {
        await this.createContractButton.click();
    }

    async saveButtonClick() {
        await this.saveButton.click();
        await this.page.waitForSelector('#template-view-edit-template');
    }

    async saveButtonForErrorsClick() {
        await this.saveButton.click();
    }

    async publishToggleClick() {
        await this.publishToggle.click();
        await this.page.waitForTimeout(500);
    }

    async draftToggleClick() {
        await this.draftToggle.click();
    }

    async permissionVisibilityEvryoneValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityEvryoneValue.click();
    }

    async permissionVisibilityOnlyAAValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityOnlyAAValue.click();
    }

    async permissionVisibilityOnlyMeValueChoose() {
        await this.permissionVisibilityDropDown.click();
        await this.permissionVisibilityOnlyMeValue.click();
    }

    async permissionContractPublicationDropDownClick() {
        await this.permissionContractPublicationDropDown.click();
    }

    async permissionContractPublicationNotRequiredValueClick() {
        await this.permissionContractPublicationDropDown.click();
        await this.permissionContractPublicationNotRequiredValue.click();
    }

    async permissionContractPublicationRequiredValueClick() {
        await this.permissionContractPublicationDropDown.click();
        await this.permissionContractPublicationRequiredValue.click();
    }



    async editVariablePanelOpen() {
        await this.editVariablePanel.click();
        // await (await this.page.waitForSelector('.template-values-wrapper')).isVisible();
    }

    async editVariablePanelClose() {
        await this.editVariablePanel.click();
        // await (await this.page.waitForSelector('.template-values-wrapper')).isHidden();
    }

    async newVariableBttonClick() {
        await this.newVariableBtton.click();
    }

    async inputRadioButtonClick() {
        await this.inputRadioButton.click();
    }

    async inputTextVariableClick() {
        await this.inputTextVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async inputDateVariableClick() {
        await this.inputDateVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async inputNumberVariableClick() {
        await this.inputNumberVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async inputUrlVariableClick() {
        await this.inputUrlVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async inputCheckboxVariableClick() {
        await this.inputCheckboxVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async inputTextareaVariableClick() {
        await this.inputTextareaVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listRadioButtonClick() {
        await this.listRadioButton.click();
    }

    async listTextVariableClick() {
        await this.listTextVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listDateVariableClick() {
        await this.listDateVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listNumberVariableClick() {
        await this.listNumberVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listUrlVariableClick() {
        await this.listUrlVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listTriggeredTextVariableClick() {
        await this.listTriggeredTextVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async listMultipleChoiceVariableClick() {
        await this.listMultipleChoiceVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerInputTextVariableClick() {
        await this.signerInputTextVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerInputDateVariableClick() {
        await this.signerInputDateVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerInputNumberVariableClick() {
        await this.signerInputNumberVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerInputUrlVariableClick() {
        await this.signerInputUrlVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerListTextVariableClick() {
        await this.signerListTextVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerListDateVariableClick() {
        await this.signerListDateVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerListNumberVariableClick() {
        await this.signerListNumberVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async signerListUrlVariableClick() {
        await this.signerListUrlVariable.click();
        await this.page.locator('.mat-select-content').isHidden();
    }

    async textEditorFieldNestedDropDownClick() {
        await this.textEditorFieldNestedDropDown.click();
        await this.page.locator('.mat-select-content').isHidden();
    }


    async signerRadioButtonClick() {
        await this.signerRadioButton.click();
    }

    async threeDotsMenuVariablePanelInsertButtonClick() {
        await this.threeDotsMenuVariablePanelInsertButton.click();
    }

    async threeDotsMenuVariablePanelEditButtonClick() {
        await this.threeDotsMenuVariablePanelEditButton.click();
        await this.page.waitForSelector('#variables-list-add-new-variable');
    }

    async threeDotsMenuVariablePanelCopyButtonClick() {
        await this.threeDotsMenuVariablePanelCopyButton.click();
    }

    async threeDotsMenuVariablePanelDeleteButtonClick() {
        await this.threeDotsMenuVariablePanelDeleteButton.click();
    }



    async shareAccessButtonClick() {
        await this.shareAccessButton.click();
    }

    async shareAccessPopupSearchFieldFill() {
        await this.shareAccessPopupSearchField.click();
        await this.shareAccessPopupSearchField.type('Client 1HT(test)');
        await this.page.waitForTimeout(500);
    }

    async shareAccessPopupAddButtonClick() {
        await this.shareAccessPopupAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async shareAccessPopupCloseButtonClick() {
        await this.shareAccessPopupCloseButton.click();
    }

    async paytractsToggleClick() {
        await this.paytractsToggle.click();
        await this.page.waitForTimeout(1000);
        if (await this.page.locator('#template-detail-paytracts-insert-variable').isHidden()) 
        {
            this.page.waitForTimeout(1000);
            this.paytractsToggle.click();
        }
        await this.page.waitForSelector('#template-detail-paytracts-insert-variable');
    }

    async paytractsInsertButtonClick() {
        await this.paytractsInsertButton.click();
    }

    async multipartyToggleClick() {
        await this.multipartyToggle.click();
    }

    async disableSignatureCheckboxClick() {
        await this.disableSignatureCheckbox.click();
    }
}


export {
    NewEditCopyTemplatePage
}