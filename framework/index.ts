import { USERS } from './users';
import { signInPage } from './pages';
import { LoginPage } from './pages';
import { ForgotPasswordPage } from './pages';
import { UserMenuBox } from './pages';

const pageProvider = (page:any) => {
    return {
        LoginPage,
        ForgotPasswordPage,
        UserMenuBox,
        signInPage
    }
}

const users = {
    USERS
}

export {    
    USERS,
    signInPage,
    LoginPage,
    ForgotPasswordPage,
    UserMenuBox
}