import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const cardData = useLoaderData();
  const { img, title, describe, rating, price, duration, _id, members } =
    cardData[0];
  return (
    <div>
      <section className="container mx-auto border-t">
        <aside className="">
          <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1  lg:grid-cols-2">
                <div class="relative z-10 lg:py-16 ">
                  <div class="relative h-64 sm:h-80 lg:h-full">
                    <img
                      alt="House"
                      src={img}
                      class="absolute inset-0 h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div class="relative flex items-center bg-gray-100 rounded-r-lg">
                  <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div class="p-8 sm:p-16 lg:p-24">
                    <h2 class="text-2xl text-secondary font-bold sm:text-3xl">
                      {title}
                    </h2>

                    <div className="space-y-3 mt-5">
                      <div className="flex justify-between">
                        <p className="text-black">
                          Duration :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {duration}
                          </span>
                        </p>
                        <p className="text-black">
                          Budget :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            $ {price}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-black">
                          Our Members Provide :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {members}
                          </span>
                        </p>
                        <p className="text-black">
                          Rating :{" "}
                          <span className="bg-info text-white px-2 rounded-sm">
                            {rating}
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="mt-4 text-gray-600">{describe.slice(0, 463)}</p>
                    <p class="mt-4 text-gray-600">{describe.slice(463, 967)}</p>
                    <p class="mt-4 text-gray-600">{describe.slice(967)}</p>

                    <Link class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <aside className="h-screen">
          <h1 className="text-center">Please login to add a review</h1>
          <div class="w-1/3">
            <blockquote class="flex h-full flex-col justify-between bg-white p-12">
              <div>
                <div class="flex gap-0.5 text-white">
                  <span class="bg-green-500 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span class="bg-green-500 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span class="bg-green-500 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span class="bg-green-500 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span class="bg-green-500 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                </div>

                <div class="mt-4">
                  <h3 class="text-2xl font-bold text-pink-600 sm:text-3xl">
                    Lorem ipsum dolor sit amet.
                  </h3>

                  <p class="mt-4 text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam cumque recusandae dolorum porro, quasi sunt
                    necessitatibus dolorem ab laudantium vel.
                  </p>
                </div>
              </div>

              <footer class="mt-8 text-gray-500">- Eddie Murphy</footer>
            </blockquote>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ServiceDetails;
