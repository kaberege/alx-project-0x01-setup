import React, { useState } from 'react'
import { UserData, UserModalProps } from '@/interfaces'

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        lat: "",
        lng: "",
        phone: "",
        website: "",
        companyName: "",
        companyCatchPhrase: "",
        companyBs: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-900/50 flex justify-center items-center overflow-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md mt-auto">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">User Id:</label>
                        <input
                            type="number"
                            minLength={0}
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user id"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={user.street}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user street"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite:</label>
                        <input
                            type="text"
                            id="suite"
                            name="suite"
                            value={user.suite}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user suite"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user city"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zip code:</label>
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            value={user.zipcode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user zip code"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lat" className="block text-gray-700 font-medium mb-2">Latitude:</label>
                        <input
                            type="text"
                            id="lat"
                            name="lat"
                            value={user.lat}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user latitude"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lng" className="block text-gray-700 font-medium mb-2">Longitude:</label>
                        <input
                            type="text"
                            id="lng"
                            name="lng"
                            value={user.lng}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user longitude"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user phone"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website:</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user website"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={user.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyCatchPhrase:" className="block text-gray-700 font-medium mb-2">Company Catch Phrase:</label>
                        <textarea
                            id="companyCatchPhrase:"
                            name="companyCatchPhrase:"
                            value={user.companyCatchPhrase}
                            rows={4}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Catch Phrase"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyBs" className="block text-gray-700 font-medium mb-2">BS:</label>
                        <input
                            type="companyBs"
                            id="companyBs"
                            name="companyBs"
                            value={user.companyBs}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user bs"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserModal