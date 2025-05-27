import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-2xl mx-auto my-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105
     transition-all duration-300 border border-gray-200 cursor-pointer ">
    <h2 className='text-center text-2xl font-bold my-1'>{id}</h2>
      <div className="mb-4 border-b pb-2">
        <h3 className="text-xl font-bold text-gray-800">{name} <span className="text-sm text-gray-500">(@{username})</span></h3>
        <p className="text-sm text-gray-600">{email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
        {/* Address */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-1">📍 Address</h3>
          <ul className="space-y-1">
            <li><strong>Street:</strong> {address.street}</li>
            <li><strong>Suite:</strong> {address.suite}</li>
            <li><strong>City:</strong> {address.city}</li>
            <li><strong>Zipcode:</strong> {address.zipcode}</li>
            <li><strong>Geo:</strong> ({address.geo.lat}, {address.geo.lng})</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-1">📞 Contact</h3>
          <ul className="space-y-1">
            <li><strong>Phone:</strong> {phone}</li>
            <li><strong>Website:</strong> <a href={`http://${website}`} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">{website}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-1">🏢 Company</h3>
          <ul className="space-y-1">
            <li><strong>Name:</strong> {company.name}</li>
            <li><strong>Catchphrase:</strong> <em>"{company.catchPhrase}"</em></li>
            <li><strong>BS:</strong> {company.bs}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserCard
