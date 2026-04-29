import { useState } from "react";
import PageHeader from "../components/PageHeader";
import FormModal from "../components/FormModal";
import customersData from "../data/customers.json";

const getLoyaltyColor = (loyalty) => {
    switch(loyalty) {
        case "Gold": return "bg-yellow-400 text-yellow-900";
        case "Silver": return "bg-gray-300 text-gray-700";
        case "Bronze": return "bg-amber-600 text-white";
        default: return "bg-gray-200";
    }
};

export default function Customers() {
    const [customers, setCustomers] = useState(customersData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddCustomer = (newCustomer) => {
        setCustomers([...customers, newCustomer]);
    };

    return (
        <div id="customers-container">
            <PageHeader 
                title="Customers" 
                currentPage="Customer List" 
                buttonText="Add Customer" 
                onButtonClick={() => setIsModalOpen(true)}
            />

            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {customers.map((customer) => (
                    <div key={customer.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                        <img
                            src={`https://avatar.iran.liara.run/public/${customer.id.replace('CUST', '')}`}
                            alt={customer.name}
                            className="w-14 h-14 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm truncate">{customer.name}</h3>
                            <p className="text-gray-400 text-xs truncate">{customer.email}</p>
                            <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full font-medium ${getLoyaltyColor(customer.loyalty)}`}>
                                {customer.loyalty}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <FormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                type="customer" 
                onSubmit={handleAddCustomer}
            />
        </div>
    );
}