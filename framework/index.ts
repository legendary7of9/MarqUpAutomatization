import { USERS } from './users';
import { signInPage } from './pages';
import { UserMenuBox } from './pages';
import { modelPage } from './pages';
import { newModelPageSA } from './pages';
import { newModelPageAAAU } from './pages';

const pageProvider = (page:any) => {
    return {
        UserMenuBox,
        signInPage,
        modelPage,
        newModelPageSA,
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
    newModelPageSA,
    newModelPageAAAU
}