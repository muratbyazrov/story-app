import store from '../../store/store.js';
import {formSwitcher, modifyAccount, setAccountData} from "../../store/features/account/accountSlice.js";
const {Base} = require('../base');
import {accountConfig} from "../config.js";

class Account extends Base {
    constructor() {
        super(accountConfig);
    }

    async getAccount(params) {
        const {data} = await this.httpAdapter({
            domain: 'accounts',
            event: 'getAccounts',
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

    async modifyAccount (params) {
        return this.httpAdapter({
            domain: "accounts",
            event: "modifyAccount",
            params: {...params, accountId: store.getState().account.accountData.accountId}
        });
    }
}

module.exports = {Account};
