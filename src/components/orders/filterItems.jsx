import { useState } from "react";
import Select from "./filterSelect";
import { Search } from "lucide-react";

function FilterItems({ filters, setFilters, searchInput, setSearchInput }) {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search className="h-4 w-4" />
        </span>
        <input
          type="search"
          placeholder="Search ID, customer..."
          className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <Select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All statuses</option>
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
        <option value="returned">Returned</option>
      </Select>
      <Select
        value={filters.paymentStatus}
        onChange={(e) =>
          setFilters({ ...filters, paymentStatus: e.target.value })
        }
      >
        <option value="">All payments</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
        <option value="failed">Failed</option>
        <option value="refunded">Refunded</option>
      </Select>
      <Select
        value={filters.paymentMethod}
        onChange={(e) =>
          setFilters({ ...filters, paymentMethod: e.target.value })
        }
      >
        <option value="">All methods</option>
        <option value="cash">Cash</option>
        <option value="stripe">Stripe</option>
      </Select>
    </div>
  );
}

export default FilterItems;
