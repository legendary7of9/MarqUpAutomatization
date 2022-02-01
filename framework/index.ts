import { Users } from './users';
import { SideBar, UserBar } from './pages';
import { SignInPage } from './pages';
import { UserMenuBox } from './pages';
import { ModelPage } from './pages';
import { NewEditCopyModelPage } from './pages';
import { ViewingModelPage } from './pages';
import { NewEditTermPage } from './pages';
import { ExistingModelPage } from './pages';
import { DealsPage } from './pages';
import { NewEditDealPage } from './pages';
import { DealAnalysisPage } from './pages';

const pageProvider = (page:any) => {
    return {
        SideBar,
        UserBar,
        UserMenuBox,
        SignInPage,
        ModelPage,
        NewEditCopyModelPage,
        ViewingModelPage,
        NewEditTermPage,
        ExistingModelPage,
        DealsPage,
        NewEditDealPage,
        DealAnalysisPage
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
    NewEditCopyModelPage,
    ViewingModelPage,
    NewEditTermPage,
    ExistingModelPage,
    DealsPage,
    NewEditDealPage,
    DealAnalysisPage
}