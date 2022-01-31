const db1 = [
  {
    title: "Hot meat",
    source: "Grandma",
    ingredients: "Red meat, salt, pepper, lemon, oregano",
    instuctions: "Fry for 10 minutes and flip over",
    category: "Steaks",
  },
]

const getAllRecipes = () => {
  db1("title")
}

module.exports = getAllRecipes
