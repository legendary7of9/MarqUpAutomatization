import { Locator, Page } from '@playwright/test';


class Pagination {
    test: any;
    page: Page;
    paginationFirstPage: Locator;
    paginationPrevPage: Locator;
    paginationPage1: Locator;
    paginationPage2: Locator;
    paginationPage3: Locator;
    paginationNextPage: Locator;
    paginationLastPage: Locator;

    constructor(page: Page) {
        this.paginationFirstPage = page.locator('.pagination-item.first-page');
        this.paginationPrevPage = page.locator('.pagination-item.prev-page');
        this.paginationPage1 = page.locator('.pagination-item >> text=1');
        this.paginationPage2 = page.locator('.pagination-item >> text=2');
        this.paginationPage3 = page.locator('.pagination-item >> text=3');
        this.paginationNextPage = page.locator('.pagination-item.next-page');
        this.paginationLastPage = page.locator('.pagination-item.last-page');


    }

    async paginationFirstPageClick() {
        await this.paginationFirstPage.click();
    }

    async paginationPrevPageClick() {
        await this.paginationPrevPage.click();
    }

    async paginationPage1Click() {
        await this.paginationPage1.click();
    }

    async paginationPage2Click() {
        await this.paginationPage2.click();
    }

    async paginationPage3Click() {
        await this.paginationPage3.click();
    }

    async paginationNextPageClick() {
        await this.paginationNextPage.click();
    }

    async paginationLastPageClick() {
        await this.paginationLastPage.click();
    }
}


export {
    Pagination
}