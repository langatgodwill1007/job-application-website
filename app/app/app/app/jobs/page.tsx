import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobs";

export const metadata = {
  title: "Browse Jobs — JobHub",
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Available Jobs
            </h1>
            <p className="mt-2 text-gray-600">
              Explore {jobs.length} open positions from top companies.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
