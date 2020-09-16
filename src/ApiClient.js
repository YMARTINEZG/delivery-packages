import axios from 'axios'
const apiUrl = '/api';
class ApiClient {
    static async getAllOrdens(){
     return await axios.get(apiUrl+'/v1/all').then(result =>{
         return result.data
     })
    }
}
export default ApiClient