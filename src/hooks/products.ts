import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts() {
    

  const [products, setProducts] = useState<IProduct[]>([])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')



//Asynch fetch /Get data 
 async function fetchProducts() {
  try {
    setError('')
    setLoading(true)
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
    setProducts(response.data)
    setLoading(false)
  } catch (e: unknown) {
    const error = e as AxiosError
    setLoading(false)
    setError(error.message)
  }
  
 }


  useEffect(()=>{
    fetchProducts();
  }, [])

  return {products, error, loading}

}