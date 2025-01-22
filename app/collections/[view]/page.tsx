import { notFound } from "next/navigation";
import { collections } from "../../../data/collections";
import { CollectionGrid } from "../../../components/CollectionGrid";
import { CollectionList } from "../../../components/CollectionList";
import { CollectionTable } from "../../../components/CollectionTable";

interface Params {
  view: string;
}

const CollectionView = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params; // Resolve the params Promise
  const { view } = resolvedParams;

  if (view === "grid") return <CollectionGrid collections={collections} />;
  if (view === "list") return <CollectionList collections={collections} />;
  if (view === "table") return <CollectionTable collections={collections} />;

  return notFound();
};

export default CollectionView;
