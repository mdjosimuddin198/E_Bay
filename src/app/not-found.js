// app/not-found.js (বা app/404.js)
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="darsk text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Looks like you followed a broken link or entered a URL that doesn’t
        exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
