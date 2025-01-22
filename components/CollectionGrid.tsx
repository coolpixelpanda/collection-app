import Image from "next/image";
import { Collection } from "../types/Collection";

export const CollectionGrid = ({ collections }: { collections: Collection[] }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="flex flex-col items-center border border-gray-300 rounded-lg bg-[#F0F0F5] shadow hover:border-gray-400 cursor-pointer w-[20vw] py-8"
        >
          {/* Icon */}
          <div className="w-12 h-12 mb-2">
            <Image
              src={collection.icon}
              alt={collection.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">{collection.name}</h3>
            <p className="text-sm text-gray-500">{collection.created}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
