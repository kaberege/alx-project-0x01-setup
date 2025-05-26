import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{id}</h2>
            </div>
            <p className="text-gray-600">{name}</p>
            <p className="text-gray-600">{username}</p>
            <p className="text-gray-600">{email}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div>
                    <h3>Address</h3>
                    <div>
                        <span>Street: {address.street}</span>
                        <span>Suite: {address.suite}</span>
                        <span>City: {address.city}</span>
                        <span>Zip code {address.zipcode}</span>
                        <span>Latitude: {address.geo.lat}</span>
                        <span>Longitude: {address.geo.lng}</span>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div>
                        <span>Phone: {phone}</span>
                        <span>Website: {website}</span>
                    </div>
                </div>
                <div>
                    <h3>Company</h3>
                    <div>
                        <span>Name: {company.name}</span>
                        <span>catchPhrase: {company.catchPhrase}</span>
                        <span>bs: {company.bs}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard