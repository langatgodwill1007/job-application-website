import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-lg font-bold text-white">
                J
              </span>
              <span className="text-xl font-bold text-white">JobHub</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Connecting talented professionals with great opportunities across
              Africa and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-white">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              For Candidates
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/apply" className="hover:text-white">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white">
                  Job Listings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>hello@jobhub.example</li>
              <li>+254 700 000 000</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JobHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
