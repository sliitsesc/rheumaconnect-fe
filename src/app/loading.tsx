export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">
          Please wait while we load the content for you.
        </p>
      </div>
    </div>
  );
}
