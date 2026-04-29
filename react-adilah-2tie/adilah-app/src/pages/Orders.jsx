import { useState } from "react";
import PageHeader from "../components/PageHeader";
import FormModal from "../components/FormModal";
import ordersData from "../data/orders.json";

const getStatusColor = (status) => {
    switch(status) {
        case "Completed": return "text-hijau bg-green-100";
        case "Pending": return "text-kuning bg-yellow-100";
        case "Cancelled": return "text-merah bg-red-100";
        default: return "bg-gray-100";
    }
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
};

export default function Orders() {
    const [orders, setOrders] = useState(ordersData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddOrder = (newOrder) => {
        setOrders([...orders, newOrder]);
    };

    return (
        <div id="orders-container">
            <PageHeader 
                title="Orders" 
                currentPage="Order List" 
                buttonText="Add Order" 
                onButtonClick={() => setIsModalOpen(true)}
            />

            <div className="p-5 bg-white rounded-lg shadow-md mt-4 overflow-x-auto">
                <h2 className="text-xl font-semibold mb-4">Orders List</h2>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b bg-gray-50">
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{order.id}</td>
                                <td className="p-3">{order.customer}</td>
                                <td className="p-3">{formatDate(order.date)}</td>
                                <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-3 font-semibold">{formatCurrency(order.total)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <FormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                type="order" 
                onSubmit={handleAddOrder}
            />
        </div>
    );
}