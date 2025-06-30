import React from 'react';

const Error = () => (
  <div className="w-full flex flex-col justify-center items-center">
    <h1 className="font-bold text-2xl text-white mt-2">
      Something went wrong. Please try again later.
    </h1>
    <p className="text-gray-400 mt-4">
      If the problem persists, please contact support.
    </p>
  </div>
);

export default Error;
