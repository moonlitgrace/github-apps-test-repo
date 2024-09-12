import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index(props: any) {
  // Incorrect prop typing
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Moonlint Bot test repo</h1>
    </div>
  );
}

// Define an unused variable
const someUnusedVariable = "This should trigger a lint error.";
