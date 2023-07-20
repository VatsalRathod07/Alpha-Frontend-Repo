const aplhaCompany = {
  id: 1,
  name: "Aalfa Aata Maker",
  gst: "GST123123",
  businessNature: "Manufacturer",
  description: "<This will be markdown text, multi paragraph>",
  address: {
    houseNo: "A-21, ABC avenue, near Bapa-sitaram chowk",
    landmark: "Odhav",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    zipCode: 382350,
    coordinates: [0, 0],
  },
  contact: {
    mobile: 1234567890,
    phone: 1234567890,
  },
  photos: [],
  videos: [],
};

const products = [
  {
    id: 1,
    productRank: 1,
    name: "Automatic Domestic Atta Chakki 1 HP",
    material: "Stainless Steel",
    price: {
      value: 12000,
      currency: "INR",
      // discount: null or bellow
      discount: {
        type: "percent", // percent or flat
        value: 5,
      },
    },
    guarantee: {
      value: 15, // In Months
      conditional: true,
    },
    weight: {
      value: 45,
      unit: "KG",
    },
    voltage: {
      value: 220,
      unit: "V",
    },
    certification: "ISO",
    origin: "India",
    capacity: {
      value: "5 to 10",
      unit: "kg/hr",
    },
    warranty: [7, 12], // In Months
    motorPower: 3, // HP - hourse power
    connectionType: "Electricity Connection",
    operationMode: "AUTOMATIC",
    usage: "Domestic",
    features: [
      "100% Nutritional value on Flour & Spices",
      "Stylish and attractive range of Models",
      "Affordable priced & uncompromised quality products",
      "Latest & Robust Technology",
      "Having the ability to meet the needs of the market",
      "Strong edge on competition Plugged in and Grind, Simple",
      "Low Noise",
      "Low Electricity Consumption",
      "No Wastage of flour",
      "Changeable filter Screen",
      "Strong Built cabinet with child safety lock You Can adjust the levels to get the finest quality flour ",
    ],
    rating: 4.5,
    companyId: 1, // Foreign Key
    media: {
      brochure: "", // PDF URL
      images: {
        main: "https://5.imimg.com/data5/SELLER/Default/2021/7/IX/BJ/AM/4820713/mahhy-automatic-domestic-atta-chakki-500x500.jpg",
        list: [
          "https://5.imimg.com/data5/SELLER/Default/2021/7/IX/BJ/AM/4820713/mahhy-automatic-domestic-atta-chakki-500x500.jpg",
          "https://5.imimg.com/data5/TQ/UT/ER/IOS-2745428/product-jpeg-500x500.png",
          "https://5.imimg.com/data5/SELLER/Default/2023/5/310714776/KE/EK/LG/2745428/1-hp-automatic-domestic-atta-chakki-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2023/2/OK/UV/GA/2745428/automatic-domestic-atta-chakki-500x500.jpg",
        ],
      },
      videos: {
         main: "https://www.youtube.com/watch?v=z9caPLbZSfQ&ab_channel=NoCopyrightSounds",
        list: [
          "https://www.youtube.com/watch?v=z9caPLbZSfQ&ab_channel=NoCopyrightSounds",
          "https://www.youtube.com/watch?v=z9caPLbZSfQ&ab_channel=NoCopyrightSounds",
        ],
      },
    },
  },
];
