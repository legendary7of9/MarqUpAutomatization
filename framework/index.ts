import { Users } from './users';
import { SideBar, UserBar } from './pages';
import { SignInPage } from './pages';
import { UserMenuBox } from './pages';
import { ModelPage } from './pages';
import { NewEditModelPage } from './pages';
import { ViewingModelPage } from './pages';
import { NewEditTermPage } from './pages';

const pageProvider = (page:any) => {
    return {
        SideBar,
        UserBar,
        UserMenuBox,
        SignInPage,
        ModelPage,
        NewEditModelPage,
        ViewingModelPage,
        NewEditTermPage

    }
}

const users = {
    Users
}


export {    
    Users,
    SideBar,
    UserBar,
    SignInPage,
    UserMenuBox,
    ModelPage,
    NewEditModelPage,
    ViewingModelPage,
    NewEditTermPage
}