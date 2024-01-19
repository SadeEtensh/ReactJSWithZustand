import { create } from "zustand";

interface IBook {
  amount: number;
  author: string;
  name: string;
}

export const useBookStore = create<IBook>(() => ({
  amount: 40,
  author: "Sade Sh. Garmamo",
  name: "Hi There React Devs",
}));
