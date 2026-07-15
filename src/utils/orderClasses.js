export const statusClasses = {
  pending:
    "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 ring-amber-300/40",

  confirmed:
    "bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 ring-sky-300/40",

  processing:
    "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 ring-violet-300/40",

  shipped:
    "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 ring-cyan-300/40",

  delivered:
    "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 ring-emerald-300/40",

  cancelled:
    "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 ring-rose-300/40",

  returned:
    "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 ring-orange-300/40",
};

export const pointClasses = {
  pending: "bg-amber-400",
  confirmed: "bg-sky-400",
  processing: "bg-violet-400",
  shipped: "bg-cyan-400",
  delivered: "bg-emerald-400",
  cancelled: "bg-rose-400",
  returned: "bg-orange-400",
};

export const baseStatusClasses =
  "inline-flex items-center gap-1.5 rounded-full ring-1 font-medium px-2.5 py-0.5 text-[11px]";

export const paymentClasses = {
  pending: "bg-amber-900/20 text-amber-400",
  paid: "bg-emerald-900/20 text-emerald-400",
  failed: "bg-rose-900/20 text-rose-400",
  refunded: "bg-slate-700 text-slate-300",
};

export const basePaymentClasses =
  "inline-flex items-center rounded px-2 py-1.5 text-[10px] font-semibold uppercase";
