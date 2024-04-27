import { HttpResponse, delay, http } from "msw"

export const handlers = [
    http.get("/province", async () => {
        return Response.json([
            {
                province: "Rome",
                code: "RM"
            }
        ])
    }),

    http.post("/address", async () => {
        return Response.json({})
    }),
    http.get("/dishes", async ({ request }) => {
        delay(2000)
        let dishes = [
            {
                id: 1,
                name: "Grilled Marinated",
                description: "so yummy!!",
                categories: ["lunches", "dinners"],
                price: 25.99,
                rating: 1,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-1.jpg"
            },
            {
                id: 2,
                name: "Fried Egg",
                category: ["lunches", "dinners"],
                description: "so yummy!!",
                price: 12.99,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-2.jpg"
            },
            {
                id: 3,
                name: "Sardine Spaghetti",
                description: "so yummy!!",
                category: ["lunches", "dinners"],
                price: 23.99,
                rating: 3,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-3.jpg"
            },
            {
                id: 4,
                name: "Ice Waffle",
                description: "so yummy!!",
                category: ["breakfasts", "desserts"],
                price: 6.99,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-4.jpg"
            },
            {
                id: 5,
                name: "Egg Omelet",
                description: "so yummy!!",
                category: ["breakfasts"],
                price: 10.99,
                rating: 5,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-5.jpg"
            },
            {
                id: 6,
                name: "Gourmet Meal",
                description: "so yummy!!",
                category: ["breakfasts"],
                price: 17.99,
                rating: 5,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-6.jpg"
            }
        ]

        // Filter by category
        const url = new URL(request.url)
        const categoryId = url.searchParams.get("categoryId")
        if (categoryId) {
            dishes = dishes.filter(singleDish => singleDish.category?.includes(categoryId))
        }

        return HttpResponse.json({
            dishes: dishes
        })
    })
]
