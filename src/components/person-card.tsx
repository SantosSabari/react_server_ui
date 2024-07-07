import React from 'react'

function PersonCard(props:any) {
  const person = props.person
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-56 object-cover object-center" src="https://via.placeholder.com/300" alt="Team Member 1" />
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{person.username}</h3>
                <p className="text-gray-400 mb-4">{person.role}</p>
                <p className="text-sm text-white">{person.city}</p>
            </div>
        </div>
    </div> 
  )
}

export default PersonCard