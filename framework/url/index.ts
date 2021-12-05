class URL {
    page: any

    constructor(page: any) {
        this.page =page
    }
  
    async goToUrl() {
        //Should be refactored
        await this.page.goto('https://marqup.test.noredlines.com/sign-in');

    }
}

export {
    URL
}