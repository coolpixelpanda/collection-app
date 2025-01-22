import { notFound } from "next/navigation";
import { collections } from "../../../data/collections";
import { CollectionGrid } from "../../../components/CollectionGrid";
import { CollectionList } from "../../../components/CollectionList";
import { CollectionTable } from "../../../components/CollectionTable";

interface Params {
  view: "grid" | "list" | "table"; // Limit the view to these string literals
}

interface CollectionViewProps {
  params: Params; // Add the Params type here
}

const CollectionView: React.FC<CollectionViewProps> = ({ params }) => {
  const { view } = params;

  if (view === "grid") return <CollectionGrid collections={collections} />;
  if (view === "list") return <CollectionList collections={collections} />;
  if (view === "table") return <CollectionTable collections={collections} />;
  return notFound(); // Return 404 for invalid views
};

export default CollectionView;
