// Only Mazen can edit this file
import { useMemo, useState } from "react";
import { Search, UserPlus, ChevronDown } from "lucide-react";
import CreateUser from "./createUser.jsx";

function UsersHeader({setSearch}) {

  const [clicked, setClicked] = useState(false)

  return (
    <>
    <div className="rounded-2xl bg-white/90 dark:bg-slate-900/60  mt-2 p-5 mx-7 flex flex-col md:flex-row items-stretch md:items-center justify-between">
    <div>
      <p className="uppercase tracking-[4px] text-sm text-cyan-400 ">
        User Management
      </p>
      <h3 className="text-3xl font-bold py-1">Manage Users</h3>
    </div>
      
      <div>
      <div className="flex items-center gap-2">
        <div className="dark:bg-gray-800 bg-slate-50 relative w-full rounded-xl lg:w-80">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="pl-8.5 placeholder:text-slate-400 border border-slate-200 dark:border-slate-700 focus:ring-2 rounded-xl outline-none focus:ring-cyan-500 w-full p-2.5"
          />
          <div className="absolute -translate-y-1/2 top-1/2 left-3">
            <Search className="text-gray-400" size={18} />
          </div>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 rounded-2xl p-3 flex items-center gap-2" onClick={()=>setClicked((p)=> !p)}>
          <UserPlus size={20} className="text-white"/>
            <span className="whitespace-nowrap font-semibold text-white">Add User</span>
          <ChevronDown size={20} className={`transition text-white duration-200 ${clicked ? "rotate-180" : ""}`}/>
        </button>
      </div>
    </div>
      </div>


  {clicked && (
    <CreateUser />
  )}


    </>
  );
}

export default UsersHeader;
