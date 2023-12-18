export interface Products {
    _id: string;
    description: string;
    title: string;
    price: number;
    ratingsAverage: number;
    imageCover: string;
    category: category;
}

interface category {
    name: string;
    image: string;
    slug: string;
    _id: string;
} 