import { BellIcon, ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-6 py-3 bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-950 text-white">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center text-xs font-bold">
            W
          </div>
          <span className="font-semibold text-sm">Worcspace</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 hover:bg-white/20 transition px-3 py-1 rounded-full text-xs">
          Workspace 1
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
          <input
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-full bg-white/10 text-sm text-white placeholder:text-white/60 outline-none focus:bg-white/20"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-semibold">
          GK
        </div>
      </div>
    </div>
  );
};

export default Header;
