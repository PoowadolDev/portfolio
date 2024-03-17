export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <section className="container mx-auto content-center">
        <div className="relative w-full h-screen">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      </section>

    );
  }