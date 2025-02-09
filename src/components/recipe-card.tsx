import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IngredientsSvg from "./ingredients-svg";
// import IngredientsList from "./ingredients-list";
import { ingredientColors } from "@/lib/recipes";

// Type Definitions
type Ingredient = {
  name: string;
  parts: number;
};

type IngredientWithColor = Ingredient & { color: string };

type CoffeeRecipeCardProps = {
  name?: string;
  ingredients?: Ingredient[];
};

export default function CoffeeRecipeCard({
  name = "Coffee",
  ingredients = [],
}: CoffeeRecipeCardProps) {
  const totalParts = ingredients.reduce(
    (sum, ingredient) => sum + ingredient.parts,
    0,
  );

  if (ingredients.length === 0) {
    return <NoRecipeCard />;
  }

  const glass = {
    height: 240,
    bottomWidth: 80,
    topWidth: 120,
    centerX: 100,
    bottom: 280,
  };

  const ingredientsWithColors: IngredientWithColor[] = ingredients.map(
    (ingredient) => ({
      ...ingredient,
      color: ingredientColors[ingredient.name.toLowerCase()],
    }),
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-8">
        <IngredientsList ingredients={ingredientsWithColors} />
        <GlassVisualization
          ingredients={ingredientsWithColors}
          totalParts={totalParts}
          glass={glass}
        />
      </CardContent>
    </Card>
  );
}

function NoRecipeCard() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          No Recipe Available
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">
          Sorry, no ingredients are available for this recipe.
        </p>
      </CardContent>
    </Card>
  );
}

function GlassVisualization({
  ingredients,
  totalParts,
  glass,
}: {
  ingredients: IngredientWithColor[];
  totalParts: number;
  glass: {
    height: number;
    bottomWidth: number;
    topWidth: number;
    centerX: number;
    bottom: number;
  };
}) {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        className="max-w-full h-auto"
      >
        <defs>
          <clipPath id="glassShape">
            <path
              d={`M${glass.centerX - glass.topWidth / 2} ${glass.bottom - glass.height}
           L${glass.centerX + glass.topWidth / 2} ${glass.bottom - glass.height}
           L${glass.centerX + glass.bottomWidth / 2} ${glass.bottom}
           L${glass.centerX - glass.bottomWidth / 2} ${glass.bottom}
           Z`}
            />
          </clipPath>
        </defs>

        <path
          d={`M${glass.centerX - glass.topWidth / 2} ${glass.bottom - glass.height}
          L${glass.centerX - glass.bottomWidth / 2} ${glass.bottom}
          L${glass.centerX + glass.bottomWidth / 2} ${glass.bottom}
          L${glass.centerX + glass.topWidth / 2} ${glass.bottom - glass.height}`}
          fill="none"
          stroke="#cccccc"
          strokeWidth="6"
        />
        <IngredientsSvg
          ingredients={ingredients}
          separateIngredients={true}
          totalParts={totalParts}
          glass={glass}
        />
      </svg>
    </div>
  );
}

function IngredientsList({
  ingredients,
}: {
  ingredients: IngredientWithColor[];
}) {
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center">
            <span
              className="w-4 h-4 rounded-full mr-2 border border-gray-300"
              style={{ backgroundColor: ingredient.color }}
            ></span>
            <span>{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
