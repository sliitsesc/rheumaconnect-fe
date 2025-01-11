import fs from "fs/promises";
import path from "path";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;

  // Correct path to the categories.json file
  const filePath = path.join(process.cwd(), "src", "data", "categories.json");

  try {
    // Read and parse the JSON file
    const fileData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(fileData);

    // Access the `category` array inside the parsed JSON
    const categories = parsedData.category;

    // Log the parsed data for debugging
    console.log("Categories Data:", categories);

    // Validate that categories is an array
    if (!Array.isArray(categories)) {
      throw new Error("Parsed 'category' is not an array");
    }

    // Find the category with the matching slug
    const category = categories.find((cat) => cat.slug === categorySlug);

    // Handle the case where no matching slug is found
    if (!category) {
      return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-white text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl">
            The category you are looking for does not exist.
          </p> */}
        </section>
      );
    }

    // Return the title and description
    return (
      <section className="flex flex-col items-center justify-center h-[400px] bg-gradient-to-b from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {category.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {category.description}
        </p>
      </section>
    );
  } catch (error) {
    // Handle errors (e.g., file not found, invalid JSON)
    console.error("Error reading or parsing categories.json:", error);
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Error Loading Category Data
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          There was an error while loading the category data. Please try again
          later.
        </p>
      </section>
    );
  }
}
