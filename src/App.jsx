
import './App.css'

function App() {
  
  return (
    <>
   <main className='bg-white'>
     <h1 className='text-red-400 text-4xl bg-amber-400'>As salam </h1>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    <li><a className='text-[#101727]'>Products</a></li>
      <li><a className='text-[#101727]'>Features</a></li>
      <li><a className='text-[#101727]'>Pricing</a></li>
      <li><a className='text-[#101727]'>Testimonials</a></li>
      <li><a className='text-[#101727]'>FAQ</a></li>
      </ul>
    </div>
    <a className=' text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-transparent bg-clip-text'>DigiTools</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a className='text-[#101727]'>Products</a></li>
      <li><a className='text-[#101727]'>Features</a></li>
      <li><a className='text-[#101727]'>Pricing</a></li>
      <li><a className='text-[#101727]'>Testimonials</a></li>
      <li><a className='text-[#101727]'>FAQ</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a className='bg-green-500'>Get Started</a>
  </div>
</div>
   </main>
    </>
  )
}

export default App
