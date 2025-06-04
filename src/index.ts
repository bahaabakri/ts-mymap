import { Company } from './Company';
import { CustomMap } from './CustomMap';
import {User} from './User';
const mapDiv = document.getElementById('map');
const user = new User();
const company = new Company()
const myMap = new CustomMap(mapDiv as HTMLElement); 
myMap.addMarker(user);
myMap.addMarker(company);
console.log(user);
console.log(company);
console.log(myMap);
