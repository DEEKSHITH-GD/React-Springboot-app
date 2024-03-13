//HelloMessageService.js
import axios from 'axios'

class HelloMessageService {
    executeHelloMessageService(name){
        return axios.get(`http://localhost:8080/hello-message/path-variable/${name}`);
    }
}

export default new HelloMessageService()