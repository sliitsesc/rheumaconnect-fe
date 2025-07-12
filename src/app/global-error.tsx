"use client"; // Error components must be Client Components

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-red-100 to-white flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            {/* Error Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-red-600 mb-4">⚠️</div>
              <div className="w-32 h-32 mx-auto mb-4 bg-red-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Something went wrong!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We encountered an unexpected error. Please try again or contact
              support if the problem persists.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Try Again
              </button>

              <Link
                href="/"
                className="inline-block w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
              >
                Go Back Home
              </Link>
            </div>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === "development" && (
              <div className="mt-8 pt-8 border-t border-gray-200 text-left">
                <details className="text-sm text-gray-600">
                  <summary className="cursor-pointer font-semibold mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="bg-gray-100 p-4 rounded overflow-auto">
                    {error.message}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
