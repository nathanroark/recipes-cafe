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

  const ingredientsWithColors = ingredients.map((ingredient) => ({
    ...ingredient,
    color: ingredientColors[ingredient.name.toLowerCase()],
  }));

  return (
    <g clipPath="url(#glassShape)">
      {
        ingredientsWithColors.reduce(
          (acc, ingredient, index) => {
            const previousHeight = acc.height;
            const height = (ingredient.parts / totalParts) * glass.height;
            acc.height += height;

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
                      y1={glass.bottom - previousHeight}
                      x2={glass.centerX + topWidth / 2}
                      y2={glass.bottom - previousHeight}
                      stroke="rgba(0, 0, 0, 0.3)" // Light gray/black line
                      strokeWidth="2"
                    />
                  )}

                  {/* Ingredient Layer */}
                  <path
                    key={index}
                    d={`M${glass.centerX - previousTopWidth / 2} ${glass.bottom - previousHeight}
                  L${glass.centerX - topWidth / 2} ${glass.bottom - acc.height}
                  L${glass.centerX + topWidth / 2} ${glass.bottom - acc.height}
                  L${glass.centerX + previousTopWidth / 2} ${glass.bottom - previousHeight}
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
