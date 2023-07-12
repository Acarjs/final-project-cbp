import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price)
    maxPrice = Math.max(...maxPrice)

    let minPrice = action.payload.map((item) => item.price)
    minPrice = Math.min(...minPrice)
    // console.log(maxPrice)

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice,
        minPrice: minPrice,
      },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let productsArray = [...filtered_products]

    if (sort === 'price-lowest') {
      productsArray = productsArray.sort(
        (currentProduct, nextProduct) =>
          currentProduct.price - nextProduct.price
      )
    }

    if (sort === 'price-highest') {
      productsArray = productsArray.sort(
        (currentProduct, nextProduct) =>
          nextProduct.price - currentProduct.price
      )
    }

    if (sort === 'name-a-z') {
      //localeCompare()
      productsArray = productsArray.sort((currentProduct, nextProduct) => {
        return currentProduct.name.localeCompare(nextProduct.name)
      })
    }

    if (sort === 'name-z-a') {
      //localeCompare()
      productsArray = productsArray.sort((currentProduct, nextProduct) => {
        return nextProduct.name.localeCompare(currentProduct.name)
      })
    }
    return {
      ...state,
      filtered_products: productsArray,
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state

    const {
      searchInput,
      brand,
      category,
      minPrice,
      maxPrice,
      price,
      shipping,
    } = state.filters

    let productsArray = [...all_products]

    //searchInput filtering
    if (searchInput) {
      productsArray = productsArray.filter((product) => {
        return product.name.toLowerCase().indexOf(searchInput) !== -1
      })
    }

    //category filtering
    if (category !== 'all') {
      productsArray = productsArray.filter(
        (product) => product.category === category
      )
    }

    //brand filtering
    if (brand !== 'all') {
      productsArray = productsArray.filter((product) => product.brand === brand)
    }

    //price filtering
    productsArray = productsArray.filter((product) => product.price <= price)

    //shipping filtering
    if (shipping) {
      productsArray = productsArray.filter(
        (product) => product.shipping === true
      )
    }

    return { ...state, filtered_products: productsArray }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        searchInput: '',
        brand: 'all',
        category: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      },
    }
  }

  throw new Error(`No action matching with ${action.type}`)
}

export default filter_reducer
