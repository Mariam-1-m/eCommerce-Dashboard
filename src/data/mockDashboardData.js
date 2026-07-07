export const dashboardSummaryCards = [
  {
    id: "total-orders",
    label: "Total Orders",
    value: "17",
    helper: "All orders received",
    accent: "from-emerald-400 to-teal-500",
    icon: "shoppingBag",
  },
  {
    id: "pending-orders",
    label: "Pending Orders",
    value: "0",
    helper: "Awaiting action",
    accent: "from-amber-400 to-orange-500",
    icon: "clock",
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "$6,845.76",
    helper: "Total gross revenue",
    accent: "from-pink-500 to-rose-500",
    icon: "dollar",
  },
  {
    id: "this-month",
    label: "This Month",
    value: "$0.00",
    helper: "Monthly sales target",
    accent: "from-cyan-400 to-sky-500",
    icon: "cart",
  },
  {
    id: "top-product",
    label: "Top Product",
    value: "iPhone 15 Pro Max",
    helper: "6 sold",
    accent: "from-violet-500 to-fuchsia-500",
    icon: "box",
  },
  {
    id: "users",
    label: "Users",
    value: "9",
    helper: "Registered customers",
    accent: "from-slate-400 to-slate-600",
    icon: "users",
  },
];

export const orderStatusBreakdown = [
  { id: "pending", label: "Pending", value: 0, tone: "amber" },
  { id: "processing", label: "Processing", value: 4, tone: "sky" },
  { id: "confirmed", label: "Confirmed", value: 2, tone: "cyan" },
  { id: "shipped", label: "Shipped", value: 3, tone: "violet" },
  { id: "delivered", label: "Delivered", value: 3, tone: "emerald" },
  { id: "cancelled", label: "Cancelled", value: 4, tone: "rose" },
];

export const topProducts = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    sold: 6,
    revenue: "$7,200.00",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "lg-smart-tv",
    name: "LG Smart TV",
    sold: 4,
    revenue: "$39,200.00",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "xiaomi-redmi-15c",
    name: "Xiaomi Redmi 15C",
    sold: 4,
    revenue: "$33,196.00",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "levis-grey",
    name: "Levi's Mens Men's Grey",
    sold: 4,
    revenue: "$17,860.00",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=160&q=80",
  },
];

export const recentOrders = [
  {
    id: "CD517752",
    customer: "ssw33333",
    product: "iPhone 16 Pro Max",
    date: "Jul 4, 2026",
    status: "confirmed",
    amount: "$2,164.86",
  },
  {
    id: "F2B53C5A",
    customer: "Customer",
    product: "LG Smart TV",
    date: "Jul 4, 2026",
    status: "processing",
    amount: "$11,172.00",
  },
  {
    id: "4A4CACC8",
    customer: "Hazem",
    product: "iPhone 15 Pro Max",
    date: "Jul 3, 2026",
    status: "processing",
    amount: "$1,368.00",
  },
  {
    id: "4A4CAC96",
    customer: "customer account",
    product: "Levi's Mens Men's Grey",
    date: "Jul 3, 2026",
    status: "cancelled",
    amount: "$1,480.86",
  },
  {
    id: "E0FDA4CE",
    customer: "Customer",
    product: "iPhone 15 Pro Max",
    date: "Jul 3, 2026",
    status: "confirmed",
    amount: "$1,368.00",
  },
];

export const dashboardStateSamples = {
  loading: {
    title: "Syncing dashboard metrics",
    description: "Preparing mock commerce insights for preview.",
  },
  empty: {
    title: "No recent orders",
    description: "Mock data can be swapped with API results later.",
  },
  error: {
    title: "Dashboard preview unavailable",
    description: "This is a mock-only error state for future API handling.",
  },
};
