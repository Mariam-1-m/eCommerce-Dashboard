// Only Mazen can edit this file
import React from "react";
import { Search, UserPlus, ChevronDown } from "lucide-react";
function UsersHeader() {
  return (
    <div className="rounded-2xl bg-[#0A1224] max-w-3xl md:mx-auto mt-2 p-5 mx-3">
      <p className="uppercase tracking-widest font-light text-sm text-cyan-400 ">
        User Management
      </p>
      <h3 className="text-2xl font-semibold py-1">Manage Users</h3>

      <div className="flex items-center gap-2">
        <div className="bg-gray-800 relative w-full rounded-xl">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-8.5 placeholder:text-slate-400 border border-gray-800 rounded-xl outline-none focus:border-cyan-600 w-full p-2.5"
          />
          <div className="absolute -translate-y-1/2 top-1/2 left-3">
            <Search className="text-gray-400" size={18} />
          </div>
        </div>

        <button className="bg-cyan-500 rounded-2xl p-3 flex items-center gap-4">
          <UserPlus size={18} />
          <div className="flex flex-col">
            <p>Add</p>
            <p>User</p>
          </div>
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}

export default UsersHeader;
