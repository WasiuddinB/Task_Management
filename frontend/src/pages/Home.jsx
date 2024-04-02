import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className=' text-blue h-[40vh] py-8 text-center'>

            {/* <h1 className='mt-5 mb-20 text-3xl font-bold text-center text-purple-700 underline'>
              <span className="inline-block animate-bounce">Task</span>
              <span className="inline-block animate-pulse">-</span>
              <span className="inline-block animate-bounce">Managing</span>
              <span className="inline-block animate-pulse">-</span>
              <span className="inline-block animate-bounce">Console</span>
            </h1> */}

            <h1 className='underline mt-5 mb-10 text-3xl font-semibold text-center text-gray-800'>
              Task-Managing-Console-WUB
            </h1>


            <div className="flex justify-around">
              <Link to="/login" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
                <div className="w-auto bg-blue-200 hover:bg-blue-300 px-6 py-3 rounded-md shadow-md cursor-pointer">
                  Already Have an Account!
                </div>
              </Link>

              <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
                <div className="w-auto bg-green-200 hover:bg-green-300 px-6 py-3 rounded-md shadow-md cursor-pointer">
                  Want to Create an Account!
                </div>
              </Link>
            </div>

          </div>
        ) : (
          <>
            <h1 className='text-lg mt-8 mx-8 border-b border-b-blue-600'>Assalamu Alaikum, {authState.user.name}</h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home