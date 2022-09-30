import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      // Example isAdmin
      name: "admin name",
      email: "adminemail@gmail.com",
      password: bcrypt.hashSync("*****"),
      isAdmin: true,
    },
    {
      // Example not Admin
      name: "name",
      email: "email@gmail.com",
      password: bcrypt.hashSync("*****"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Polo Shirt",
      price: 5999,
      image: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#cdcdcd", "#000"],
      brand: "polo",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "polo",
      images: [
        {
          url: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/Kj5FMw7m/grey-polo-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: " https://i.postimg.cc/4ywkdtZd/red-polo-01.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      shipping: true,
      summerOutFit: true,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      slug: "polo-shirt",
    },
    {
      name: "perfect R-TShirt",
      price: 9999,
      image: "https://i.postimg.cc/tRzYPM41/red-shirt-04.jpg",
      colors: ["#000", "#ffb900", "#ff0000", "#00ff00", "#0000ff"],
      brand: "adidas",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "shirts",
      images: [
        {
          url: "https://i.postimg.cc/tRzYPM41/red-shirt-04.jpg",
          filename: "red-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
          filename: "black-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
          filename: "blue-=shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg",
          filename: "green-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "white-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 10,
      rating: 4.0,
      slug: "red-t-shirt",
      shipping: true,
      summerOutFit: true,
    },
    {
      name: "best shirt",
      price: 2599,
      image: "https://i.postimg.cc/9FLMrwFs/long-shirt-01.jpg",
      colors: ["#000", "#00ff00", "#0000ff"],
      brand: "kappa",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "long sleeve",
      images: [
        {
          url: "https://i.postimg.cc/9FLMrwFs/long-shirt-01.jpg",
          filename: "long-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzxZdnhv/long-shirt-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/CxfgSRZG/long-shirt-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/hjKWLM2s/long-shirt-04.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/xTXr3X3w/long-shirt-05.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 14,
      rating: 4.3,
      slug: "long-shirt",
      shipping: true,
      summerOutFit: true,
    },
    {
      name: "woman summer fit",
      price: 3999,
      image: "https://i.postimg.cc/jdKpPTFn/woman-gray-t-shirt.jpg",
      colors: ["#0000ff", "#000", "#ffb900", "#ff0000"],
      brand: "tommy",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "Woman T-Shirt",
      images: [
        {
          url: "https://i.postimg.cc/jdKpPTFn/woman-gray-t-shirt.jpg",
          filename: "woman-gray.jpg",
        },
        {
          url: "https://i.postimg.cc/sfKcHR2h/woman-green-t-shirt.jpg",
          filename: "woman-green.jpg",
        },
        {
          url: "https://i.postimg.cc/G2xZSSBm/womens-white-t-shirt.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/vHgV7RxM/woman-black-t-shirt.jpg",
          filename: "woman black.jpg",
        },
        {
          url: "https://i.postimg.cc/tRV6WQxb/woman-red-t-shirt.jpg",
          filename: "woman red.jpg",
        },
      ],
      countInStock: 15,
      numReviews: 33,
      rating: 4.0,
      slug: "womanT-Shirt",
      shipping: true,
      summerOutFit: true,
    },
    {
      name: "Grey Polo",
      price: 3999,
      image: "https://i.postimg.cc/Kj5FMw7m/grey-polo-02.jpg",
      colors: ["#0000ff", "#000", "#ffb900", "#ff0000"],
      brand: "polo",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "polo",
      images: [
        {
          url: "https://i.postimg.cc/Kj5FMw7m/grey-polo-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: " https://i.postimg.cc/4ywkdtZd/red-polo-01.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 15,
      numReviews: 33,
      rating: 4.0,
      slug: "grey-polo",
      shipping: true,
      summerOutFit: false,
    },

    {
      name: "Blue polo",
      price: 1459,
      image: " https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#ffb900", "#ff0000"],
      brand: "adidas  ",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "polo",
      images: [
        {
          url: "https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/Kj5FMw7m/grey-polo-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: " https://i.postimg.cc/4ywkdtZd/red-polo-01.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 6,
      numReviews: 19,
      rating: 4.5,
      slug: "blue-polo",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Black Shirt",
      price: 2399,
      image: " https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "puma",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "shirts",
      images: [
        {
          url: "https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
          filename: "black-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/tRzYPM41/red-shirt-04.jpg",
          filename: "red-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
          filename: "blue-=shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg",
          filename: "green-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "white-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 16,
      rating: 5,
      slug: "black-shirt",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Green Shirt",
      price: 2399,
      image: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg ",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1", "#ffb900", "#ff0000"],
      brand: "nike",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "shirts",
      images: [
        {
          url: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg",
          filename: "green-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/tRzYPM41/red-shirt-04.jpg",
          filename: "red-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
          filename: "black-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
          filename: "blue-=shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "white-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 100,
      rating: 4.7,
      slug: "green-shirt",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Long Sleeve green",
      price: 1299,
      image: "https://i.postimg.cc/hjKWLM2s/long-shirt-04.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "adidas",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "long sleeve",
      images: [
        {
          url: "https://i.postimg.cc/hjKWLM2s/long-shirt-04.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FLMrwFs/long-shirt-01.jpg",
          filename: "long-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzxZdnhv/long-shirt-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/CxfgSRZG/long-shirt-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/xTXr3X3w/long-shirt-05.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 80,
      rating: 4.5,
      slug: "long-shirt-02",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Blue Shirt",
      price: 3399,
      image: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
      colors: ["#000", "#00b900", "#f0f1f1", "#0000ff", "#ffb900", "#ff0000"],
      brand: "adidas",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "shirt",
      images: [
        {
          url: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
          filename: "blue-=shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
          filename: "black-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/tRzYPM41/red-shirt-04.jpg",
          filename: "red-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg",
          filename: "green-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "white-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 90,
      rating: 4.5,
      slug: "blue-shirt",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Native wrapper",
      price: 4999,
      image: "https://i.postimg.cc/W3bXnvq9/clothes-01.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1", "#ffb900", "#ff0000"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "wrapper",
      images: [
        {
          url: "https://i.postimg.cc/W3bXnvq9/clothes-01.jpg",
          filename: "clothes-01.jpg",
        },
        {
          url: "https://i.postimg.cc/ncf1Zh7Q/clothes-02.jpg",
          filename: "clothes-02.jpg",
        },
        {
          url: "https://i.postimg.cc/FRJnWn5t/clothes-03.jpg",
          filename: "clothes-03.jpg",
        },
        {
          url: "https://i.postimg.cc/SKcMgWTT/clothes-04.jpg",
          filename: "clothes-04.jpg",
        },
        {
          url: "https://i.postimg.cc/SK5mY57H/clothes-05.jpg",
          filename: "clothes-05.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      slug: "african-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "mayor",
      price: 2399,
      image: "https://i.postimg.cc/3r4Bwcq6/fashion-06.jpg",
      colors: ["#f1f", "#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "dress",
      images: [
        {
          url: "https://i.postimg.cc/3r4Bwcq6/fashion-06.jpg",
          filename: "fashion-designer-01.jpg",
        },
        {
          url: "https://i.postimg.cc/J0R9v1FY/fashion-designer-00.jpg",
          filename: "fashion-designer-02.jpg",
        },
        {
          url: "https://i.postimg.cc/5NY31cMs/fashion-designer-01.jpg",
          filename: "fashion-designer-03.jpg",
        },
        {
          url: "https://i.postimg.cc/Y9PWy9jM/fashion-designer-02.jpg",
          filename: "fashion-designer-04.jpg",
        },
        {
          url: "https://i.postimg.cc/Zq7H4J0D/fashion-designer-03.jpg",
          filename: "fashion-designer-05.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 110,
      rating: 4.5,
      slug: "mayor",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Polo best Design ",
      price: 5999,
      image: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      brand: "polo",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "polo",
      images: [
        {
          url: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/Kj5FMw7m/grey-polo-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: " https://i.postimg.cc/4ywkdtZd/red-polo-01.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      shipping: true,
      summerOutFit: false,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      slug: "polo-shirt-02",
    },
    {
      name: "tutorial native",
      price: 6399,
      image: "https://i.postimg.cc/3xnp1X6m/fashion-02.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "dress",
      images: [
        {
          url: "https://i.postimg.cc/3xnp1X6m/fashion-02.jpg",
          filename: "native dress 01",
        },
        {
          url: "https://i.postimg.cc/G9ntDTgg/native-fashion-01.jpg",
          filename: "native dress 02",
        },
        {
          url: "https://i.postimg.cc/fRrksbYP/native-fashion-02.jpg",
          filename: "native dress 03",
        },
        {
          url: "https://i.postimg.cc/rmcT26Zb/native-fashion-03.jpg",
          filename: "native dress 04",
        },
        {
          url: "https://i.postimg.cc/tRSK2Vb8/native-fashion-04.jpg",
          filename: "native dress 04",
        },
      ],
      countInStock: 5,
      numReviews: 150,
      rating: 4.5,
      slug: "tutorial-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "cambalan native",
      price: 23999,
      image: "https://i.postimg.cc/fygz72Wb/Fashion-For-Men-00.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "man clothes",
      images: [
        {
          url: "https://i.postimg.cc/fygz72Wb/Fashion-For-Men-00.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/3wJ36Qyw/fashion-for-men-01.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/8CF0sZ9H/fashion-for-men-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/3RX9DVBg/fashion-for-men-03.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2Sgx9r9Q/fashion-for-men-04.jpg ",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 115,
      rating: 4.0,
      slug: "cambalan-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Long shirt fit",
      price: 2599,
      image: "https://i.postimg.cc/CxfgSRZG/long-shirt-03.jpg",
      colors: ["#000", "#00ff00", "#0000ff"],
      brand: "kappa",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "long sleeve",
      images: [
        {
          url: "https://i.postimg.cc/CxfgSRZG/long-shirt-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FLMrwFs/long-shirt-01.jpg",
          filename: "long-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzxZdnhv/long-shirt-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/hjKWLM2s/long-shirt-04.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/xTXr3X3w/long-shirt-05.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 14,
      rating: 4.3,
      slug: "long-shirt-03",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "glance native",
      price: 14399,
      image: "https://i.postimg.cc/Bnv6mxKh/suit01.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1"],
      brand: "tony classis",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "men suit",
      images: [
        {
          url: "https://i.postimg.cc/Bnv6mxKh/suit01.jpg",
          filename: "long-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/7ZLsbmfn/redSuit.jpg",
          filename: "red suit",
        },
        {
          url: "https://i.postimg.cc/XvLHr86d/yellow-Sult.jpg",
          filename: "yellow suit",
        },
        {
          url: "https://i.postimg.cc/283XK2qp/officewear5.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/QtpghX8W/complete-Officedress.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 150,
      rating: 4.5,
      slug: "glance-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "summer native",
      price: 5499,
      image: "https://i.postimg.cc/RZJx313v/summer-native-01.jpg",
      colors: ["#0000ff", "#000"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "dress",
      images: [
        {
          url: "https://i.postimg.cc/RZJx313v/summer-native-01.jpg",
          filename: "long-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/RqrQgzTs/summer-native-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/3x1fxd13/summer-native-04.webp",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/85QZyMPB/summer-native-05.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/W1x83grL/summer-native-06.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 96,
      rating: 4.5,
      slug: "summer-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Red T-Shirt fit",
      price: 9999,
      image: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
      colors: ["#000", "#ffb900"],
      brand: "adidas",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "shirts",
      images: [
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "red-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/nzyMkyQ7/black-shirt-04.jpg",
          filename: "black-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/k4QzD89S/blue-shirt-02.jpg",
          filename: "blue-=shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/9FRPp2R8/green-shirt-03.jpg",
          filename: "green-shirt-02.jpg",
        },
        {
          url: "https://i.postimg.cc/NjQ6wHCV/white-shirt-01.png",
          filename: "white-polo-02.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 10,
      rating: 4.0,
      slug: "red-t-shirt-01",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "old-school native",
      price: 5699,
      image: "https://i.postimg.cc/zvRmZXsf/clothes-17.jpg",
      colors: ["#0000ff", "#000", "#00b900", "#f0f1f1", "#ffb900", "#ff0000"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "dress",
      images: [
        {
          url: "https://i.postimg.cc/zvRmZXsf/clothes-17.jpg",
          filename: "fashion-designer-01.jpg",
        },
        {
          url: "https://i.postimg.cc/J0R9v1FY/fashion-designer-00.jpg",
          filename: "fashion-designer-02.jpg",
        },
        {
          url: "https://i.postimg.cc/5NY31cMs/fashion-designer-01.jpg",
          filename: "fashion-designer-03.jpg",
        },
        {
          url: "https://i.postimg.cc/Y9PWy9jM/fashion-designer-02.jpg",
          filename: "fashion-designer-04.jpg",
        },
        {
          url: "https://i.postimg.cc/Zq7H4J0D/fashion-designer-03.jpg",
          filename: "fashion-designer-05.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      slug: "oldSchool-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "coolest native",
      price: 3399,
      image: "https://i.postimg.cc/zXbdjQNq/clothes-18.jpg",
      colors: ["#0000ff", "#000", "#f0f1f1", "#ffb900", "#ff0000"],
      brand: "lady nina",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "dress",
      images: [
        {
          url: "https://i.postimg.cc/3r4Bwcq6/fashion-06.jpg",
          filename: "fashion-designer-01.jpg",
        },
        {
          url: "https://i.postimg.cc/tRSK2Vb8/native-fashion-04.jpg",
          filename: "native dress 04",
        },
        {
          url: "https://i.postimg.cc/Y9PWy9jM/fashion-designer-02.jpg",
          filename: "fashion-designer-04.jpg",
        },
        {
          url: "https://i.postimg.cc/G9ntDTgg/native-fashion-01.jpg",
          filename: "native dress 02",
        },
        {
          url: "https://i.postimg.cc/Zq7H4J0D/fashion-designer-03.jpg",
          filename: "fashion-designer-05.jpg",
        },
      ],
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      slug: "coolest-native",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "office dress",
      price: 16599,
      image: "https://i.postimg.cc/GpdgDsZp/ffice-profession-dress1.jpg",
      colors: ["#0000ff", "#000", "#f0f1f1", "#ffb900", "#ff0000"],
      brand: "tony classis",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "lady suit",
      images: [
        {
          url: "https://i.postimg.cc/GpdgDsZp/ffice-profession-dress1.jpg",
          filename: "black name",
        },
        {
          url: "https://i.postimg.cc/fWCXKqJZ/ladyoutfit.png",
          filename: "office dress",
        },
        {
          url: "https://i.postimg.cc/8C7tQQfh/office-suit02.png",
          filename: "nice outfit",
        },
        {
          url: "https://i.postimg.cc/cHdjHWX2/ladyofficeswear4.jpgv",
          filename: "lady nice fit",
        },
        {
          url: "https://i.postimg.cc/Zq7H4J0D/fashion-designer-03.jpg",
          filename: "classis dress",
        },
      ],
      countInStock: 5,
      numReviews: 156,
      rating: 4.5,
      slug: "office-designer",
      shipping: true,
      summerOutFit: false,
    },
    {
      name: "Grey great polo",
      price: 3999,
      image: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
      colors: ["#0000ff", "#000", "#ffb900", "#ff0000"],
      brand: "polo",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      category: "polo",
      images: [
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "grey-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/1tj3zLK2/black-polo-04.jpg",
          filename: "black-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/C1qxzc6K/blue-polo-03.jpg",
          filename: "blue-polo-02.jpg",
        },
        {
          url: "https://i.postimg.cc/2yN9D5Z5/light-green-polo-02.jpg",
          filename: "green-polo-02.jpg",
        },
        {
          url: " https://i.postimg.cc/4ywkdtZd/red-polo-01.jpg",
          filename: "red-polo-02.jpg",
        },
      ],
      countInStock: 15,
      numReviews: 33,
      rating: 4.0,
      slug: "light-green",
      shipping: true,
      summerOutFit: false,
    },
  ],
};

export default data;
