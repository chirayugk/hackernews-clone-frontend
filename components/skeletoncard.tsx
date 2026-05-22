/*
  Loading Skeleton Card Component
*/
export default function SkeletonCard() {

  return (

    <div className="bg-gray-900 p-6 rounded-xl animate-pulse">

      {/* Fake Title */}
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>

      {/* Fake Summary */}
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>

      <div className="h-4 bg-gray-700 rounded w-5/6 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">

        <div className="space-y-2">

          <div className="h-4 bg-gray-700 rounded w-24"></div>

          <div className="h-4 bg-gray-700 rounded w-16"></div>

        </div>

        <div className="h-10 bg-gray-700 rounded w-28"></div>

      </div>

    </div>

  );
}