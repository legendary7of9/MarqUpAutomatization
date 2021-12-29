import { USERS } from './users';
import { signInPage } from './pages';
import { UserMenuBox } from './pages';
import { modelPage } from './pages';
import { newModelPageAAAU } from './pages';

const pageProvider = (page:any) => {
    return {
        UserMenuBox,
        signInPage,
        modelPage,
        newModelPageAAAU

    }
}

const users = {
    USERS
}

export {    
    USERS,
    signInPage,
    UserMenuBox,
    modelPage,
    newModelPageAAAU
}