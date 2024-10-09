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

    delete() {
        let $items = ['expireAt', 'token']
        $items.forEach(element => {
            localStorage.removeItem(element);
        });

        return;
    }

    checkTokenExpiration() {
        var date = new Date(this.get('expireAt'));
        var now = new Date();

        now.setDate(now.getDate() + 2);
        console.log(date.toLocaleString('fr-Fr'));
        console.log(now.toLocaleString('fr-Fr'));
    }

}

export default Storage;