"use client"
import { useState } from "react";
import { signUp } from "@/lib";

const Signup = ( { props } ) => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    try {
      const result = await signUp(formData);
      if (result.error) {
        setError(result.error);
        setSuccess(false);
      } else {
        setError('');
        setSuccess(true);
      }
    } catch (error) {
      if (error.message === "Failed to create record.") return setError("Passwords don't match!")
      setError(error.message);
      console.log(error.message)
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">Sign up successful!</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded"
            defaultValue="realemail@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border rounded"
            minLength={8}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="passwordConfirm" className="block mb-2">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            required
            className="w-full px-3 py-2 border rounded"
            minLength={8}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
 
export default Signup;