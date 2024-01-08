import { useState } from "react"
import { useEffect } from "react"


function useGetData (currency){
    const [data, setData] = useState({})
    const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(()=>{
        async function fetchData(){
            try {
                let res = await fetch(apiUrl)
                let resData = await res.json()
                setData(resData[currency])
            } catch (error) {
                console.log("data needs to load!")
            }
        }
        fetchData()
    }, [currency])
    return data;
}

export default useGetData;