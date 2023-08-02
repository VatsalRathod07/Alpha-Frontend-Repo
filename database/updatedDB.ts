const companies = [
  {
    id: 1001,
    name: "Alpha aatamaker",
  },
];

/**
 *
 * Categories
 *
 */

enum Currency {
  INR = "INR",
}

enum DiscountType {
  Percent = "percent",
  Flat = "flat",
}

interface Category {
  id: number;
  rank: number;
  name: string;
  material: string;
  price: {
    value: string;
    currency: Currency.INR;
    discount: {
      type: DiscountType.Percent;
      value: number;
    } | null;
  };
  weight: number; // KG,
  volatage: number; // V
  companyId: number;
  features: string[];
  capacity: { value: [number, number]; unit: "KG" };
  media?: ProductMediaType[];
}

export const categories: Category[] = [
  {
    id: 2001,
    rank: 5,
    name: "Reguler",
    material: "",
    price: {
      value: "10,500",
      currency: Currency.INR,
      discount: null,
    },
    weight: 45, // KG,
    volatage: 220, // V
    companyId: 1001,
    features: [
      "Low Noise",
      "Low Electricity Consumption",
      "No Wastage of flour",
      "Changeable filter Screen",
    ],
    capacity: { value: [6, 23], unit: "KG" },
  },
  {
    id: 2002,
    rank: 4,
    name: "Classic",
    material: "",
    price: {
      value: "11,500",
      currency: Currency.INR,
      discount: {
        type: DiscountType.Percent,
        value: 20,
      },
    },
    weight: 45, // KG,
    volatage: 220, // V
    companyId: 1001,
    features: [
      "Latest & Robust Technology",
      "No Wastage on flour",
      "Low Noise",
      "Low Electricity Consumption",
    ],
    capacity: { value: [6, 23], unit: "KG" },
  },
  {
    id: 2003,
    rank: 3,
    name: "Premium",
    material: "",
    price: {
      value: "12,500",
      currency: Currency.INR,
      discount: null,
    },
    weight: 45, // KG,
    volatage: 220, // V
    companyId: 1001,
    features: [
      "100% Nutritional value on Flour & Spices",
      "No Wastage of flour",
      "Changeable filter Screen",
      "Stylish and attractive range of Models",
    ],
    capacity: { value: [6, 23], unit: "KG" },
  },
  {
    id: 2004,
    rank: 2,
    name: "Diamond",
    material: "",
    price: {
      value: "14,500",
      currency: Currency.INR,
      discount: null,
    },
    weight: 45, // KG,
    volatage: 220, // V
    companyId: 4001,
    features: [
      "Stylish and attractive range of Models",
      "Affordable priced & uncompromised quality products",
      "Latest & Robust Technology",
      "Having the ability to meet the needs of the market",
    ],
    capacity: { value: [6, 23], unit: "KG" },
  },
  {
    id: 2005,
    rank: 1,
    name: "Diamond Plus",
    material: "",
    price: {
      value: "15,000",
      currency: Currency.INR,
      discount: null,
    },
    weight: 45, // KG,
    volatage: 220, // V
    companyId: 1001,
    features: [
      "Strong edge on competition Plugged in and Grind, Simple",
      "Low Noise",
      "Low Electricity Consumption",
      "No Wastage of flour",
    ],
    capacity: { value: [6, 23], unit: "KG" },
  },
];

/**
 *
 * Products
 *
 */

enum ProductType {
  Aatamaker = "aatamaker",
}

interface ProductMediaType {
  type: "video" | "image";
  url: string;
}

interface Product {
  id: number;
  type: ProductType;
  categoryId: number;
  name: string;
  rank: number;
  sellCount: number;
  rating: number;
  companyId: number;
  media: ProductMediaType[];
}

const newProducts: Product[] = [
  {
    id: 3001,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    name: "Krishna with Flute",
    rank: 1,
    sellCount: 22,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: "http://www.google.com/",
      },
      {
        type: "video",
        url: "http://www.google.com/",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=_zvzWG9tKzI",
      },
      {
        type: "image",
        url: "http://www.google.com/",
      },
      {
        type: "image",
        url: "http://www.google.com/",
      },
    ],
  },
  {
    id: 3002,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    name: "Rose Gold and silver combinations",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: "http://www.google.com/",
      },
    ],
  },
  {
    id: 3003,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    name: "Rose Gold and silver combinations",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: "http://www.google.com/",
      },
    ],
  },
];
