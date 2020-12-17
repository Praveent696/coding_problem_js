let user = {
    name : 'parveen',
    address : {
        area : {
            name : 'maujpur',
            state: {
                name : 'delhi',
                country: {
                    name: 'india',
                    region:{
                        name : 'APAC'
                    }
                }
            }
        }
    },
    address2 : {
        area2 : {
            name : 'maujpur',
            state: {
                name : 'delhi',
                country: {
                    name: 'india',
                    region:{
                        name : 'APAC'
                    }
                }
            }
        }
    }
}

let resultObject = {};
let flattenObject = (obj,parent) => {
   for(let key in obj)
   {
      let path = `${parent}_${key}`;

      if(typeof obj[key] === 'object'){
          flattenObject(obj[key],path);
      }
      else{
          resultObject[path] = obj[key];
      }
   }
}

flattenObject(user,'user');

console.log(resultObject);

/**
 ******************Output**************
    {
        "user_name":"parveen",
        "user_address_area_name":"maujpur",
        "user_address_area_state_name":"delhi",
        "user_address_area_state_country_name":"india",
        "user_address_area_state_country_region_name":"APAC",
        "user_address2_area2_name":"maujpur",
        "user_address2_area2_state_name":"delhi",
        "user_address2_area2_state_country_name":"india",
        "user_address2_area2_state_country_region_name":"APAC"
    }
 */