import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constant/config';
import { getAccessToken, getRefreshToken, setAccessToken, getType } from '../utils/common-utils.js';

//local diploy
//const API_URL = 'http://localhost:8000';
//production
const API_URL = process.env.NODE_ENV==='production'? 'https://rentingapp-f731e611bb2b.herokuapp.com':'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "Accept": "application/json,multipart/form-data", 
        "Content-Type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        // Stop global loader here
        return processResponse(response);
    },
    function(error) {
        //if status code is not 2xx
        console.error(error.response.body);
        // Stop global loader here
        return Promise.reject(ProcessError(error));
    }
)

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.data.msg,
            code: response?.code
        }
    }
}

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isError: true, status: string, msg: string, code: int }
//////////////////////////////
const ProcessError = async (error) => {
    if (error.response) {

        // Request made and server responded with a status code 
        // that falls out of the range of 2xx
        if (error.response?.status === 403) {
            const { url, config } = error.response;
            console.log(error);
            try {
                let response = await API.getRefreshToken({ token: getRefreshToken() });
                if (response.isSuccess) {
                    sessionStorage.clear();
                    setAccessToken(response.data.accessToken);

                    const requestData = error.toJSON();

                    let response1 = await axios({
                        method: requestData.config.method,
                        url: requestData.config.baseURL + requestData.config.url,
                        headers: { "content-type": "application/json", "authorization": getAccessToken() },
                        params: requestData.config.params
                    });
                }
            } catch (error) {
                return Promise.reject(error)
            }
        } else {
            console.log("ERROR IN RESPONSE: ", error.toJSON());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status
            }
        }
    } else if (error.request) { 
        // The request was made but no response was received
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else { 
        // Something happened in setting up the request that triggered an Error
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };