import store from '../../store/store.js';
import {setAccountData} from "../../store/features/user/userSlice.js";
const {Base} = require('./base');

class Account extends Base {
    async getAccount(params) {
        const {data} = await this.http({
            domain: 'accounts',
            event: 'getUsers',
            params,
        });
        return data;
    }

    async signIn(params) {
        try {
            const account = await this.getAccount({
                limit: 1,
                ...params,
            });
            account && account.length && store.dispatch(setAccountData(account[0]));
        } catch (err) {
            console.info(`SYSTEM [ERROR]:`, err);
        }
    }
}

module.exports = {Account};
