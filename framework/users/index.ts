import { Page } from '@playwright/test';


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

    async AA3() {
        await this.page.fill('[formcontrolname="email"]', 'accountadmin4@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AA3AU() {
        await this.page.fill('[formcontrolname="email"]', 'accountuser4@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AA4() {
        await this.page.fill('[formcontrolname="email"]', 'accountadminban@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AA4Second() {
        await this.page.fill('[formcontrolname="email"]', 'accountadmin2ban@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AU4() {
        await this.page.fill('[formcontrolname="email"]', 'accountuserban@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AAClear() {
        await this.page.fill('[formcontrolname="email"]', 'autotestaccountclear@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

    async AUClear() {
        await this.page.fill('[formcontrolname="email"]', 'autotestaccountuserclear@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Qwerty123@')
    }

      //also used for embeded links functional
    async AANoPaytracts() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+8134@mobindustry.net')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AUNoPaytracts() {
        await this.page.fill('[formcontrolname="email"]', 'iryna.nema+3658@mobindustry.net')
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

    async AAForSignaturesOutbound() {
        await this.page.fill('[formcontrolname="email"]', 'aaforsignaturesoutbound@maildrop.cc') //AAForSignaturesOutbound company
        await this.page.fill('[formcontrolname="password"]', '123qwe')
    }

    async AAForSignaturesInbound() {
        await this.page.fill('[formcontrolname="email"]', 'aaforsignaturesinbound@maildrop.cc') //AAForSignaturesInbound company
        await this.page.fill('[formcontrolname="password"]', '123qwe')
    }

    async AAForEnduser() {
        await this.page.fill('[formcontrolname="email"]', 'aaforenduser@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AA2ForEnduser() {
        await this.page.fill('[formcontrolname="email"]', 'aa2forenduser@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }

    async AUForEnduser() {
        await this.page.fill('[formcontrolname="email"]', 'auforenduser@maildrop.cc')
        await this.page.fill('[formcontrolname="password"]', 'Zaq123456!')
    }
}

export {
    Users
}