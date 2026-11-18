import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobs";

export default function HomePage() {
  const featured = jobs.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-medium text-primary-700">
                🚀 Over 1,000 new jobs every week
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Find Your Next Job
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Discover thousands of opportunities from top companies. Take the
                next step in your career with JobHub — where talent meets
                opportunity.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/jobs"
                  className="w-full rounded-lg bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-primary-700 sm:w-auto"
                >
                  Search Jobs
                </Link>
                <Link
                  href="/jobs"
                  className="w-full rounded-lg border-2 border-primary-600 bg-white px-8 py-3.5 text-base font-semibold text-primary-700 transition hover:bg-primary-50 sm:w-auto"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              { label: "Live Jobs", value: "2,500+" },
              { label: "Companies", value: "800+" },
              { label: "Candidates", value: "50K+" },
              { label: "Placements", value: "12K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary-700">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Jobs
                </h2>
                <p className="mt-2 text-gray-600">
                  Handpicked opportunities that match great talent.
                </p>
              </div>
              <Link
                href="/jobs"
                className="text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                View all jobs →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-700">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-100">
              Join thousands of professionals finding their dream careers every
              month. It only takes a few minutes to apply.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              Start Your Application
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
