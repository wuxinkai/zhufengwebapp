module.exports = {
    get(key){
        return localStorage.getItem(key);
    },
    set(key,value){
        localStorage.setItem(key,value)
    }
}