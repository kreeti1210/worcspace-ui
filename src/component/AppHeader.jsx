import { Search } from "lucide-react";

const AppHeader = ({ onCreateNew }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold">Knowledge Base</h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            placeholder="Search..."
            className="pl-9 w-56 h-9 bg-gray-100 rounded-md text-sm outline-none px-2"
          />
        </div>
        <button
          onClick={onCreateNew}
          className="h-9 bg-indigo-600 text-white px-4 rounded-md text-sm font-medium hover:bg-indigo-500"
        >
          + Create New
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
