import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from "uuid";
const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);

    const flipCard = () => {
        setIsFacingUp(isFacingUp => !isFacingUp);
    };

    return [isFacingUp, flipCard];
};

const useAxios = (baseUrl, initialData = []) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(prevData => [...prevData, response.data]);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const addData = (url) => {
        fetchData(url);
    };

    return { data, loading, error, addData };
};

export { useFlip, useAxios };