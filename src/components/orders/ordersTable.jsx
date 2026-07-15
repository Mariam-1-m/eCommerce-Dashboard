import TableFooter from "./tableFooter";
import {
  basePaymentClasses,
  baseStatusClasses,
  paymentClasses,
  pointClasses,
  statusClasses,
} from "../../utils/orderClasses";

function OrdersTable({
  orders,
  filters,
  setFilters,
  totalPages,
  searchInput,
  setSelectedOrder,
}) {
  const filteredOrders = orders.filter((order) => {
    const searchLower = searchInput.toLowerCase();
    return (
      order._id.toLowerCase().includes(searchLower) ||
      order.user?.username?.toLowerCase().includes(searchLower) ||
      order.user?.email?.toLowerCase().includes(searchLower)
    );
  });

  if (filteredOrders.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center text-slate-400">
        No orders found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-800/50">
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                order
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                customer
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                date
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                status
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                payment
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 first:pl-5">
                total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm dark:divide-slate-800 dark:text-slate-200">
            {filteredOrders.map((order) => (
              <tr
                className="group cursor-pointer border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                key={order._id}
                onClick={() => setSelectedOrder(order)}
              >
                <td className="pl-5 pr-4 py-3.5 uppercase text-sx font-bold text-slate-500 dark:text-slate-400">
                  #{order._id.slice(-8)}
                </td>
                <td className="p-4 text-left">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-500 dark:bg-slate-600 dark:text-slate-300">
                        {order.user?.username?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <div className="truncate">
                      <p className="font-medium text-slate-800 dark:text-slate-100">
                        {order.user?.username || "Unknown User"}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {order.user?.email || "No email provided"}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-xs tabular-nums text-slate-400 whitespace-nowrap">
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className={`"p-4 text-left"`}>
                  <span
                    className={`${baseStatusClasses} ${statusClasses[order.status] || statusClasses.pending}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${pointClasses[order.status] || pointClasses.pending}`}
                    ></span>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-left">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${basePaymentClasses} ${paymentClasses[order.paymentStatus] || paymentClasses.pending}`}
                    >
                      {order.paymentStatus}
                    </span>
                    <span className="text-[10px] capitalize text-slate-400">
                      cash
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3.5 font-semibold tabular-nums text-slate-800 dark:text-slate-100">
                  {order.totalPrice.toFixed(2)} EGP
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableFooter
        totalPages={totalPages}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default OrdersTable;
