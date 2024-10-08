class Storage {

    add(key, value) {
        return localStorage.setItem(key, value);
    }

    get(key) {
        return localStorage.getItem(key);
    }

    update(key, value) {
        return localStorage.setItem(key, value);
    }

    delete(key) {
        console.log('delete token');
        return localStorage.removeItem(key);
    }

    checkTokenExpiration() {
        var date = new Date(this.get('expireAt'));
        var now = new Date();

        now.setDate(now.getDate() + 2);
        console.log(date.toLocaleString('fr-Fr'));
        console.log(now.toLocaleString('fr-Fr'));
    }

    removeAllToken() {
        let $items = ['expireAt', 'token']
        $items.forEach(element => {
            localStorage.removeItem(element);
        });

        return;
    }
}

export default Storage;