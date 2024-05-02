import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://foodi-2.onrender.com/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
