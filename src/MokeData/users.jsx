 const users = [
    {
      "id": 101,
      "name": "Alice Johnson",
      "role": "buyer",
      "email": "alice@example.com",
      "password": "123",
      "phone": "+1-555-1234",
      "address": "123 Main St, New York, USA",
      "cart": [
        { "productId": 2, "quantity": 1 },
        { "productId": 10, "quantity": 2 }
      ],
      "wishlist": [3, 5]
    },
    {
      "id": 102,
      "name": "Bob Smith",
      "role": "seller",
      "email": "bob@example.com",
      "password": "123",
      "phone": "+1-555-5678",
      "address": "456 Oak St, San Francisco, USA",
      "cart": [],
      "wishlist": []
    },
    {
      "id": 103,
      "name": "Carol Admin",
      "role": "admin",
      "email": "admin@example.com",
      "password": "admin",
      "phone": "+1-555-9999",
      "address": "789 Pine St, Los Angeles, USA",
      "cart": [],
      "wishlist": []
    }
  ];
  
  export default users;