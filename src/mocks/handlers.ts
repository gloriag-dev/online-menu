import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/dishes", async () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "Grilled Marinated",
        description: "so yummy!!",
        categories: ["lunches", "dinner"],
        price: "25.99",
        rating: 5,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-1.jpg",
      },
      {
        id: "2",
        name: "Fried Egg",
        category: ["lunches", "dinner"],
        description: "so yummy!!",
        price: "12.99",
        rating: 4,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-2.jpg",
      },
      {
        id: "3",
        name: "Sardine Spaghetti",
        description: "so yummy!!",
        category: ["lunches", "dinner"],
        price: "23.99",
        rating: 5,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-3.jpg",
      },
      {
        id: "4",
        name: "Ice Waffle",
        description: "so yummy!!",
        category: ["breakfast", "desserts"],
        price: "6.99",
        rating: 4,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-4.jpg",
      },
      {
        id: "5",
        name: "Egg Omelet",
        description: "so yummy!!",
        category: ["breakfast"],
        price: "10.99",
        rating: 5,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-5.jpg",
      },
      {
        id: "6",
        name: "Gourmet Meal",
        description: "so yummy!!",
        category: ["breakfast"],
        price: "17.99",
        rating: 5,
        imgUrl:
          "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-6.jpg",
      },
    ]);
  }),
];
