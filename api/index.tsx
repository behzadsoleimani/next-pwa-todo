import axios from 'axios';
import { config } from '../config';
import { IListItems } from '../types';


const updateList = async (data: IListItems) => {
    let response = null;
    try {

        await axios(config.apiUrl, {
            method: "put",
            data
        })
    } catch (error) {
        return ""
    }
    return response;
}

const getAllList = async () => {

    let response = null;
    try {

        response = await axios(config.apiUrl, {
            method: "get"
        })
        return response && response.data;


    } catch (error) {
        console.log('errrr')
        return ""
    }
}


export {
    getAllList,
    updateList,
    // modifyData,
    // deleteData
}
