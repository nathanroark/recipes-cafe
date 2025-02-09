import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ingredientColors } from "@/lib/recipes";

type Ingredient = {
  name: string;
  parts: number;
};

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

  // Glass dimensions
  const glassHeight = 240;
  const glassBottomWidth = 80;
  const glassTopWidth = 120;
  const glassCenterX = 100;
  const glassBottom = 280;

  const ingredientsWithColors = ingredients.map((ingredient) => ({
    ...ingredient,
    color: ingredientColors[ingredient.name.toLowerCase()],
  }));

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="space-y-2">
            {ingredientsWithColors.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2 border border-gray-300"
                  style={{ backgroundColor: ingredient.color }}
                ></span>
                <span>
                  {ingredient.name}
                  {/* ({ingredient.parts}{" "} */}
                  {/* {ingredient.parts === 1 ? "part" : "parts"}) */}
                </span>
                {/* <svg className="ml-auto" width="50" height="2"> */}
                {/*   <line */}
                {/*     x1="0" */}
                {/*     y1="1" */}
                {/*     x2="50" */}
                {/*     y2="1" */}
                {/*     stroke={ingredient.color} */}
                {/*     strokeWidth="2" */}
                {/*   /> */}
                {/* </svg> */}
              </li>
            ))}
          </ul>
        </div>
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
                  d={`M${glassCenterX - glassTopWidth / 2} ${glassBottom - glassHeight}
       L${glassCenterX + glassTopWidth / 2} ${glassBottom - glassHeight}
       L${glassCenterX + glassBottomWidth / 2} ${glassBottom}
       L${glassCenterX - glassBottomWidth / 2} ${glassBottom}
       Z`}
                  stroke="none" // Prevents unwanted strokes
                />
              </clipPath>
              {/* <clipPath id="glassShape"> */}
              {/*   <path */}
              {/*     d={`M${glassCenterX - glassTopWidth / 2} ${glassBottom - glassHeight} */}
              {/*        L${glassCenterX + glassTopWidth / 2} ${glassBottom - glassHeight} */}
              {/*        L${glassCenterX + glassBottomWidth / 2} ${glassBottom} */}
              {/*        L${glassCenterX - glassBottomWidth / 2} ${glassBottom} */}
              {/*        Z`} */}
              {/*   /> */}
              {/* </clipPath> */}
            </defs>
            {/* Glass Outline Without Top */}
            <path
              d={`M${glassCenterX - glassTopWidth / 2} ${glassBottom - glassHeight}
      L${glassCenterX - glassBottomWidth / 2} ${glassBottom}
      L${glassCenterX + glassBottomWidth / 2} ${glassBottom}
      L${glassCenterX + glassTopWidth / 2} ${glassBottom - glassHeight}`}
              fill="none"
              stroke="#cccccc"
              strokeWidth="4"
            />

            {/* Ingredients */}
            <g clipPath="url(#glassShape)">
              {
                ingredients.reduce(
                  (acc, ingredient, index) => {
                    const previousHeight = acc.height;
                    const height =
                      (ingredient.parts / totalParts) * glassHeight;
                    acc.height += height;
                    const topWidth =
                      glassBottomWidth +
                      (glassTopWidth - glassBottomWidth) *
                        (acc.height / glassHeight);
                    const previousTopWidth =
                      glassBottomWidth +
                      (glassTopWidth - glassBottomWidth) *
                        (previousHeight / glassHeight);

                    return {
                      height: acc.height,
                      element: (
                        <>
                          {acc.element}
                          <path
                            key={index}
                            d={`M${glassCenterX - previousTopWidth / 2} ${glassBottom - previousHeight}
                              L${glassCenterX - topWidth / 2} ${glassBottom - acc.height}
                              L${glassCenterX + topWidth / 2} ${glassBottom - acc.height}
                              L${glassCenterX + previousTopWidth / 2} ${glassBottom - previousHeight}
                              Z`}
                            fill={
                              ingredientColors[ingredient.name.toLowerCase()]
                            }
                          />
                        </>
                      ),
                    };
                  },
                  { height: 0, element: <></> },
                ).element
              }
            </g>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
