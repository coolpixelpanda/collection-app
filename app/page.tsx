"use client";

import { useState } from "react";
import { CollectionGrid } from "../components/CollectionGrid";
import { CollectionList } from "../components/CollectionList";
import { CollectionTable } from "../components/CollectionTable";
import { collections } from "../data/collections";

export default function CollectionsPage() {
  const [view, setView] = useState("Grid"); // Default to Grid Mode

  // Function to get the correct SVG path based on the view
  const getSvgIcon = () => {
    switch (view) {
      case "List":
        return "/collection_svgs/list.svg";
      case "Grid":
        return "/collection_svgs/grid.svg";
      case "Table":
        return "/collection_svgs/list.svg";
      default:
        return "/collection_svgs/grid.svg";
    }
  };

  return (
    <div className="flex flex-col mx-[30vw] min-h-screen w-[40vw] pt-8">
      <div className="flex flex-row items-center mb-6">
        <span className="font-bold text-2xl mx-20">9:41</span>
        <div className="bg-black w-60 h-16 rounded-full mx-20"></div>
        <img src="/collection_svgs/nwb.svg" alt="nwb" width={150} height={60}></img>
      </div>
      <div className="flex w-[40vw] mb-6">
        <div className="flex flex-col w-[70%]">
          <h1 className="text-2xl font-bold">Collections</h1>
          <p className="text-gray-500">
            Combined documents that have a similar subject matter. Collections consist of one or more documents.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mb-6">
        <div className="pl-4 w-12 h-8">
          <img src={getSvgIcon()} alt={view.toLowerCase()} />
        </div>

        <select
          className="rounded-md"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value="List">List</option>
          <option value="Grid">Grid</option>
          <option value="Table">Table</option>
        </select>

        <div className="w-[25vw]"></div>

        <button className="bg-black text-white text-sm px-4 py-2 rounded-md shadow hover:bg-gray-900 w-[10vw]">
          + New Collection
        </button>
      </div>

      {view === "Grid" && <CollectionGrid collections={collections} />}
      {view === "List" && <CollectionList collections={collections} />}
      {view === "Table" && <CollectionTable collections={collections} />}
    </div>
  );
}
