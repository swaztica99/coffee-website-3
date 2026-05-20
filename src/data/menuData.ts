// src/data/menuData.ts
export interface MenuItem {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    category: 'coffee' | 'non-coffee' | 'food';
}

export const allMenus: MenuItem[] = [
    {
        id: 1,
        name: "Caramel Coffee",
        price: "Rp 35.000",
        description: "Espresso premium dengan sirup caramel gurih dan susu segar, disajikan dengan topping saus caramel.",
        image: "/capuccino-classic.jpg",
        category: 'coffee'
    },
    {
        id: 2,
        name: "Cloudy Latte",
        price: "Rp 38.000",
        description: "Latte lembut dengan sentuhan rasa vanilla dan foam biru alami yang memberikan sensasi menenangkan.",
        image: "/latte-2.png",
        category: 'coffee'
    },
    {
        id: 3,
        name: "Möménto Signature",
        price: "Rp 42.000",
        description: "Racikan rahasia Möménto dengan campuran biji kopi arabika pilihan dan cream khusus.",
        image: "/caramel.jpg",
        category: 'coffee'
    },
    {
        id: 4,
        name: "Möménto Americano",
        price: "Rp 20.000",
        description: "Racikan rahasia Möménto dengan campuran biji kopi Americano pilihan.",
        image: "/americano-2.png",
        category: 'coffee'
    },
    {
        id: 5,
        name: "Möménto Matcha Latte",
        price: "Rp 30.000",
        description: "Racikan rahasia Möménto dengan campuran Matcha dan Latte.",
        image: "/matcha-zen.jpg",
        category: 'non-coffee'
    },
    {
        id: 6,
        name: "Möménto Chocolate Lava",
        price: "Rp 25.000",
        description: "Racikan rahasia Möménto dengan Chocolate pilihan.",
        image: "/choco-lava.jpg",
        category: 'non-coffee'
    },
    {
        id: 7,
        name: "Croissant Almond",
        price: "Rp 23.000",
        description: "Croissant chocolate lembut dengan toping kacang almond renyah dan taburan gula halus.",
        image: "/croissant.jpg",
        category: 'food'
    },
    {
        id: 8,
        name: "Möménto Pasta",
        price: "Rp 25.000",
        description: "Racikan rahasia Möménto Pasta dengan bumbu khas Italia.",
        image: "/pasta.jpg",
        category: 'food'
    },
    {
        id: 9,
        name: "Möménto Mix",
        price: "Rp 45.000",
        description: "Möménto Mix dengan fried fries, baked sousage, onion fried, dan chicken wings.",
        image: "/kopikita-platter.jpg",
        category: 'food'
    },
    {
        id: 10,
        name: "Strawberry Danish",
        price: "Rp 20.000",
        description: "Möménto Strawberry Danish dengan balutan adonan lembut dengan strawberry manis di atasnya dan taburan gula halus.",
        image: "/stroberidanish.jpg",
        category: 'food'
    },
    {
        id: 11,
        name: "Möménto Cinnamon Roll",
        price: "Rp 21.000",
        description: "Möménto Cinnamon Roll dengan adonan lembut dan saus vanilla yang lumer.",
        image: "/cinammonroll.jpg",
        category: 'food'
    },
    {
        id: 12,
        name: "Croissant Butter",
        price: "Rp 20.000",
        description: "Croissant Butter yang lembut dengan rasa butter yang gurih.",
        image: "/buttercroissant.jpg",
        category: 'food'
    },
    // Tambahkan menu lainnya di sini...
];