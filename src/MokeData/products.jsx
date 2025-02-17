const products= [
  {
    "id": 1,
    "title": "Casual Shirt",
    "description": "Lightweight casual shirt for summer outings.",
    "price": 499,
    "image": "https://images.pexels.com/photos/5745169/pexels-photo-5745169.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 2,
    "title": "Denim Jeans",
    "description": "Comfort-fit denim jeans suitable for all occasions.",
    "price": 999,
    "image": "https://images.pexels.com/photos/30489301/pexels-photo-30489301/free-photo-of-casual-young-man-in-black-t-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 3,
    "title": "Leather Jacket",
    "description": "Stylish leather jacket with a modern cut.",
    "price": 2999,
    "image": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 4,
    "title": "Sneakers",
    "description": "Comfortable sneakers for everyday wear.",
    "price": 1499,
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 5,
    "title": "Sunglasses",
    "description": "UV-protected sunglasses with a trendy design.",
    "price": 799,
    "image": "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 6,
    "title": "Wrist Watch",
    "description": "Elegant wrist watch with a leather strap.",
    "price": 1999,
    "image": "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 7,
    "title": "Handbag",
    "description": "Spacious handbag perfect for daily use.",
    "price": 2499,
    "image": "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 8,
    "title": "Sports Shoes",
    "description": "High-performance sports shoes for active lifestyles.",
    "price": 1299,
    "image": "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 9,
    "title": "Formal Blazer",
    "description": "Sleek formal blazer for professional settings.",
    "price": 3499,
    "image": "https://images.pexels.com/photos/5717058/pexels-photo-5717058.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 10,
    "title": "Casual T-Shirt",
    "description": "Soft and breathable t-shirt available in various colors.",
    "price": 299,
    "image": "https://images.pexels.com/photos/6774172/pexels-photo-6774172.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 11,
    "title": "Casual Shirt",
    "description": "Lightweight casual shirt for summer outings.",
    "price": 499,
    "image": "https://images.pexels.com/photos/5745169/pexels-photo-5745169.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 12,
    "title": "Denim Jeans",
    "description": "Comfort-fit denim jeans suitable for all occasions.",
    "price": 999,
    "image": "https://images.pexels.com/photos/29887476/pexels-photo-29887476/free-photo-of-chic-fashion-portrait-with-lace-gloves.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 13,
    "title": "Leather Jacket",
    "description": "Stylish leather jacket with a modern cut.",
    "price": 2999,
    "image": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 14,
    "title": "Sneakers",
    "description": "Comfortable sneakers for everyday wear.",
    "price": 1499,
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 15,
    "title": "Sunglasses",
    "description": "UV-protected sunglasses with a trendy design.",
    "price": 799,
    "image": "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 16,
    "title": "Wrist Watch",
    "description": "Elegant wrist watch with a leather strap.",
    "price": 1999,
    "image": "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 17,
    "title": "Handbag",
    "description": "Spacious handbag perfect for daily use.",
    "price": 2499,
    "image": "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 18,
    "title": "Sports Shoes",
    "description": "High-performance sports shoes for active lifestyles.",
    "price": 1299,
    "image": "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 19,
    "title": "Formal Blazer",
    "description": "Sleek formal blazer for professional settings.",
    "price": 3499,
    "image": "https://images.pexels.com/photos/25985695/pexels-photo-25985695/free-photo-of-woman-in-suit-portrait.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 20,
    "title": "Casual T-Shirt",
    "description": "Soft and breathable t-shirt available in various colors.",
    "price": 299,
    "image": "https://images.pexels.com/photos/30712284/pexels-photo-30712284/free-photo-of-urban-street-fashion-in-vibrant-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 21,
    "title": "Casual Shirt",
    "description": "Lightweight casual shirt for summer outings.",
    "price": 499,
    "image": "https://images.pexels.com/photos/5745169/pexels-photo-5745169.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 22,
    "title": "Denim Jeans",
    "description": "Comfort-fit denim jeans suitable for all occasions.",
    "price": 999,
    "image": "https://images.pexels.com/photos/30710032/pexels-photo-30710032/free-photo-of-casual-street-style-jeans-and-sneakers.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 23,
    "title": "Leather Jacket",
    "description": "Stylish leather jacket with a modern cut.",
    "price": 2999,
    "image": "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 24,
    "title": "Sneakers",
    "description": "Comfortable sneakers for everyday wear.",
    "price": 1499,
    "image": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 25,
    "title": "Sunglasses",
    "description": "UV-protected sunglasses with a trendy design.",
    "price": 799,
    "image": "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 26,
    "title": "Wrist Watch",
    "description": "Elegant wrist watch with a leather strap.",
    "price": 1999,
    "image": "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 27,
    "title": "Handbag",
    "description": "Spacious handbag perfect for daily use.",
    "price": 2499,
    "image": "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 28,
    "title": "Sports Shoes",
    "description": "High-performance sports shoes for active lifestyles.",
    "price": 1299,
    "image": "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 29,
    "title": "Formal Blazer",
    "description": "Sleek formal blazer for professional settings.",
    "price": 3499,
    "image": "https://images.pexels.com/photos/30697674/pexels-photo-30697674/free-photo-of-fashionable-portrait-with-red-jacket-and-white-background.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    "id": 30,
    "title": "Casual T-Shirt",
    "description": "Soft and breathable t-shirt available in various colors.",
    "price": 299,
    "image": "https://images.pexels.com/photos/30752888/pexels-photo-30752888/free-photo-of-strong-and-confident-man-outdoors-portrait.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
    ];

export default products;