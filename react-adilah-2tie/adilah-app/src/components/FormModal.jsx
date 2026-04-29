import { useState } from "react";

export default function FormModal({ isOpen, onClose, type, onSubmit }) {
    const [formData, setFormData] = useState({});

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({});
        onClose();
    };

    const isOrder = type === "order";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop dengan Blur */}
            <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
                
                {/* Header dengan Aksen Hijau Sedap */}
                <div className="relative bg-emerald-500 p-6 text-white">
                    <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">
                                {isOrder ? "New Order" : "New Customer"}
                            </h2>
                            <p className="text-emerald-100 text-sm">Please fill out the form below</p>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    {/* Hiasan Absrak di Header */}
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        {isOrder ? (
                            <>
                                <InputField label="Order ID" name="id" placeholder="ORD031" value={formData.id} onChange={handleChange} icon="🆔" />
                                <InputField label="Customer Name" name="customer" placeholder="Siapa yang beli?" value={formData.customer} onChange={handleChange} icon="👤" />
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <SelectField label="Status" name="status" value={formData.status} onChange={handleChange} icon="📊">
                                        <option value="">Status</option>
                                        <option value="Pending">🕒 Pending</option>
                                        <option value="Completed">✅ Completed</option>
                                        <option value="Cancelled">❌ Cancelled</option>
                                    </SelectField>
                                    <InputField label="Total Price" name="total" type="number" placeholder="0" value={formData.total} onChange={handleChange} icon="💰" />
                                </div>

                                <InputField label="Order Date" name="date" type="date" value={formData.date} onChange={handleChange} icon="📅" />
                            </>
                        ) : (
                            <>
                                <InputField label="Customer ID" name="id" placeholder="CUST031" value={formData.id} onChange={handleChange} icon="🆔" />
                                <InputField label="Full Name" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} icon="👤" />
                                <InputField label="Email Address" name="email" type="email" placeholder="email@contoh.com" value={formData.email} onChange={handleChange} icon="✉️" />
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField label="Phone" name="phone" placeholder="0812..." value={formData.phone} onChange={handleChange} icon="📞" />
                                    <SelectField label="Loyalty" name="loyalty" value={formData.loyalty} onChange={handleChange} icon="👑">
                                        <option value="">Select</option>
                                        <option value="Bronze">🥉 Bronze</option>
                                        <option value="Silver">🥈 Silver</option>
                                        <option value="Gold">🥇 Gold</option>
                                    </SelectField>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95"
                        >
                            Save Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Sub-component untuk Input agar kode bersih
function InputField({ label, icon, ...props }) {
    return (
        <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">
                {label}
            </label>
            <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">{icon}</span>
                <input
                    {...props}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                />
            </div>
        </div>
    );
}

// Sub-component untuk Select
function SelectField({ label, icon, children, ...props }) {
    return (
        <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">
                {label}
            </label>
            <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">{icon}</span>
                <select
                    {...props}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                >
                    {children}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}