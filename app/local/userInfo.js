import local from './index';
const CITY = 'CITY';
export default  {
    getCity(){
        return local.get(CITY)?local.get(CITY):'北京';
    },
    setCity(city){
        local.set(CITY,city)
    }
}