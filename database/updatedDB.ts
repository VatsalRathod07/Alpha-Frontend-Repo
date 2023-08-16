import Image1 from "../public/img/Classic/1.jpeg"
import Image2 from "../public/img/Classic/2.jpeg"
import Image3 from "../public/img/Classic/3.jpeg"
import Image4 from "../public/img/Classic/4.jpeg"
import Image5 from "../public/img/Classic/5.jpeg"
import Image6 from "../public/img/Classic/6.jpeg"
import Image7 from "../public/img/Classic/7.jpeg"
import Image8 from "../public/img/Classic/8.jpeg"
import Image9 from "../public/img/Classic/9.jpeg"
import Image10 from "../public/img/Classic/10.jpeg"
import Image11 from "../public/img/Classic/11.jpeg"
import Image12 from "../public/img/Classic/12.jpeg"
import Image13 from "../public/img/Classic/13.jpeg"
import Image14 from "../public/img/Classic/14.jpeg"
import Image15 from "../public/img/Classic/15.jpeg"
import Image16 from "../public/img/Classic/16.jpeg"
import Image17 from "../public/img/Classic/17.jpeg"

import DiamondImage1 from "../public/img/Diamond/Diamond1.jpeg"
import DiamondImage2 from "../public/img/Diamond/Diamond2.jpeg"
import DiamondImage3 from "../public/img/Diamond/Diamond3.jpeg"
import DiamondImage4 from "../public/img/Diamond/Diamond4.jpeg"
import DiamondImage5 from "../public/img/Diamond/Diamond5.jpeg"
import DiamondImage6 from "../public/img/Diamond/Diamond6.jpeg"
import DiamondImage7 from "../public/img/Diamond/Diamond7.jpeg"
import DiamondImage8 from "../public/img/Diamond/Diamond8.jpeg"
import DiamondImage9 from "../public/img/Diamond/Diamond9.jpeg"
import DiamondImage10 from "../public/img/Diamond/Diamond10.jpeg"
import DiamondImage11 from "../public/img/Diamond/Diamond11.jpeg"
import DiamondImage12 from "../public/img/Diamond/Diamond12.jpeg"
import DiamondImage13 from "../public/img/Diamond/Diamond13.jpeg"
import DiamondImage14 from "../public/img/Diamond/Diamond14.jpeg"

import DiamondPluseImage1 from "../public/img/DiamondPlus/Diamondplus1.jpeg"
import DiamondPluseImage2 from "../public/img/DiamondPlus/Diamondplus2.jpeg"
import DiamondPluseImage3 from "../public/img/DiamondPlus/Diamondplus3.jpeg"
import DiamondPluseImage4 from "../public/img/DiamondPlus/Diamondplus4.jpeg"
import DiamondPluseImage5 from "../public/img/DiamondPlus/Diamondplus5.jpeg"
import DiamondPluseImage6 from "../public/img/DiamondPlus/Diamondplus6.jpeg"
import DiamondPluseImage7 from "../public/img/DiamondPlus/Diamondplus7.jpeg"
import DiamondPluseImage8 from "../public/img/DiamondPlus/Diamondplus8.jpeg"
import DiamondPluseImage9 from "../public/img/DiamondPlus/Diamondplus9.jpeg"
import DiamondPluseImage10 from "../public/img/DiamondPlus/Diamondplus10.jpeg"
import DiamondPluseImage11 from "../public/img/DiamondPlus/Diamondplus11.jpeg"
import DiamondPluseImage12 from "../public/img/DiamondPlus/Diamondplus12.jpeg"
import DiamondPluseImage13 from "../public/img/DiamondPlus/Diamondplus13.jpeg"
import DiamondPluseImage14 from "../public/img/DiamondPlus/Diamondplus14.jpeg"
import DiamondPluseImage15 from "../public/img/DiamondPlus/Diamondplus15.jpeg"
import DiamondPluseImage16 from "../public/img/DiamondPlus/Diamondplus16.jpeg"
import DiamondPluseImage17 from "../public/img/DiamondPlus/Diamondplus17.jpeg"


import RegularImage1 from "../public/img/Regular/Regular1.jpeg"
import RegularImage2 from "../public/img/Regular/Regular2.jpeg"
import RegularImage3 from "../public/img/Regular/Regular3.jpeg"
import RegularImage4 from "../public/img/Regular/Regular4.jpeg"
import RegularImage5 from "../public/img/Regular/Regular5.jpeg"

import PremiumImage1 from "../public/img/Premium/Premium1.jpeg"
import PremiumImage2 from "../public/img/Premium/Premium2.jpeg"
import PremiumImage3 from "../public/img/Premium/Premium3.jpeg"
import PremiumImage4 from "../public/img/Premium/Premium4.jpeg"
import PremiumImage5 from "../public/img/Premium/Premium5.jpeg"
import PremiumImage6 from "../public/img/Premium/Premium6.jpeg"
import PremiumImage7 from "../public/img/Premium/Premium7.jpeg"
import PremiumImage8 from "../public/img/Premium/Premium8.jpeg"
import PremiumImage9 from "../public/img/Premium/Premium9.jpeg"
import PremiumImage10 from "../public/img/Premium/Premium10.jpeg"
import PremiumImage11 from "../public/img/Premium/Premium11.jpeg"
import PremiumImage12 from "../public/img/Premium/Premium12.jpeg"
import PremiumImage13 from "../public/img/Premium/Premium13.jpeg"
import PremiumImage14 from "../public/img/Premium/Premium14.jpeg"
import PremiumImage15 from "../public/img/Premium/Premium15.jpeg"
import PremiumImage16 from "../public/img/Premium/Premium16.jpeg"
import PremiumImage17 from "../public/img/Premium/Premium17.jpeg"
import PremiumImage18 from "../public/img/Premium/Premium18.jpeg"
import PremiumImage19 from "../public/img/Premium/Premium19.jpeg"
import PremiumImage20 from "../public/img/Premium/Premium20.jpeg"
import PremiumImage21 from "../public/img/Premium/Premium21.jpeg"
import PremiumImage22 from "../public/img/Premium/Premium22.jpeg"
import PremiumImage23 from "../public/img/Premium/Premium23.jpeg"


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
    name: "Regular",
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
      "Latest & Robust Technology",
      "No Wastage on flour",
      "Low Noise",
      "Low Electricity Consumption",
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
      "Latest & Robust Technology",
      "No Wastage on flour",
      "Low Noise",
      "Low Electricity Consumption",
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
      "Latest & Robust Technology",
      "No Wastage on flour",
      "Low Noise",
      "Low Electricity Consumption",
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
      "Latest & Robust Technology",
      "No Wastage on flour",
      "Low Noise",
      "Low Electricity Consumption",
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
  url: any;
}

interface Product {
  id: number;
  type: ProductType;
  categoryId: number;
  name: string;
  category: string;
  rank: number;
  sellCount: number;
  rating: number;
  companyId: number;
  media: ProductMediaType[];
}

export const newProducts: Product[] = [
  {
    id: 3001,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3001",
    rank: 1,
    sellCount: 22,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image1,
      },
      {
        type: "image",
        url: Image1,
      },
      {
        type: "image",
        url: Image1,
      },
      {
        type: "image",
        url: Image1,
      },
      {
        type: "image",
        url: Image1,
      },
    ],
  },
  {
    id: 3002,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3002",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image2,
      },
      {
        type: "image",
        url: Image2,
      },
      {
        type: "image",
        url: Image2,
      },
    ],

  },
  {
    id: 3003,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3003",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image3,
      },
      {
        type: "image",
        url: Image3,
      },
      {
        type: "image",
        url: Image3,
      },
    ],

  },

  {
    id: 3004,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3004",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image4,
      },
      {
        type: "image",
        url: Image4,
      },
      {
        type: "image",
        url: Image4,
      },
    ],

  },

  {
    id: 3005,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3005",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image5,
      },
      {
        type: "image",
        url: Image5,
      },
      {
        type: "image",
        url: Image5,
      },
    ],

  },

  {
    id: 3006,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3006",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image6,
      },
      {
        type: "image",
        url: Image6,
      },
      {
        type: "image",
        url: Image6,
      },
    ],

  },

  {
    id: 3007,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3007",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image7,
      },
      {
        type: "image",
        url: Image7,
      },
      {
        type: "image",
        url: Image7,
      },
    ],

  },
  {
    id: 3008,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3008",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image8,
      },
      {
        type: "image",
        url: Image8,
      },
      {
        type: "image",
        url: Image8,
      },
    ],

  },
  {
    id: 3009,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3009",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image9,
      },
      {
        type: "image",
        url: Image9,
      },
      {
        type: "image",
        url: Image9,
      },
    ],

  },
  {
    id: 3010,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3010",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image10,
      },
      {
        type: "image",
        url: Image10,
      },
      {
        type: "image",
        url: Image10,
      },
    ],

  },
  {
    id: 3011,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3011",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image11,
      },
      {
        type: "image",
        url: Image11,
      },
      {
        type: "image",
        url: Image11,
      },
    ],

  },
  {
    id: 3012,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3012",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image12,
      },
      {
        type: "image",
        url: Image12,
      },
      {
        type: "image",
        url: Image12,
      },
    ],

  },
  {
    id: 3013,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3013",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image13,
      },
      {
        type: "image",
        url: Image13,
      },
      {
        type: "image",
        url: Image13,
      },
    ],

  },
  {
    id: 3014,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3014",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image14,
      },
      {
        type: "image",
        url: Image14,
      },
      {
        type: "image",
        url: Image14,
      },
    ],
  },
  {
    id: 3015,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3015",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image15,
      },
      {
        type: "image",
        url: Image15,
      },
      {
        type: "image",
        url: Image15,
      },
    ],
  },
  {
    id: 3016,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3016",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image16,
      },
      {
        type: "image",
        url: Image16,
      },
      {
        type: "image",
        url: Image16,
      },
    ],

  },
  {
    id: 3017,
    type: ProductType.Aatamaker,
    categoryId: 2002,
    category: "classic",
    name: "Product 3017",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: Image17,
      },
      {
        type: "image",
        url: Image17,
      },
      {
        type: "image",
        url: Image17,
      },
    ],
  },
  {
    id: 3018,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3018",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage1,
      },
      {
        type: "image",
        url: DiamondImage1,
      },
      {
        type: "image",
        url: DiamondImage1,
      },
    ],
  },

  {
    id: 3019,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3019",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage2,
      },
      {
        type: "image",
        url: DiamondImage2,
      },
      {
        type: "image",
        url: DiamondImage2,
      },
    ],
  },
  {
    id: 3020,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3020",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage3,
      },
      {
        type: "image",
        url: DiamondImage3,
      },
      {
        type: "image",
        url: DiamondImage3,
      },
    ],
  },
  {
    id: 3021,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3021",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage4,
      },
      {
        type: "image",
        url: DiamondImage4,
      },
      {
        type: "image",
        url: DiamondImage4,
      },
    ],
  },
  {
    id: 3022,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3022",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage5,
      },
      {
        type: "image",
        url: DiamondImage5,
      },
      {
        type: "image",
        url: DiamondImage5,
      },
    ],
  },
  {
    id: 3023,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3023",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage6,
      },
      {
        type: "image",
        url: DiamondImage6,
      },
      {
        type: "image",
        url: DiamondImage6,
      },
    ],
  },
  {
    id: 3024,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3024",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage7,
      },
      {
        type: "image",
        url: DiamondImage7,
      },
      {
        type: "image",
        url: DiamondImage7,
      },
    ],
  },
  {
    id: 3025,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3025",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage8,
      },
      {
        type: "image",
        url: DiamondImage8,
      },
      {
        type: "image",
        url: DiamondImage8,
      },
    ],
  },
  {
    id: 3026,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Diamond",
    name: "Product 3026",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage9,
      },
      {
        type: "image",
        url: DiamondImage9,
      },
      {
        type: "image",
        url: DiamondImage9,
      },
    ],
  },
  {
    id: 3027,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3027",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage10,
      },
      {
        type: "image",
        url: DiamondImage10,
      },
      {
        type: "image",
        url: DiamondImage10,
      },
    ],
  },
  {
    id: 3028,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3028",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage11,
      },
      {
        type: "image",
        url: DiamondImage11,
      },
      {
        type: "image",
        url: DiamondImage11,
      },
    ],
  },
  {
    id: 3029,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3029",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage12,
      },
      {
        type: "image",
        url: DiamondImage12,
      },
      {
        type: "image",
        url: DiamondImage12,
      },
    ],
  },
  {
    id: 3030,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3030",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage13,
      },
      {
        type: "image",
        url: DiamondImage13,
      },
      {
        type: "image",
        url: DiamondImage13,
      },
    ],
  },
  {
    id: 3031,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3031",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage13,
      },
      {
        type: "image",
        url: DiamondImage13,
      },
      {
        type: "image",
        url: DiamondImage13,
      },
    ],
  },
  {
    id: 3032,
    type: ProductType.Aatamaker,
    categoryId: 2004,
    category: "Dimond",
    name: "Product 3032",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondImage14,
      },
      {
        type: "image",
        url: DiamondImage14,
      },
      {
        type: "image",
        url: DiamondImage14,
      },
    ],
  },
  {
    id: 3033,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3033",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage1,
      },
      {
        type: "image",
        url: DiamondPluseImage1,
      },
      {
        type: "image",
        url: DiamondPluseImage1,
      },
    ],
  },
  {
    id: 3034,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3034",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage2,
      },
      {
        type: "image",
        url: DiamondPluseImage2,
      },
      {
        type: "image",
        url: DiamondPluseImage2,
      },
    ],
  },
  {
    id: 3035,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3035",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage3,
      },
      {
        type: "image",
        url: DiamondPluseImage3,
      },
      {
        type: "image",
        url: DiamondPluseImage3,
      },
    ],
  },
  {
    id: 3036,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3036",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage4,
      },
      {
        type: "image",
        url: DiamondPluseImage4,
      },
      {
        type: "image",
        url: DiamondPluseImage4,
      },
    ],
  },
  {
    id: 3037,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3037",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage5,
      },
      {
        type: "image",
        url: DiamondPluseImage5,
      },
      {
        type: "image",
        url: DiamondPluseImage5,
      },
    ],
  },
  {
    id: 3038,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3038",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage6,
      },
      {
        type: "image",
        url: DiamondPluseImage6,
      },
      {
        type: "image",
        url: DiamondPluseImage6,
      },
    ],
  },
  {
    id: 3039,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3039",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage7,
      },
      {
        type: "image",
        url: DiamondPluseImage7,
      },
      {
        type: "image",
        url: DiamondPluseImage7,
      },
    ],
  },
  {
    id: 3040,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3040",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage8,
      },
      {
        type: "image",
        url: DiamondPluseImage8,
      },
      {
        type: "image",
        url: DiamondPluseImage8,
      },
    ],
  },
  {
    id: 3041,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3041",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage9,
      },
      {
        type: "image",
        url: DiamondPluseImage9,
      },
      {
        type: "image",
        url: DiamondPluseImage9,
      },
    ],
  },
  {
    id: 3042,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3042",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage10,
      },
      {
        type: "image",
        url: DiamondPluseImage10,
      },
      {
        type: "image",
        url: DiamondPluseImage10,
      },
    ],
  },
  {
    id: 3043,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3043",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage11,
      },
      {
        type: "image",
        url: DiamondPluseImage11,
      },
      {
        type: "image",
        url: DiamondPluseImage11,
      },
    ],
  },
  {
    id: 3044,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3044",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage12,
      },
      {
        type: "image",
        url: DiamondPluseImage12,
      },
      {
        type: "image",
        url: DiamondPluseImage12,
      },
    ],
  },
  {
    id: 3045,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3045",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage13,
      },
      {
        type: "image",
        url: DiamondPluseImage13,
      },
      {
        type: "image",
        url: DiamondPluseImage13,
      },
    ],
  },
  {
    id: 3046,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3046",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage14,
      },
      {
        type: "image",
        url: DiamondPluseImage14,
      },
      {
        type: "image",
        url: DiamondPluseImage14,
      },
    ],
  },
  {
    id: 3047,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3047",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage15,
      },
      {
        type: "image",
        url: DiamondPluseImage15,
      },
      {
        type: "image",
        url: DiamondPluseImage15,
      },
    ],
  },
  {
    id: 3048,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3048",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage16,
      },
      {
        type: "image",
        url: DiamondPluseImage16,
      },
      {
        type: "image",
        url: DiamondPluseImage16,
      },
    ],
  },
  {
    id: 3049,
    type: ProductType.Aatamaker,
    categoryId: 2005,
    category: "Diamond Plus",
    name: "Product 3049",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: DiamondPluseImage17,
      },
      {
        type: "image",
        url: DiamondPluseImage17,
      },
      {
        type: "image",
        url: DiamondPluseImage17,
      },
    ],
  },
  {
    id: 3050,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    category: "Regular",
    name: "Product 3050",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: RegularImage1,
      },
      {
        type: "image",
        url: RegularImage1,
      },
      {
        type: "image",
        url: RegularImage1,
      },
    ],
  },
  {
    id: 3051,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    category: "Regular",
    name: "Product 3051",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: RegularImage2,
      },
      {
        type: "image",
        url: RegularImage2,
      },
      {
        type: "image",
        url: RegularImage2,
      },
    ],
  },
  {
    id: 3052,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    category: "Regular",
    name: "Product 3052",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: RegularImage3,
      },
      {
        type: "image",
        url: RegularImage3,
      },
      {
        type: "image",
        url: RegularImage3,
      },
    ],
  },
  {
    id: 3053,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    category: "Regular",
    name: "Product 3053",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: RegularImage4,
      },
      {
        type: "image",
        url: RegularImage4,
      },
      {
        type: "image",
        url: RegularImage4,
      },
    ],
  },
  {
    id: 3054,
    type: ProductType.Aatamaker,
    categoryId: 2001,
    category: "Regular",
    name: "Product 3054",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: RegularImage5,
      },
      {
        type: "image",
        url: RegularImage5,
      },
      {
        type: "image",
        url: RegularImage5,
      },
    ],
  },
  {
    id: 3055,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3055",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage1,
      },
      {
        type: "image",
        url: PremiumImage1,
      },
      {
        type: "image",
        url: PremiumImage1,
      },
    ],
  },
  {
    id: 3056,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3056",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage2,
      },
      {
        type: "image",
        url: PremiumImage2,
      },
      {
        type: "image",
        url: PremiumImage2,
      },
    ],
  },
  {
    id: 3057,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3057",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage3,
      },
      {
        type: "image",
        url: PremiumImage3,
      },
      {
        type: "image",
        url: PremiumImage3,
      },
    ],
  },
  {
    id: 3058,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3058",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage4,
      },
      {
        type: "image",
        url: PremiumImage4,
      },
      {
        type: "image",
        url: PremiumImage4,
      },
    ],
  },
  {
    id: 3059,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3059",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage5,
      },
      {
        type: "image",
        url: PremiumImage5,
      },
      {
        type: "image",
        url: PremiumImage5,
      },
    ],
  },
  {
    id: 3060,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3060",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage6,
      },
      {
        type: "image",
        url: PremiumImage6,
      },
      {
        type: "image",
        url: PremiumImage6,
      },
    ],
  },
  {
    id: 3061,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3061",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage7,
      },
      {
        type: "image",
        url: PremiumImage7,
      },
      {
        type: "image",
        url: PremiumImage7,
      },
    ],
  },
  {
    id: 3062,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3062",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage8,
      },
      {
        type: "image",
        url: PremiumImage8,
      },
      {
        type: "image",
        url: PremiumImage8,
      },
    ],
  },
  {
    id: 3063,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3063",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage9,
      },
      {
        type: "image",
        url: PremiumImage9,
      },
      {
        type: "image",
        url: PremiumImage9,
      },
    ],
  },
  {
    id: 3064,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3064",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage10,
      },
      {
        type: "image",
        url: PremiumImage10,
      },
      {
        type: "image",
        url: PremiumImage10,
      },
    ],
  },
  {
    id: 3065,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3065",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage11,
      },
      {
        type: "image",
        url: PremiumImage11,
      },
      {
        type: "image",
        url: PremiumImage11,
      },
    ],
  },
  {
    id: 3066,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3066",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage12,
      },
      {
        type: "image",
        url: PremiumImage12,
      },
      {
        type: "image",
        url: PremiumImage12,
      },
    ],
  },
  {
    id: 3067,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3067",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage13,
      },
      {
        type: "image",
        url: PremiumImage13,
      },
      {
        type: "image",
        url: PremiumImage13,
      },
    ],
  },
  {
    id: 3068,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3068",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage14,
      },
      {
        type: "image",
        url: PremiumImage14,
      },
      {
        type: "image",
        url: PremiumImage14,
      },
    ],
  },
  {
    id: 3069,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3069",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage15,
      },
      {
        type: "image",
        url: PremiumImage15,
      },
      {
        type: "image",
        url: PremiumImage15,
      },
    ],
  },
  {
    id: 3070,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3070",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage16,
      },
      {
        type: "image",
        url: PremiumImage16,
      },
      {
        type: "image",
        url: PremiumImage16,
      },
    ],
  },
  {
    id: 3071,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3071",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage17,
      },
      {
        type: "image",
        url: PremiumImage17,
      },
      {
        type: "image",
        url: PremiumImage17,
      },
    ],
  },
  {
    id: 3072,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3072",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage18,
      },
      {
        type: "image",
        url: PremiumImage18,
      },
      {
        type: "image",
        url: PremiumImage18,
      },
    ],
  },
  {
    id: 3073,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3073",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage18,
      },
      {
        type: "image",
        url: PremiumImage18,
      },
      {
        type: "image",
        url: PremiumImage18,
      },
    ],
  },
  {
    id: 3074,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3074",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage19,
      },
      {
        type: "image",
        url: PremiumImage19,
      },
      {
        type: "image",
        url: PremiumImage19,
      },
    ],
  },
  {
    id: 3075,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3075",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage20,
      },
      {
        type: "image",
        url: PremiumImage20,
      },
      {
        type: "image",
        url: PremiumImage20,
      },
    ],
  },
  {
    id: 3076,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3076",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage21,
      },
      {
        type: "image",
        url: PremiumImage21,
      },
      {
        type: "image",
        url: PremiumImage21,
      },
    ],
  },
  {
    id: 3077,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3077",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage22,
      },
      {
        type: "image",
        url: PremiumImage22,
      },
      {
        type: "image",
        url: PremiumImage22,
      },
    ],
  },
  {
    id: 3078,
    type: ProductType.Aatamaker,
    categoryId: 2003,
    category: "Premium",
    name: "Product 3078",
    rank: 2,
    sellCount: 11,
    rating: 4.5,
    companyId: 1001,
    media: [
      {
        type: "image",
        url: PremiumImage23,
      },
      {
        type: "image",
        url: PremiumImage23,
      },
      {
        type: "image",
        url: PremiumImage23,
      },
    ],
  },
];
