import React from 'react';

const StatsSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto sm:grid-cols-3 text-black">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">Units Ready</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">Customerss</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100K+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">Reviews</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default StatsSection;
