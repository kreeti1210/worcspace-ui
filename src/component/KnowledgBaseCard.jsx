import { MoreVertical } from "lucide-react";

const KnowledgeBaseCard = ({ title, description, createdOn }) => {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col gap-16 hover:shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between ">
          <h3 className="font-semibold text-sm">{title}</h3>
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      <p className="text-xs text-gray-700 border-t py-2 mt-auto">
        Created On: {createdOn}
      </p>
    </div>
  );
};

export default KnowledgeBaseCard;
