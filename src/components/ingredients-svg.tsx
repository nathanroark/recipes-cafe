import { ingredientColors } from "@/lib/recipes";

type Props = {
  ingredients: { name: string; parts: number }[];
  separateIngredients: boolean;
  totalParts: number;
  glass: {
    height: number;
    bottomWidth: number;
    topWidth: number;
    centerX: number;
    bottom: number;
  };
};

export default function IngredientsSvg({
  ingredients,
  separateIngredients,
  totalParts,
  glass,
}: Props) {
  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  const ingredientsWithColors = ingredients
    .map((ingredient) => ({
      ...ingredient,
      color: ingredientColors[ingredient.name.toLowerCase()],
    }))
    .reverse();

  const padding = 10; // Adjust this value to increase/decrease separation

  return (
    <g
      clipPath="url(#glassShape)"
      transform="scale(0.80, 0.90) translate(25, 25)"
    >
      {
        ingredientsWithColors.reduce(
          (acc, ingredient, index) => {
            const previousHeight = acc.height;
            const height =
              (ingredient.parts / totalParts) * glass.height - padding; // Apply padding
            acc.height += height + padding; // Add padding between layers

            const topWidth =
              glass.bottomWidth +
              (glass.topWidth - glass.bottomWidth) *
                (acc.height / glass.height);
            const previousTopWidth =
              glass.bottomWidth +
              (glass.topWidth - glass.bottomWidth) *
                (previousHeight / glass.height);

            return {
              height: acc.height,
              element: (
                <>
                  {acc.element}

                  {/* Separator Line (except for the first ingredient) */}
                  {separateIngredients && index > 0 && (
                    <line
                      x1={glass.centerX - topWidth / 2}
                      y1={glass.bottom - previousHeight - padding / 2} // Adjust for padding
                      x2={glass.centerX + topWidth / 2}
                      y2={glass.bottom - previousHeight - padding / 2} // Adjust for padding
                      stroke="rgba(0, 0, 0, 0.3)"
                      strokeWidth="4"
                    />
                  )}

                  {/* Ingredient Layer */}
                  <path
                    key={index}
                    d={`M${glass.centerX - previousTopWidth / 2} ${glass.bottom - previousHeight - padding}
              L${glass.centerX - topWidth / 2} ${glass.bottom - acc.height}
              L${glass.centerX + topWidth / 2} ${glass.bottom - acc.height}
              L${glass.centerX + previousTopWidth / 2} ${glass.bottom - previousHeight - padding}
              Z`}
                    fill={ingredient.color}
                  />
                </>
              ),
            };
          },
          { height: 0, element: <></> },
        ).element
      }
    </g>
  );
}
