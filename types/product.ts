export type ProductSize = "Small" | "Medium" | "Large";

export type ProductCategory = "Biryani" | "Pizza" | "Burger" | "Sandwich";

export type FoodItem = {
  id: string;
  name: string;
  cardTitle: string;
  detailHeading: string;
  category: ProductCategory;
  image: string;
  detailImage: string;
  rating: number;
  reviewCount: number;
  distance: string;
  time: string;
  price: number;
  calories: string;
  diameter: string;
  description: string;
  defaultSize: ProductSize;
  sizes: ProductSize[];
  cardImageClassName: string;
  detailImageClassName: string;
  detailContainerClassName: string;
  detailRoundedClassName?: string;
};

export type Product = FoodItem;
