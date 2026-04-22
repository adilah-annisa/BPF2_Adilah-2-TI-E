import PageHeader from "../components/PageHeader";

export default function Orders() {
    return (
        <div id="orders-container">
            <PageHeader />

            <div className="p-5 bg-white rounded-lg shadow-md mt-4">
                <h2 className="text-xl font-semibold mb-4">Orders List</h2>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">#001</td>
                            <td className="p-3">John Doe</td>
                            <td className="p-3">21 Apr 2026</td>
                            <td className="p-3 text-hijau font-medium">Completed</td>
                            <td className="p-3">Rp 120.000</td>
                        </tr>

                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">#002</td>
                            <td className="p-3">Jane Smith</td>
                            <td className="p-3">20 Apr 2026</td>
                            <td className="p-3 text-kuning font-medium">Pending</td>
                            <td className="p-3">Rp 90.000</td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                            <td className="p-3">#003</td>
                            <td className="p-3">Michael Lee</td>
                            <td className="p-3">19 Apr 2026</td>
                            <td className="p-3 text-merah font-medium">Canceled</td>
                            <td className="p-3">Rp 50.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}