const news = [
  {
    title: "Changed regular hours from Monday to Saturday to Monday to Friday",
    description: "Open 09:00 a.m. to 05:00 p.m.",
    newsType: "UPDATE",
    date: "2021/12/17",
    exp: "2021/12/25",
  },
  {
    title: "ETT-ARDUINO's new version",
    description:
      "Available in our shop now, its price is only $12 (Not include taxs).",
    newsType: "Shop",
    date: "2021/12/17",
    exp: "2021/12/25",
    product: {
      productName: "ARDUINO V.2",
      description: "Battery can last 7 hours.",
      productImage: "https://o.lnwfile.com/pag2f9.jpg",
      productUrl: "#",
    },
  },
  {
    title: "An annual sales",
    description:
      "Spend your money with our products over $100, You will given 15% discounts.",
    newsType: "Promotion",
    date: "2021/12/17",
    exp: "2021/12/25",
    adImage: "https://o.lnwfile.com/pag2f9.jpg",
  },
];

const partners = [
  {
    companyName: " บริษัท อีเล็คทรอนิคส์ซอร์ซ จำกัด",
    linkAdress: "https://www.es.co.th/index.asp",
    phone: ["02-623-8364-6"],
    fax: ["0 - 2225 - 6986"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "บริษัท สหรุ่งโรจน์ (ประเทศไทย) จำกัด",
    linkAdress: "",
    phone: ["02-225-7070-5"],
    fax: ["02-225-2979"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "หจก. ไทยอีเล็คทรอนิคส์ จำกัด",
    linkAdress: "",
    phone: ["02-222-7062"],
    fax: ["02-221-0595"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "ห้างหุ้นส่วนจำกัด พิสิฐกลการ ",
    linkAdress: "",
    phone: ["02-222-7463", "02-221-8674"],
    fax: ["02-224-8717"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "หจก.ส.จริยะพานิชย",
    linkAdress: "",
    phone: ["02-876-6031-2"],
    fax: ["02-876-6031"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "หจก.คล่องดี อีเล็คทรอนิคส์ ",
    linkAdress: "",
    phone: ["02-221-1421"],
    fax: ["02-222-5518"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "บริษัท ทิพย์เทคนิค (1992) จำกัด  ",
    linkAdress: "",
    phone: ["02-883-2808-9"],
    fax: [" 02-883-2810"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "บริษัท ณัฐพงษ์เซลส์แอนด์เซอร์วิส จำกัด (สำนักงานใหญ่)",
    linkAdress: "",
    phone: ["02-225-0094", "02-623-8899"],
    fax: [" 02-226-4020"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName:
      "บริษัท ณัฐพงษ์เซลส์แอนด์เซอร์วิส จำกัด (เซียร์ รังสิต ชั้น G)",
    linkAdress: "",
    phone: ["02-992-7379"],
    fax: ["02-992-7380"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "หจก. เอเชียสากล",
    linkAdress: "",
    phone: ["02-221-2500"],
    fax: ["02-225-6410"],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "บริษัท กราวิเทคไทย (ไทยแลนด์) จำกัด",
    linkAdress: "https://www.gravitechthai.com/",
    phone: ["02-115-3745", "088-886-3400"],
    fax: [""],
    country: "ไทย",
    province: "กรุงเทพ",
  },
  {
    companyName: "บริษัท กิตติอีเล็คทรอนิคส์ จำกัด",
    linkAdress: "",
    phone: ["05-322-1463"],
    fax: ["05-321-5221"],
    country: "ไทย",
    province: "เชียงใหม่",
  },
  {
    companyName: "ร้านไพศาลอีเล็คทรอนิคส์",
    linkAdress: "",
    phone: ["05-432-3911-911/922"],
    fax: ["05-432-3922"],
    country: "ไทย",
    province: "ลำปาง",
  },
  {
    companyName: "ร้านดาเทรดเซ็นเตอร์",
    linkAdress: "",
    phone: ["05-551-2271"],
    fax: ["05-551-2271"],
    country: "ไทย",
    province: "ตาก",
  },
  {
    companyName: "ร้าน 131 ทราฟฟิค คอนโทรล จำกัด",
    linkAdress: "",
    phone: ["07-622-1386"],
    fax: ["07-622-1387"],
    country: "ไทย",
    province: "ภูเก็ต",
  },
  {
    companyName: "ร้านคิงส์อีเล็คทรอนิคส์",
    linkAdress: "",
    phone: ["04-324-3848"],
    fax: ["04-323-9203"],
    country: "ไทย",
    province: "ขอนแก่น",
  },
  {
    companyName: "ร้านนวลแขอีเล็คทรอนิคส์",
    linkAdress: "",
    phone: ["04-451-3010"],
    fax: ["04-451-3010"],
    country: "ไทย",
    province: "สุรินทร์",
  },
  {
    companyName: "ร้าน เอวี อีเล็คทรอนิคส์",
    linkAdress: "",
    phone: ["03-451-2506"],
    fax: ["03-451-4834"],
    country: "ไทย",
    province: "กาญจนบุรี",
  },
  {
    companyName: "บริษัท เบสท์เทอร์โม จำกัด",
    linkAdress: "",
    phone: ["07-423-8775"],
    fax: ["07-442-8171"],
    country: "ไทย",
    province: "สงขลา",
  },
];

const products = [
  {
    title: "MODBUS DIN 32 INPUT PNP",
    code: "",
    avatar: "http://www.ett.co.th/productI2C_RS485/MODBUS_DIN32_INP/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 1090,
      availability: "Out of Stock",
      includedVat: true,
      updated_date: "",
    },
  },
  {
    title: "ET-BASE PI PICO",
    code: "",
    avatar: "http://www.ett.co.th/productPi/ET-BASE-PI-PICO/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 770,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "ET-I2C SW4/OUT4",
    code: "",
    avatar: "http://www.ett.co.th/prodintf/ET-I2C-SW4OUT4/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 290,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "MODBUS WIFI DIN",
    code: "",
    avatar: "http://www.ett.co.th/productI2C_RS485/MODBUS-WIFI-DIN/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 1290,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "BOX WATER PROOF158X90X65 mm",
    code: "",
    avatar: "http://www.ett.co.th/productDIN/BOX-WATER-PROOF-158X90X65mm/b1a.png",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 180,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "BBC MICRO:BIT SET A",
    code: "",
    avatar: "http://www.ett.co.th/prodUBit/microbitseta/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 640,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "ET-KIT BIG BOX",
    code: "",
    avatar: "http://www.ett.co.th/prodKitNLab/kitbox/et-big-box/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 2900,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
  {
    title: "ET-IR SENSOR KIT (BREAK-BEAM)",
    code: "",
    avatar: "http://www.ett.co.th/prodKitNLab/kitio/ET-IR-SENSOR-KIT-BREAK-BEAM/1a.jpg",
    isNew: true,
    images: [""],
    type: "",
    description: "",
    ps: "",
    features: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}]}],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    addition: [
      {
        title: "",
        description: [{ title: "", lists: [""], images: [{image: "", description: ""}] }],
        images: [
          {
            image: "",
            description: "",
          },
        ],
        links: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
    download: [
      {
        title: "",
        link: "",
        lists: [{title: "", link: ""}]
      },
    ],
    pricing: {
      price: 40,
      availability: "Out of Stock",
      includedVat: false,
      updated_date: "",
    },
  },
];

const articles = [
    {
        title: "",
        description: "",
        links: [
            {
                date: "",
                title: "",
                link: "",
                lists: [
                    {
                        title: "",
                        link: ""
                    }
                ]
            }
        ] 
    }
]

export { news, partners, products };
