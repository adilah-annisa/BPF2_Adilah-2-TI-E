import PageHeader from "../components/PageHeader";

export default function Customers() {
    return (
        <div id="customers-container">
            <PageHeader />

            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <img
                        src="https://avatar.iran.liara.run/public/12"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-gray-400 text-sm">john@email.com</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <img
                        src="https://avatar.iran.liara.run/public/15"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-gray-400 text-sm">jane@email.com</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <img
                        src="https://avatar.iran.liara.run/public/18"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold">Michael Lee</h3>
                        <p className="text-gray-400 text-sm">michael@email.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
}