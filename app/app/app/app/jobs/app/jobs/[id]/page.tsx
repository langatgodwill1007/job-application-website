import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getJobById, jobs } from "@/lib/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export default function JobDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const job = getJobById(params.id);
  if (!job) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/jobs"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Back to jobs
          </Link>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                <p className="mt-2 text-lg text-gray-600">{job.company}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-700">
                    {job.type}
                  </span>
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                  <span>🕒 Posted {job.posted}</span>
                </div>
              </div>
              <Link
                href={`/apply?job=${job.id}`}
                className="inline-block rounded-lg bg-primary-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-primary-700"
              >
                Apply Now
              </Link>
            </div>

            <div className="mt-10 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Job Description
                </h2>
                <p className="mt-3 leading-relaxed text-gray-700">
                  {job.description}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Responsibilities
                </h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Requirements
                </h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <Link
                href={`/apply?job=${job.id}`}
                className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition hover:bg-primary-700"
              >
                Apply for this position
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
