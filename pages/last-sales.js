'use client';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
const LastSales = () => {
    // const [sales, setSales] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    const { data, error } = useSWR('https://nextjs-course-96a22-default-rtdb.firebaseio.com/sales.json') // do not send data in right format
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch('https://nextjs-course-96a22-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then((data => {
    //         const transformedSales = [];
    //         for (const key in data) {
    //             transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume })
    //         }
    //         setSales(transformedSales)
    //         setIsLoading(false)
    //     }))
    // }, [])
    if (error) {
        return <p>No Data yet</p>
    }
    if (!data) {
        return <p>Loading....</p>
    }
    return (
        <ul>
            {sales.map((sale) => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>
    )
}

export default LastSales