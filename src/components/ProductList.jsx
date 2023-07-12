import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { GridView, ListView } from '../components'

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  //  useEffect(() => {
  //    setTimeout(() => {
  //      if (products.length < 1) {
  //        return (
  //          <h5 style={{ textTransform: 'none' }}>
  //            Opps! no records found for the search criteria entered
  //          </h5>
  //        )
  //      }
  //    }, 1000)
  //  }, [products])

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Opps! no records found for the search criteria entered
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={products} />
  }

  return <GridView products={products}>Product List</GridView>
}

export default ProductList
