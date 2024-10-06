import React from 'react';

export default function Input({ type, name, id, placeholder, value, onChange, required }) {
    return (
        <div className="flex flex-col mt-2">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}
