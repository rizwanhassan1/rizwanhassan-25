'use client';
import react from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-green-200 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src="/1.jpg"
              alt="Profile"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-semibold text-blue-700 text-center-justify">Rizwan Hassan</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to My Professional AI Portfolio
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          In today’s fast-evolving digital world, AI automation is reshaping industries by optimizing workflows, improving efficiency, and enabling smarter decision-making. My focus is on developing intelligent solutions that drive innovation and deliver real business value through automation and AI-driven tools.
        </p>
      </section>
    </main>
  )
}

export default Page;
