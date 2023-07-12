import React from 'react'
import logo from '../assets/mini-logo.svg'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const knowledges = [
  {
    id: 1,
    icon: <img src={logo} alt="Logo" />,
    title: 'Beşiktaş',
    text: 'Besiktas JK, commonly known as Besiktas, is a professional sports club based in Istanbul, Turkey. Founded in 1903, Besiktas JK is one of the oldest and most successful sports clubs in Turkey. The club is primarily known for its football team, which competes in the Turkish Super Lig, the top tier of Turkish football. Besiktas has a rich history and a passionate fan base. The team plays their home matches at Vodafone Park, a modern stadium located in the Besiktas district of Istanbul.',
  },

  {
    id: 2,
    icon: <img src={logo} alt="Logo" />,
    title: 'Kartal Yuvası',
    text: 'Kartal Yuvası, which translates to "Eagle\'s Nest" in English, is the nickname of the fan base and supporters of Besiktas JK. The term "Kartal" means "eagle" in Turkish, and it symbolizes the club\'s fierce and determined spirit. The supporters of Besiktas are known for their unwavering loyalty, passion, and vocal presence during matches. The phrase "Kartal Yuvası" is often used to describe the collective identity and unity of the club\'s fans, who create an electric atmosphere in the stands, making Vodafone Park a fortress for Besiktas.',
  },

  {
    id: 3,
    icon: <img src={logo} alt="Logo" />,
    title: 'History',
    text: "Beşiktaş Jimnastik Kulübü, also known simply as Beşiktaş, is a Turkish professional sports club founded in 1903 that is based in the Beşiktaş district of Istanbul. The club's football team is one of the Big Three in Turkey and one of the most successful teams in the country, having never been relegated to a lower division. It was the first registered sports club in the country and one of the few that acquired the right to bear the Turkish flag on its crest.",
  },
]

export const products_url =
  'https://eshop-97209-default-rtdb.firebaseio.com/products.json'

export const single_product_url =
  'https://eshop-single-product-default-rtdb.firebaseio.com'
