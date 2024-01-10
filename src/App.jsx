import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import {InputBox} from './components'

function App() {
    const [fromCurrency, setFromCurrency] = useState('inr')
    const [toCurrency, setToCurrency] = useState('usd')
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyData = useCurrencyInfo(fromCurrency)
    const options = Object.keys(currencyData)

    const swapHandler = () =>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }

    const convertHandler = () =>{
        setConvertedAmount(amount * currencyData[toCurrency])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[url('./bg.jpg')] "
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertHandler()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currencyOptions={options}
                                currency={fromCurrency}
                                onCurrencyChange={(currency)=>setFromCurrency(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                seletedCurrency="usd"
                                amount={amount}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapHandler}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currency={toCurrency}
                                onCurrencyChange={(currency)=>setToCurrency(currency)}
                                amount={convertedAmount}
                                onAmountChange={(convertedAmount)=>setConvertedAmount(convertedAmount)}
                                seletedCurrency="inr"
                                currencyOptions={options}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            {/* {`Convert ${amount} ${fromCurrency} into ${toCurrency}`}  */}
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )}

    export default App;