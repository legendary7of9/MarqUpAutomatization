import { Users } from './users';
import { SideBar } from './pages';
import { SignInPage } from './pages';
import { UserMenuBox } from './pages';
import { ModelPage } from './pages';
import { NewModelPage } from './pages';
import { NewTermPage } from './pages';

const pageProvider = (page:any) => {
    return {
        SideBar,
        UserMenuBox,
        SignInPage,
        ModelPage,
        NewModelPage,
        NewTermPage

    }
}

const users = {
    Users
}


export {    
    Users,
    SideBar,
    SignInPage,
    UserMenuBox,
    ModelPage,
    NewModelPage,
    NewTermPage
}