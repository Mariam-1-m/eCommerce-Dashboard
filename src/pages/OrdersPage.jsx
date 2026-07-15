import { useEffect, useState } from "react";
import Loader from "../components/loader";
import OrdersHeader from "../components/orders/header";
import OrdersTable from "../components/orders/ordersTable";
import FilterItems from "../components/orders/filterItems";
import { getOrders } from "../services/orderApi";
import OrderView from "../components/orders/orderView";

function OrdersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({
    page: 1,
    limit: 15,
    status: "",
    paymentStatus: "",
    paymentMethod: "",
    sortBy: "createdAt",
    sortDir: "desc",
  });
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 5,
    currentPage: 1,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getOrders(filters);
        setOrders(data.orders);
        setPagination({
          total: data.total,
          totalPages: data.totalPages,
          currentPage: data.currentPage,
        });
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [filters]);

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-4 p-4 sm:p-6 lg:p-8">
      <OrdersHeader numOrder={orders.length} />
      <FilterItems
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filters={filters}
        setFilters={setFilters}
      />
      <OrdersTable
        filters={filters}
        setFilters={setFilters}
        orders={orders}
        totalPages={pagination.totalPages}
        searchInput={searchInput}
        setSelectedOrder={setSelectedOrder}
      />
      {selectedOrder && (
        <OrderView
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}

export default OrdersPage;
