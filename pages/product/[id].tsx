import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter();

  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window.fetch('/api/avo/' + query.id )
    .then(response => response.json())
    .then( data => console.log(data) )
  }, []);

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
    </section>
  )
}

export default ProductPage
