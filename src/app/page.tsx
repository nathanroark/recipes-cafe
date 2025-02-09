import CoffeeRecipeCard from "@/components/recipe-card";
import { Heart } from "lucide-react";
import { recipes } from "@/lib/recipes";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <CoffeeRecipeCard key={index} {...recipe} />
          ))}
        </div>
      </main>
      <footer className="flex items-center justify-center py-10 min-h-24">
        <a className="flex items-center gap-2 opacity-60">
          <span>Made with </span>
          <Heart className="text-red-500" />
          <span> by Nathan Roark</span>
        </a>
      </footer>
    </div>
  );
}
