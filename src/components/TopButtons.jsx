import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            name: 'London'

        },
        {
            id: 2,
            name: 'Paris'
        },
        {
            id: 3,
            name: 'Sydney'
        },
        {
            id: 4,
            name: 'Tokyo'
        },
        {
            id: 5,
            name: 'Toronto'
        }
    ]

  return (
    <div className="flex justify-around items-center my-6 text-white">
    {
        cities && cities.map(item => {
            return (
                <button key={item.id} className='text-white text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>{item.name}</button>
            )
        })
    }
   
    </div>
  )
}

export default TopButtons