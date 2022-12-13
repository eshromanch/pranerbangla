import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import Router from "next/router";
function Signup(props) {

      // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      county: event.target.country.value,
      gender: event.target.gender.value,
      date_of_birth: event.target.birth.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'https://pranerbangla.com.bd/api/vb1/user-register'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()

 

    localStorage.setItem('token', result["access_token"]);
    localStorage.setItem('user', JSON.stringify( result["userData"]));
   
    const token = localStorage.getItem('token');
    


    if(response.ok) Router.push("/")
    if(response.status >= "400") alert(result.errors["mobile"])
  }

  const [startDate, setStartDate] = useState(new Date());
  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
    return (
        <div className='w-full flex flex-col justify-center '>
            <div className='grid grid-cols-2 mt-28 mb-80 gap-10 md:grid-rows-2 md:flex md:flex-col'>
                <div className=' flex flex-col  items-end md:items-start md:mx-5'>
<h1 className='font-enbody font-semibold text-2xl text-center text-black dark:text-white ' >Create new account</h1>
{/* <h1 className='font-enbody text-sm text-center text-gray-500 dark:text-white mt-8' >No account?</h1> */}
{/* <Link><a href=""><h1 className='font-enbody font-semibold text-xl text-center text-black dark:text-white' >Sign Up here</h1></a></Link> */}
                </div>
                <div className='flex flex-col gap-4 w-2/6 md:items-center md:w-full '>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 font-enbody" >
                <input type="text" placeholder="Name" name='name' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" required />
                <input type="number" placeholder="Phone number" name='mobile' className="input appearance-none input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" required/>
                <input type="text" placeholder="Email address" name='email' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" required/>
                <input type="text" placeholder="Country" name='country' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" required/>
 
                {/* <select name='country' className="select select-bordered w-full max-w-xs">
  <option disabled selected>Select country</option>
  <option value={"Bangladesh"}>Bangladesh</option>
  <option value={"United states"}>United states</option>
</select> */}

<div className='flex  gap-4 '>
<div className='flex  items-center gap-4'><input value={"Male"} type="radio" name="gender"  className="radio radio-primary radio-xs"  /> <h1 className='font-semibold text-lg text-center text-black dark:text-white'>Male</h1> </div>
<div className='flex  items-center gap-4'><input value={"Female"} type="radio" name="gender"  className="radio radio-primary radio-xs"  /><h1 className='font-semibold text-lg text-center text-black dark:text-white'>Female</h1> </div>
<div className='flex  items-center gap-4'><input value={"Other"} type="radio" name="gender"  className="radio radio-primary radio-xs"  /><h1 className='font-semibold text-lg text-center text-black dark:text-white'>Other</h1> </div>

</div>

{/* <select name='gender' className="select select-bordered w-full max-w-xs">
  <option disabled selected>Select gender</option>
  <option value={"Male"}>Male</option>
  <option value={"Female"}>Female</option>
  <option value={"Other"}>Other</option>
</select> */}
      {/* <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required /> */}
      {/* date picker */}
      <DatePicker name='birth'
      className='input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary'
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
       {/* date picker */}
{/* <input type="text" name='birth' placeholder='birth' /> */}
<input type="password" name='password' required placeholder='Password' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" />
<input type="password" name='password_confirmation' required placeholder='Confirm password'  className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary"/>
     
{/* <a className='text-md text-gray-400 font-enbody ' href="reset">Forget password?</a> */}
                <button className='btn font-enbody' type='submit'>sign up</button>
    </form>
                {/* <input type="text" placeholder="Email" className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent focus:border-primary" />
                <input type="password" placeholder="Password"  className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent"focus:border-primary /> */}
               

                </div>
            </div>
        </div>
    );
}

export default Signup;