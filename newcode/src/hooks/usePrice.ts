import { useEffect, useRef, useState } from 'react'

interface Price {
    updating: boolean
    error: string
    data: string | null
    started: boolean
}

interface PriceInitParams {
    from: string
    to: string
    updateDuration: number
}

function usePrice({
    from,
    to = 'USDT',
    updateDuration = 60 * 1e3,
}: PriceInitParams) {
    const [price, setPrice] = useState<Price>({
        updating: false,
        error: '',
        data: null,
        started: false,
    })

    const interval = useRef<Timer>()

    useEffect(() => {
        const updatePrice = () => {
            if (!from || !to || price.updating) return

            const xhr = new XMLHttpRequest()
            xhr.withCredentials = true

            setPrice((prevData) => {
                return {
                    ...prevData,
                    updating: true,
                }
            })

            xhr.addEventListener('readystatechange', function () {
                if (this.readyState === 4) {
                    if (this.status !== 200) {
                        setPrice((prevData) => {
                            return {
                                ...prevData,
                                updating: false,
                                error: `Error ${this.status}: ${this.responseText}`,
                            }
                        })
                        return
                    }

                    const response = JSON.parse(this.responseText)

                    setPrice((prevData): Price => {
                        return {
                            ...prevData,
                            error: '',
                            updating: false,
                            data: Object.entries(response)[0][1] as string,
                        }
                    })
                }
            })

            xhr.open(
                'GET',
                `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
            )

            xhr.send()
        }

        if (!price.started) {
            setPrice((prevData) => {
                return {
                    ...prevData,
                    started: true,
                }
            })

            updatePrice()

            interval.current = setInterval(() => {
                updatePrice()
            }, updateDuration)
        }
    }, [from, to, price.started])

    useEffect(() => {
        return () => clearInterval(interval.current as Timer)
    }, [])

    return price
}

export default usePrice
