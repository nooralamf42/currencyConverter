import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    let [data, setData] = useState({})
    useEffect(()=>{
        const getData = async() =>{
            let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            let resData = await res.json()
            setData(resData[currency])
        }
        getData()
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;