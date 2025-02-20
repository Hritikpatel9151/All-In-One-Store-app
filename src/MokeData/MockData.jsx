export const data = {
  "users": {
    "admins": [
      {
        "id": "admin_1",
        "username": "superadmin",
        "email": "admin@example.com",
        "role": "admin",
        "permissions": [
          "manage_users",
          "manage_products",
          "manage_orders"
        ]
      },
      {
        "id": "admin_2",
        "username": "contentmod",
        "email": "moderator@example.com",
        "role": "admin",
        "permissions": [
          "manage_products",
          "manage_reviews"
        ]
      }
    ],
    "sellers": [
      {
        "id": "seller_1",
        "username": "techstore",
        "email": "tech.store@example.com",
        "role": "seller",
        "storeName": "Tech Haven",
        "rating": 4.8,
        "products": [
          "prod_1",
          "prod_2"
        ],
        "totalSales": 1250
      },
      {
        "id": "seller_2",
        "username": "fashionista",
        "email": "fashion@example.com",
        "role": "seller",
        "storeName": "Fashion Plus",
        "rating": 4.6,
        "products": [
          "prod_3",
          "prod_4"
        ],
        "totalSales": 890
      }
    ],
    "buyers": [
      {
        "id": "buyer_1",
        "username": "shopaholic",
        "email": "buyer1@example.com",
        "role": "buyer",
        "wishlist": [
          "prod_1",
          "prod_3"
        ],
        "cart": [
          {
            "productId": "prod_2",
            "quantity": 2
          }
        ]
      },
      {
        "id": "buyer_2",
        "username": "smartshopper",
        "email": "buyer2@example.com",
        "role": "buyer",
        "wishlist": [
          "prod_2"
        ],
        "cart": []
      }
    ]
  },
  "products": [
    {
      "id": "prod_1",
      "sellerId": "seller_1",
      "title": "Smartphone Pro",
      "price": 999.99,
      "stock": 50,
      "category": "Electronics",
      "images": [
        "/images/phone1.jpg",
        "/images/phone2.jpg"
      ]
    },
    {
      "id": "prod_2",
      "sellerId": "seller_1",
      "title": "Wireless Earbuds",
      "price": 149.99,
      "stock": 100,
      "category": "Electronics",
      "images": [
        "/images/earbuds1.jpg"
      ]
    },
    {
      "id": "prod_3",
      "sellerId": "seller_2",
      "title": "Summer Dress",
      "price": 79.99,
      "stock": 30,
      "category": "Fashion",
      "images": [
        "/images/dress1.jpg"
      ]
    }
  ],
  "orders": [
    {
      "id": "order_1",
      "buyerId": "buyer_1",
      "products": [
        {
          "productId": "prod_1",
          "quantity": 1,
          "price": 999.99
        }
      ],
      "status": "shipped",
      "orderDate": "2025-02-01T00:00:00Z"
    }
  ]
}