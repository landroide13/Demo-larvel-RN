import axios from '../utils/axios'
import axiosErrorHandler from '../utils/axiosErrorHandler'

const fetchProgrammers = async() =>{

    try {
        let { data } = await axios.get('/programmers')
        return data.data
        
    } catch (error) {
        throw axiosErrorHandler(error)
    }
}







