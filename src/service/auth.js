import axios from 'axios';


export class api {
  static auth(data){
    return axios.post('http://localhost:7000/auth/register', data,{headers: {'Content-Type': 'application/json'}})
  }
}

