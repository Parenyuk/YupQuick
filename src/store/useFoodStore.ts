import { create } from 'zustand';

type FoodCategory = 'Meal' | 'Dessert' | 'Vegan' | 'Drinks' | 'Snacks';

type FoodState = {
    activeCategory: FoodCategory;
    setActiveCategory: (category: FoodCategory) => void;
};

export const useFoodStore = create<FoodState>((set) => ({
    activeCategory: 'Snacks',
    setActiveCategory: (category) => set({ activeCategory: category }),
}));

export type { FoodCategory };
