export default function InputField( { label, type, placeholder } ) {
    return (
        <div className="mb-3">
            <label className="block text-blue-700 font-medium mb-1">{label}</label>
            <input 
                    type={type}
                    placeholder={placeholder}
                    className="w-full p-2.5 border border-amber-400 rounded-2xl"
            />
        </div>
    );
}

