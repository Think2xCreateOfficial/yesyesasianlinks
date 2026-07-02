export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-64 bg-gray-100 w-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="h-96 bg-gray-50 rounded-2xl border border-gray-100" />
          </div>
          
          {/* Grid Skeleton */}
          <div className="flex-1 w-full">
            <div className="h-8 bg-gray-100 w-48 mb-6 rounded-lg" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-gray-50 rounded-xl border border-gray-100" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
