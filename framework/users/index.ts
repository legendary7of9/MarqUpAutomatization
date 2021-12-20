import { Page } from '@playwright/test';


class USERS {
    page: Page

    constructor(page: any) {
        this.page = page
    }
  
    async SA() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', 'sadmin1@marqup.com')
        await this.page.fill('[formcontrolname="password"]', '123qwe')
    }

    async AA() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+3333@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq1234567!')
    }

    async AU() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+485220@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }
    async inactiveUser() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', '')
        await this.page.fill('[formcontrolname="password"]', '')
    } 
    async pendingUser() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', '')
        await this.page.fill('[formcontrolname="password"]', '')
    }
    async notexistingUser() {
        //Should be refactored
        await this.page.fill('[formcontrolname="email"]', '')
        await this.page.fill('[formcontrolname="password"]', '')
    }
}

export {
    USERS
}