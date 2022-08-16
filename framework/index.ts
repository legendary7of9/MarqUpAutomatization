import { Users } from './users';
import { Search } from './search';
import { SideBar, UserBar } from './pages';
import { SignInPage } from './pages';
import { ForgotPasswordPage } from './pages';
import { UserMenuBox } from './pages';
import { Pagination } from './pagination';
import { ManageDisplay } from './manageDisplay';
import { DashboardPage } from './pages';
import { ModelPage } from './pages';
import { NewEditCopyModelPage } from './pages';
import { ViewingModelPage } from './pages';
import { DealsRelatedToModelPage } from './pages';
import { NewEditTermPage } from './pages';
import { ExistingModelPage } from './pages';
import { DealsPage } from './pages';
import { NewEditDealPage } from './pages';
import { DealAnalysisPage } from './pages';
import { TemplatesPage } from './pages';
import { NewEditCopyTemplatePage } from './pages';
import { ViewTemplatePage } from './pages';
import { ContractsPage } from './pages';
import { NewEditContractPage } from './pages';

const pageProvider = (page:any) => {
    return {
        Search,
        SideBar,
        UserBar,
        UserMenuBox,
        SignInPage,
        ForgotPasswordPage,
        Pagination,
        ManageDisplay,
        DashboardPage,
        ModelPage,
        NewEditCopyModelPage,
        ViewingModelPage,
        DealsRelatedToModelPage,
        NewEditTermPage,
        ExistingModelPage,
        DealsPage,
        NewEditDealPage,
        DealAnalysisPage,
        TemplatesPage,
        NewEditCopyTemplatePage,
        ViewTemplatePage,
        ContractsPage,
        NewEditContractPage
    }
}

const users = {
    Users
}


export {    
    Users,
    Search,
    SideBar,
    UserBar,
    SignInPage,
    ForgotPasswordPage,
    UserMenuBox,
    Pagination,
    ManageDisplay,
    DashboardPage,
    ModelPage,
    NewEditCopyModelPage,
    ViewingModelPage,
    DealsRelatedToModelPage,
    NewEditTermPage,
    ExistingModelPage,
    DealsPage,
    NewEditDealPage,
    DealAnalysisPage,
    TemplatesPage,
    NewEditCopyTemplatePage,
    ViewTemplatePage,
    ContractsPage,
    NewEditContractPage
}