const {Base} = require('./base');
const store = require('../../store/store');
const {setAccountData} = require('../../store/features/user/userSlice.js');

class Account extends Base {
    constructor() {
        super();
        this._setAccountData();
    }

    async getAccount(params) {
        const {data} = await this.http({
            domain: 'accounts',
            event: 'getUsers',
            params,
        });
        return data;
    }

    async _setAccountData() {
        const account = await this.getAccount({
            limit: 1,
            login: 'murat',
            password: 'byazrov',
        });
        store.dispatch(setAccountData(account));
    }
}

module.exports = {Account};
