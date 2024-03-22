//HelloMessageService.js
import axios from 'axios'

class HelloMessageService {
    executeHelloMessageService(name){
        let username = "user"
        let password = "123"
        let basicAuthHeader = 'Basic ' + window.btoa(username +":"+ password)
        return axios.get(`http://localhost:8080/hello-message/path-variable/${name}`, {
            headers: {Authorization: basicAuthHeader}
        });
    }
}

export default new HelloMessageService()