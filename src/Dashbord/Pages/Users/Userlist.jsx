import React, { useEffect, useState } from 'react'

function Userlist() {



const [users, setUsers] = useState([]);
console.log(users);

useEffect(() => {
  // Fetch data from Flask API
  fetch('http://127.0.0.1:1000/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}, [])








  return (
    <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="font-semibold text-gray-700">User Accounts</h2>
        <span class="text-xs text-gray-500">View accounts of registered users</span>
      </div>
    </div>
    <div class="overflow-y-hidden rounded-lg border">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th class="px-5 py-3">ID</th>
              <th class="px-5 py-3">Full Name</th>
              <th class="px-5 py-3">Email</th>
              <th class="px-5 py-3">password</th>
              
            </tr>
          </thead>
          <tbody class="text-gray-500">
            {
              users.map((item)=>
                <tr>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{item[0]}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center">
                   
                    <div class="ml-3">
                      <p class="whitespace-no-wrap">{item[1]}</p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{item[2]}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{item[3]}</p>
                </td>
    
                
              </tr>
              )
            }
           
           
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
        <span class="text-xs text-gray-600 sm:text-sm"> Showing  {users.length+1} Entries </span>
        <div class="mt-2 inline-flex sm:mt-0">
          <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
          <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Userlist