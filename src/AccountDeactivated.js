import { Link } from 'react-router-dom'

export default Error = () => {
  return (
    <>
      <div
        className='
    flex
    items-center
    justify-center
    w-screen
    h-screen'
      >
        <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-red-600 text-9xl'>Your Account Has Been Temporarily Deactivated</h1>

            <h6 className='mb-2 text-xl  text-center text-blue-800 '>
              <span className='text-red-500'>Contact at : </span> <small> <a href='mailto:'>www.subhamHazra143@gmail.com</a>   </small>
            
            </h6>

            <p className='mb-8 text-center text-gray-500 md:text-lg'>
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to='/home'
              className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
