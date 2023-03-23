
import * as React from 'react';
import Button from '@mui/material/Button';
import Link  from '@mui/material/Link';

const Home = () => {
  return (
    <div className="w-full h-screen bg-teal-500 flex flex-col justify-center items-center ">
      <h1 className="font-bold text-4xl  mt-20 ">Welcome To The Site !</h1>
      <Link href="/signup" variant="body2">
       { 
       <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>}
      </Link>
    </div>
  )
}

export default Home