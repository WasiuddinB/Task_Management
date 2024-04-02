import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import SignupForm from '../components/SignupForm'

const Signup = () => {

  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <>
      <MainLayout>
        <SignupForm/>
      </MainLayout>
    </>
  )
}

export default Signup