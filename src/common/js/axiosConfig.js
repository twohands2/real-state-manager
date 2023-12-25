import axios from 'axios';

const get = (url, params, callback) => {
    return axios
    .get(url + '?' + params)
    .then(function (response) {
        // handle success
        console.log(response);
        if(callback) callback(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

const post = (url, header, callback) => {
    return axios
        .post(url, header)
        .then(function (response) {
            console.log(response);
            if(callback) callback(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
