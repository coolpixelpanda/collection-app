import { GetStaticPaths, GetStaticProps } from "next";

interface PageProps {
  view: string; // Expecting the `view` parameter directly
}

export default function ViewPage({ view }: PageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Current View: {view}</h1>
      <p className="text-gray-600">
        This page dynamically renders content based on the view: Grid, List, or Table.
      </p>
    </div>
  );
}

// Generate static paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { view: "Grid" } },
      { params: { view: "List" } },
      { params: { view: "Table" } },
    ],
    fallback: false, // Only these paths will be available
  };
};

// Fetch the data for the page based on the `view` parameter
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { view } = context.params as { view: string };

  // Validate or handle invalid views
  if (!["Grid", "List", "Table"].includes(view)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      view, // Pass `view` as a prop to the page
    },
  };
};
