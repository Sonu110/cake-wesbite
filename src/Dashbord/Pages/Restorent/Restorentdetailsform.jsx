import axios from 'axios'
import React, { useState } from 'react'

function Restorentdetailsform() {

  const [name, setname]=useState("")
  
  const [email, setemail]=useState("")
  
  const [address, setaddress]=useState("")
  const [Description, setDescription]=useState("")
  
  const [city, setcity]=useState("")
  
  const [image, setimage]=useState("")
  const [subimage, setsubimage]=useState("")
  
  const [message, setMessage] = useState('');
    
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('full_name', name);
    formData.append('email', email);
    formData.append('description', Description);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('file', image[0]);
    for (let i = 0; i < subimage.length; i++) {
      formData.append('files[]', subimage[i]);
    }
    try {
      const response = await axios.post('http://127.0.0.1:1000/restorent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      const data = response.data;
  
      if (data.status) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  










  return (
    <>
   
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600 mb-4">Restaurant Form</h2>

    {message}
      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={name}  onChange={(e)=> setname(e.target.value)}/>
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" 
                value={email}  onChange={(e)=> setemail(e.target.value)}
                />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={address}  onChange={(e)=> setaddress(e.target.value)} placeholder='Address' />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                value={city}  onChange={(e)=> setcity(e.target.value)}
                
                />
              </div>

              <div  class="md:col-span-5">
              <label for="description">description</label>
             <textarea className=" h-40 border mt-1 rounded px-4 w-full bg-gray-50" name='description' placeholder='write Description here'
             value={Description}  onChange={(e)=> setDescription(e.target.value)}
             ></textarea>
              </div>
         


              <div className='md:col-span-5'>
                <label class="block text-sm font-medium " for="file">
                Home Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file" type="file" class="sr-only" onChange={(e)=> setimage(e.target.files)}/>
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

             
            <div className='md:col-span-5'>
                <label class="block text-sm font-medium" for="files[]">
                Rest Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file" name="files[]" type="file" class="sr-only" accept='image/*' multiple onChange={(e) => setsubimage(e.target.files)} />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

             
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>


            </div>
              </form>
          </div>
        </div>
      </div>
    </div>

    <a class="md:absolute bottom-0 right-0 p-4 float-right">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
    </a>



  </div>
</div>
 </>
  )
}

export default Restorentdetailsform