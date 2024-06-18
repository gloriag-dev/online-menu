import { HttpResponse, delay, http } from "msw"

export const handlers = [
    http.get("/districts", async () => {
        return Response.json([
            { district: "Bologna", code: "BO" },
            { district: "Firenze", code: "FI" },
            { district: "Genova", code: "GE" },
            { district: "Milano", code: "MI" },
            { district: "Napoli", code: "NA" },
            { district: "Padova", code: "PD" },
            { district: "Palermo", code: "PA" },
            { district: "Perugia", code: "PG" },
            { district: "Pescara", code: "PE" },
            { district: "Pordenone", code: "PN" },
            { district: "Roma", code: "RM" },
            { district: "Torino", code: "TO" },
            { district: "Trento", code: "TN" },
            { district: "Trieste", code: "TS" },
            { district: "Udine", code: "UD" },
            { district: "Venezia", code: "VE" }
        ])
    }),

    http.post("/address", async () => {
        return Response.json({})
    }),
    http.get("/dishes", async ({ request }) => {
        delay(7000)
        let dishes = [
            {
                id: 1,
                name: "Grilled Marinated chicken",
                description: "Succulent chicken marinated in a blend of herbs and spices, expertly grilled to perfection, offering a juicy and aromatic dish that is sure to satisfy your cravings.",
                categories: ["lunches", "dinners"],
                price: 25.99,
                rating: 1,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-1.jpg"
            },
            {
                id: 2,
                name: "Fried Egg",
                category: ["fastfoods"],
                description: "A classic breakfast staple, a fried egg cooked to golden perfection, with a runny yolk that adds a rich and satisfying touch to any meal.",
                price: 12.99,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-2.jpg"
            },
            {
                id: 3,
                name: "Sardine Spaghetti",
                description: "Indulge in a flavorful fusion of tender spaghetti noodles tossed in a savory sardine-infused sauce, creating a seafood delight that will tantalize your taste buds.",
                category: ["lunches", "dinners"],
                price: 23.99,
                rating: 3,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-3.jpg"
            },
            {
                id: 4,
                name: "Ice Waffle",
                description:
                    "A delightful treat of crispy, golden waffles served chilled, topped with a scoop of creamy ice cream and drizzled with decadent syrups, creating a refreshing and indulgent dessert.",
                category: ["breakfasts", "desserts"],
                price: 6.99,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-4.jpg"
            },
            {
                id: 5,
                name: "Egg Omelet",
                description: "Fluffy eggs folded over a medley of fillings such as cheese, vegetables, and meats, creating a versatile and satisfying dish perfect for any time of day.",
                category: ["breakfasts"],
                price: 10.99,
                rating: 5,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-5.jpg"
            },
            {
                id: 6,
                name: "Gourmet Meal",
                description:
                    "Elevate your dining experience with a gourmet meal crafted with the finest ingredients and culinary expertise, offering a symphony of flavors and textures that will delight your senses and leave you craving more.",
                category: ["breakfasts"],
                price: 17.99,
                rating: 5,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-6.jpg"
            },
            {
                id: 7,
                name: "Vegetable Burger",
                description: "Savor the flavors of our carefully selected vegetables and meet your taste buds with a hearty, succulent burger, perfect for any occasion.",
                category: ["lunches", "dinners"],
                price: 21.6,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-7.jpg"
            },
            {
                id: 8,
                name: "Bone Steak",
                description: "Tender and juicy bone-steak marinated in a blend of aromatic herbs and spices, expertly cooked to perfection.",
                category: ["lunches", "dinners"],
                price: 31.5,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-8.jpg"
            },
            {
                id: 9,
                name: "Cream Sauce",
                description: "Creamy and delicious cream sauce, perfect for dipping into any dish.",
                category: ["lunches", "dinners", "fastfoods"],
                price: 5.78,
                rating: 5,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-9.jpg"
            },
            {
                id: 10,
                name: "Aloo Gobi",
                description: "Aloo Gobi is a classic North Indian vegetarian dish made with potatoes and cauliflower. It is well-loved for its simple yet rich taste and comforting texture.",
                category: ["breakfasts", "lunches", "dinners"],
                price: 13.67,
                rating: 4,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-10.jpg"
            },
            {
                id: 11,
                name: "Noodles",
                description: "Taste our traditional Chinese noodles, originating from Hunan Province in China. They are rich in protein and healthy in taste.",
                category: ["lunches", "dinners"],
                price: 9.21,
                rating: 3,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-11.jpg"
            },
            {
                id: 12,
                name: "Delicious Dosas",
                description: "Our Dosas are made with only the freshest ingredients, sourced from locally sourced and organic farms. ",
                category: ["breakfasts", "fastfoods"],
                price: 11.89,
                rating: 2,
                imgUrl: "https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-12.jpg"
            }
        ]

        // Filter by category
        const url = new URL(request.url)

        const categoryId = url.searchParams.get("categoryId")
        if (categoryId) {
            dishes = dishes.filter(singleDish => singleDish.category?.includes(categoryId))
        }

        return HttpResponse.json({
            dishes: dishes,
            selected: categoryId
        })
    })
]
