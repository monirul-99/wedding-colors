import React from "react";
import UseTitle from "../../CustomHooks/UseTitle/UseTitle";

const Blogs = () => {
  UseTitle("Blogs");
  return (
    <div>
      <div className="space-y-4 container mx-auto border-t py-8 px-8">
        <div className="py-12">
          <h1 className="text-center lg:text-4xl text-2xl font-Vibes tracking-widest text-white">
            Special Question With <span className="text-secondary">Answer</span>
          </h1>

          <div className="flex justify-center space-x-5 mt-3">
            <aside>
              <div className="flex items-center">
                <hr className="w-32" />
                <aside className="w-3 h-3 bg-secondary rounded-full"></aside>
              </div>
            </aside>
            <aside>
              <div className="flex items-center">
                <aside className="w-3 h-3 bg-secondary rounded-full"></aside>
                <hr className="w-32" />
              </div>
            </aside>
          </div>
        </div>
        <details
          className="group border-l-4 border-secondary bg-gray-50 p-6 "
          open
        >
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              Difference between SQL and No-SQL?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </details>

        <details className="group border-l-4 border-secondary bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              What is JWT, and how does it work?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            JSON Web Token is a proposed Internet standard for creating data
            with optional signature and/or optional encryption whose payload
            holds JSON that asserts some number of claims. The tokens are signed
            either using a private secret or a public/private key.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
          </p>
        </details>

        <details className="group border-l-4 border-secondary bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              What is the difference between javascript and NodeJS?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </details>

        <details className="group border-l-4 border-secondary bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              How does NodeJS handle multiple requests at the same time?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blogs;
