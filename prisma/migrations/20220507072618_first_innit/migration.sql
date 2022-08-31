-- CreateTable
CREATE TABLE "Foodlog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Mealtype" TEXT NOT NULL,
    "Calories" INTEGER NOT NULL,
    "Protein" INTEGER NOT NULL,
    "Carbohydrates" INTEGER NOT NULL,
    "Fat" INTEGER NOT NULL,
    "slug" TEXT NOT NULL
);
