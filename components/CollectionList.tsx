import Image from "next/image";
import { Collection } from "../types/Collection";

export const CollectionList = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="space-y-4">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="flex items-center p-4 bg-[#F0F0F5] h-28 w-[40vw] border border-gray-300 rounded-lg shadow hover:border-gray-400 cursor-pointer"
        >
          {/* Icon */}
          <div className="w-10 h-10 mr-4">
            <Image
              src={collection.icon}
              alt={collection.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold">{collection.name}</h3>
            <p className="text-sm text-gray-500">{collection.created}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
