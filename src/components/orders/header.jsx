function OrdersHeader({ numOrder }) {
  return (
    <header className="flex justify-between items-end">
      <div>
        <p className="text-[14px] font-bold mb-1 uppercase text-slate-500 dark:text-slate-400">
          admin . management
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Orders
        </h2>
      </div>
      <div className="rounded-xl border border-slate-100 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
        <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {numOrder}
        </span>
        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
          total orders
        </span>
      </div>
    </header>
  );
}

export default OrdersHeader;
