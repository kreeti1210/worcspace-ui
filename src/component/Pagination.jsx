import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const PaginationBar = () => {
  return (
    <div className="fixed bottom-0 left-56 right-0 px-6 py-3 border-t bg-white text-sm flex justify-between">
      <span>6 rows</span>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 border-r pr-10   ">
          <span>Rows per page</span>
          <select className="bg-muted border border-border rounded px-2 py-1 text-xs text-foreground">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex flex-row gap-4">
          <span>page 1 of 1</span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-muted border">
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-muted border">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-muted border">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="p-1 rounded hover:bg-muted border">
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationBar;
