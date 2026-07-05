import { useEffect, useState } from "react";
import {
  Box,
  CircleDollarSign,
  Clock3,
  PackageCheck,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  dashboardStateSamples,
  dashboardSummaryCards,
  orderStatusBreakdown,
  recentOrders,
  topProducts,
} from "../../data/mockDashboardData";

const summaryIcons = {
  shoppingBag: ShoppingBag,
  clock: Clock3,
  dollar: CircleDollarSign,
  cart: ShoppingCart,
  box: Box,
  users: Users,
};

const statusToneClasses = {
  pending: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  processing: "border-sky-400/25 bg-sky-400/10 text-sky-200",
  confirmed: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
  shipped: "border-violet-400/25 bg-violet-400/10 text-violet-200",
  delivered: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  cancelled: "border-rose-400/25 bg-rose-400/10 text-rose-200",
};

const breakdownToneClasses = {
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  sky: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  violet: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  rose: "border-rose-400/30 bg-rose-400/10 text-rose-200",
};

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (hasError) {
    return <DashboardNotice state={dashboardStateSamples.error} />;
  }

  const hasOrders = recentOrders.length > 0;

  return (
    <div className="space-y-7">
      <section className="rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.45em] text-cyan-300">
          Admin Overview
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Real-time commerce health
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200">
          Monitor your storefront with AI-style clarity and live API metrics.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardSummaryCards.map((card) => (
          <SummaryCard key={card.id} card={card} />
        ))}
      </section>

      <section className="grid gap-7 xl:grid-cols-[1.18fr_0.82fr]">
        <OrderStatusPanel />
        <TopProductsPanel />
      </section>

      <section className="rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.45em] text-cyan-300">
              Recent Orders
            </p>
            <h2 className="text-2xl font-bold text-white">
              Latest customer activity
            </h2>
          </div>
          <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {recentOrders.length} orders
          </span>
        </div>

        {hasOrders ? <RecentOrdersList /> : <DashboardNotice state={dashboardStateSamples.empty} />}
      </section>
    </div>
  );
}

function SummaryCard({ card }) {
  const Icon = summaryIcons[card.icon] || PackageCheck;

  return (
    <article className="group relative min-h-[208px] overflow-hidden rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-7 shadow-2xl shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35">
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${card.accent}`}
      />
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="text-base font-semibold text-blue-200/80">{card.label}</p>
          <p className="mt-6 text-4xl font-extrabold leading-tight text-white">
            {card.value}
          </p>
          <p className="mt-4 text-sm font-medium text-blue-200/60">
            {card.helper}
          </p>
        </div>
        <div
          className={`grid h-[70px] w-[70px] shrink-0 place-items-center rounded-[20px] bg-gradient-to-br ${card.accent} text-white shadow-lg shadow-black/25`}
        >
          <Icon size={34} strokeWidth={2.3} />
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-8 h-px bg-slate-700/60" />
    </article>
  );
}

function OrderStatusPanel() {
  return (
    <article className="rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.45em] text-cyan-300">
            Order Status
          </p>
          <h2 className="text-2xl font-bold text-white">
            Live fulfillment breakdown
          </h2>
        </div>
        <span className="w-fit rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
          Updated from mock
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {orderStatusBreakdown.map((item) => (
          <div
            key={item.id}
            className={`rounded-[24px] border p-5 ${breakdownToneClasses[item.tone]}`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.35em]">
              {item.label}
            </p>
            <p className="mt-6 text-4xl font-extrabold">{item.value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function TopProductsPanel() {
  return (
    <article className="rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.45em] text-cyan-300">
        Top Products
      </p>
      <h2 className="mb-6 text-2xl font-bold text-white">Best sellers</h2>

      <div className="space-y-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 rounded-[24px] border border-slate-700/70 bg-[#050a1a] p-4 transition duration-200 hover:border-cyan-300/35"
          >
            <img
              src={product.image}
              alt=""
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <h3 className="truncate text-lg font-bold text-white">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-slate-200">
                {product.sold} units sold · {product.revenue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function RecentOrdersList() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div
          key={order.id}
          className="grid gap-4 rounded-[24px] border border-slate-700/70 bg-[#050a1a] p-5 transition duration-200 hover:border-cyan-300/35 md:grid-cols-[1fr_auto_auto]"
        >
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-white">
              {order.customer}
            </p>
            <p className="text-sm text-slate-200">
              {order.product} · {order.date}
            </p>
          </div>
          <span
            className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold capitalize ${statusToneClasses[order.status]}`}
          >
            {order.status}
          </span>
          <p className="text-base font-semibold text-white md:text-right">
            {order.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-7">
      <section className="rounded-[28px] border border-slate-700/70 bg-slate-900/80 p-8">
        <div className="h-4 w-52 animate-pulse rounded bg-cyan-300/20" />
        <div className="mt-6 h-9 w-full max-w-xl animate-pulse rounded bg-slate-700/60" />
        <div className="mt-5 h-5 w-full max-w-2xl animate-pulse rounded bg-slate-700/40" />
      </section>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardSummaryCards.map((card) => (
          <div
            key={card.id}
            className="min-h-[208px] animate-pulse rounded-[28px] border border-slate-700/70 bg-slate-900/80"
          />
        ))}
      </section>
    </div>
  );
}

function DashboardNotice({ state }) {
  return (
    <div className="rounded-[24px] border border-dashed border-cyan-300/35 bg-cyan-400/5 p-6">
      <h3 className="text-lg font-bold text-white">{state.title}</h3>
      <p className="mt-2 text-slate-300">{state.description}</p>
    </div>
  );
}

export default DashboardPage;
