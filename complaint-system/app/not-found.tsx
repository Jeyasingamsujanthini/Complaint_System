import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] grid md:grid-cols-2 items-center gap-50">

        {/* Content Section */}
      <div className="card max-w-md mx-auto text-center">

        <h1 className="error">ERROR</h1>

        <h1 className="text-8xl font-bold text-red-800">
          404 </h1>

        <h1 className="text-3xl font-bold text-gray-800">
          Page Not Found </h1>

        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking for does not exist or has been moved.
        </p><br></br><br></br>

        <Link href="/">
          <button className="primary-btn w-full mt-6">
            Back to Home
          </button>
        </Link>

      </div>

      {/* Illustration Section */}
      <div className="flex justify-center">
        <Image
          src="/images/404.png"
          alt="404 page not found"
          width={500}
          height={500}
          priority
        />
      </div>

      

    </div>
  );
}