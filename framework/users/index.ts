import test, { Page } from '@playwright/test';


class Users {
    page: Page

    constructor(page: any) {
        this.page = page
    }
  
    async SA() {
        await this.page.fill('[formcontrolname="email"]', 'sadmin1@marqup.com')
        await this.page.fill('[formcontrolname="password"]', '123qwe')
    }

    async AA() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+1111@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AA2() {
        await this.page.fill('[formcontrolname="email"]', 'test89.tete@i.ua')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AU() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+8423@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }
    async inactiveUser() {
        await this.page.fill('[formcontrolname="email"]', 'BanBanBanBan@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'qwerty')
    } 
    async pendingUser() {
        await this.page.fill('[formcontrolname="email"]', 'lokitor@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'qwerty')
    }
    async notexistingUser() {
        await this.page.fill('[formcontrolname="email"]', 'ososos@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'qwerty')
    }

    async AASubscriptionLimits() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+6362@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AUSubscriptionLimits() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+63628@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

}

export {
    Users
}