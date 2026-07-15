import api from "../lib/api";
import { handleError } from "../helpers/handleErrorMSG";

export async function getOrders(filters) {
  try {
    const res =
      await api.get(`https://e-commerce-api-3wara.vercel.app/orders/admin?page=${filters.page}&limit=${filters.limit}&sortBy=${filters.sortBy}&sortDir=${filters.sortDir}&${filters.status !== "" ? `status=${filters.status}&` : ""}${filters.paymentStatus !== "" ? `paymentStatus=${filters.paymentStatus}&` : ""}${filters.paymentMethod !== "" ? `paymentMethod=${filters.paymentMethod}&` : ""}
`);
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}
