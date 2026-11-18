import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — JobHub",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary-50 to-white">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About JobHub
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              We're on a mission to connect talented professionals with
              meaningful opportunities across Africa and the world.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4">
              JobHub was founded with a simple belief: everyone deserves access
              to great career opportunities, no matter where they live. We
              started as a small team of engineers and HR specialists frustrated
              by how difficult it was for talented people to find work that
              matched their skills.
            </p>
            <p className="mt-4">
              Today, JobHub connects over 50,000 candidates with more than 800
              companies across multiple industries. We're proud to have helped
              thousands of people find their dream jobs — from recent graduates
              landing their first role to seasoned professionals making bold
              career moves.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Our Values
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Transparency",
                  desc: "We believe job seekers deserve honest, clear information about every opportunity.",
                },
                {
                  title: "Accessibility",
                  desc: "Great jobs should be available to everyone, regardless of location or background.",
                },
                {
                  title: "Quality",
                  desc: "We carefully vet every employer and role to ensure a high-quality experience.",
                },
                {
                  title: "Support",
                  desc: "We're with you at every step — from search to application to offer.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-primary-700">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Our Team
            </h2>
            <p className="mt-4">
              We're a remote-first team spread across East and West Africa,
              united by our passion for helping people build meaningful
              careers. Our leadership brings decades of experience in
              recruitment, technology, and product design.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
