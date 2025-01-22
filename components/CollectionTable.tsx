import Image from "next/image";
import { Collection } from "../types/Collection";

export const CollectionTable = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="bg-[#F0F0F5] p-4 w-[40vw]">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-50 py-2 px-4 font-semibold text-left">
        <div className="flex-1">Name</div>
        <div className="flex-1">Created</div>
        <div className="flex-1">Docs</div>
        <div className="w-12"></div> {/* Placeholder for the button */}
      </div>

      {/* Rows */}
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="flex justify-between items-center py-4 px-4 hover:bg-gray-100 cursor-pointer"
        >
          {/* Name with Icon */}
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 mr-4">
              <Image
                src={collection.icon}
                alt={collection.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold">{collection.name}</span>
          </div>

          {/* Created */}
          <div className="flex-1 text-left">{collection.created}</div>

          {/* Docs */}
          <div className="flex-1 text-left">{collection.docs}</div>

          {/* Action Button */}
          <div className="w-12 flex justify-center">
            <button className="bg-black text-white w-12 h-12 font-bold rounded-xl flex justify-center items-center">
              {">"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
