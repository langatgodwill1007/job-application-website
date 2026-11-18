"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { jobs } from "@/lib/jobs";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const preselectedJob = searchParams.get("job") || "";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — simulate submission
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Application Submitted
        </h1>
        <p className="mt-3 text-gray-600">
          Thank you for applying! We've received your application and will be in
          touch soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Position Applying For
          </label>
          <select
            name="position"
            defaultValue={preselectedJob}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <option value="">Select a position</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title} — {job.company}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+254 700 000 000"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Nationality *
          </label>
          <input
            type="text"
            name="nationality"
            required
            placeholder="Kenyan"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Education *
          </label>
          <textarea
            name="education"
            required
            rows={3}
            placeholder="e.g. BSc Computer Science, University of Nairobi (2018 – 2022)"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Work Experience *
          </label>
          <textarea
            name="experience"
            required
            rows={4}
            placeholder="Describe your most relevant work experience..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Upload CV (PDF) *
          </label>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-primary-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700"
          />
          <p className="mt-1 text-xs text-gray-500">
            PDF, DOC, or DOCX — max 5 MB
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Cover Letter *
          </label>
          <textarea
            name="coverLetter"
            required
            rows={6}
            placeholder="Tell us why you're a great fit for this role..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-primary-700"
      >
        Submit Application
      </button>
    </form>
  );
}

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Apply for a Job
            </h1>
            <p className="mt-2 text-gray-600">
              Fill out the form below to submit your application.
            </p>
          </div>
        </div>

        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center">Loading…</div>}>
            <ApplicationForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
