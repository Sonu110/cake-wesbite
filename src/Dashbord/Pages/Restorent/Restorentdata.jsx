import React from 'react'
import { Link } from 'react-router-dom'

function Restorentdata() {
    return (


   <>
   
   <Link to={'/dashbord/newrestorent'}>
<button class="bg-white hover:bg-gray-100 mt-10 text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow">
  Add new Restorent
</button>
    </Link>
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <div class="bg-white p-4 rounded-md mt-4">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">Records</h2>
                <div class="my-1"></div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                            <td class="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1950</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                            <td class="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1850</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
                            <td class="py-2 px-4 border-b border-grey-light">04/08/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$2300</td>
                        </tr>
                    </tbody>
                </table>

                <div class="text-right mt-4">

                    <div class="text-right mt-4">
                        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>


        </>



    )
}

export default Restorentdata