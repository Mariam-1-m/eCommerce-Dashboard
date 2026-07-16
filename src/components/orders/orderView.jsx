import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import api from "../../lib/api";
import {
  basePaymentClasses,
  baseStatusClasses,
  paymentClasses,
  pointClasses,
  statusClasses,
} from "../../utils/orderClasses";

export default function OrderView({ order, onClose, onOrderUpdated }) {
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState(order?.status || "pending");
  const [note, setNote] = useState(order?.adminNote || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 10);
  }, []);

  useEffect(() => {
    if (order) {
      setStatus(order.status);
      setNote(order.adminNote || "");
    }
  }, [order]);

  const handleUpdateStatus = async () => {
    try {
      setLoading(true);

      const { data } = await api.patch(`/orders/admin/${order._id}/status`, {
        status,
        adminNote: note,
      });

      toast.success(data.message || "Status updated");

      setStatus(data.order.status);
      setNote(data.order.adminNote || "");
      onOrderUpdated?.(data.order);
      setOpen(false);
      onClose();
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => onClose(), 300);
  };


return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/40 backdrop-blur-sm"
      />
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            fixed right-0 top-0 h-screen w-full max-w-md
            bg-white dark:bg-slate-900
            shadow-2xl
            transition-transform
            duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
            pointer-events-auto
          `}
        >
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-full overflow-hidden">
            <div className="flex justify-between items-start p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-1 uppercase">
                  Order Detail
                </p>
                <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  # {order?._id?.slice(-8) || "N/A"}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="p-6 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <span
                    className={`${baseStatusClasses} ${statusClasses[status] || statusClasses.pending}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${pointClasses[status] || pointClasses.pending}`}
                    ></span>
                    {status}
                  </span>
                  <span
                    className={`${basePaymentClasses} ${paymentClasses[order?.paymentStatus] || paymentClasses.pending}`}
                  >
                    {order?.paymentStatus}
                  </span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {order?.paymentMethod}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                  Info
                </h3>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-1 shadow-sm">
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Placed</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm">
                      {order?.createdAt
                        ? new Date(order.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Customer</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm">
                      {order?.user?.username || "Unknown User"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Email</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm">
                      {order?.user?.email || "No email provided"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Ship to</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm text-right max-w-[60%] truncate">
                      {order?.shippingAddress?.address ||
                        "No shipping address provided"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Items Section */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                  Items
                </h3>

                {order?.items?.map((item) => (
                  <div
                    key={item.product}
                    className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 flex items-center justify-between mb-4 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                        <img
                          src={item.image}
                          alt="Item"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-slate-100 font-semibold text-sm mb-0.5">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          &times; {item.quantity} &middot; {item.price} EGP
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-900 dark:text-slate-100 font-bold text-sm">
                      {item.price * item.quantity} EGP
                    </div>
                  </div>
                ))}

                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-1 shadow-sm">
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Subtotal</span>
                    <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">
                      {order?.subtotal} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Shipping</span>
                    <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">
                      {order?.shippingFee} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 border-b border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Tax (14%)</span>
                    <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">
                      {order?.tax} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-4 bg-slate-50 dark:bg-slate-800 rounded-b-xl border-t border-slate-100 dark:border-slate-700/50">
                    <span className="text-slate-900 dark:text-white font-bold">Total</span>
                    <span className="text-slate-900 dark:text-white font-bold text-lg">
                      {order?.totalPrice} EGP
                    </span>
                  </div>
                </div>
              </div>

              {order?.customerNote && (
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                    customer note
                  </h3>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 px-4 py-3 text-sm italic text-slate-600 dark:text-slate-400">
                    "{order.customerNote}"
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                  Update Status
                </h3>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 shadow-sm">
                  <div className="mb-4 relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div className="mb-5">
                    <textarea
                      id="admin-note"
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none block p-3 placeholder-slate-400 dark:placeholder-slate-500 resize-none font-medium"
                      placeholder="Admin note (optional)..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleUpdateStatus}
                    disabled={loading}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 disabled:opacity-50 transition-colors rounded-lg text-sm px-5 py-3 font-semibold"
                  >
                    {loading ? "Saving..." : "Save changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
