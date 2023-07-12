import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type == ADD_TO_CART) {
    const { id, size, amount, product } = action.payload

    const currentItem = state.cart.find((item) => {
      return item.id == size + id
    })

    if (currentItem) {
      const currentCart = state.cart.map((cartItem) => {
        if (cartItem.id === size + id) {
          let newAmount = cartItem.amount + amount

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: currentCart }
    } else {
      const newItem = {
        id: size + id,
        name: product.name,
        size,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type == REMOVE_CART_ITEM) {
    const currentCart = state.cart.filter((item) => item.id !== action.payload)

    return { ...state, cart: currentCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if (action.type == TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload

    const currentCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'increase') {
          let newAmount = item.amount + 1
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        }
        if (value === 'decrease') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      }
      return item
    })

    return { ...state, cart: currentCart }
  }

  if (action.type == COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.totalItems += amount
        total.totalAmount += price * amount
        return total
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    )
    return { ...state, totalItems, totalAmount }
  }

  throw new Error(`no matching ${action.type}`)
}

export default cart_reducer
