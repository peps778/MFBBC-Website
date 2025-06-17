// components/AboutSection.jsx
import React from 'react';
import AboutCard from '../cards/AboutCard.jsx';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 text-center px-4 py-20 relative">
      <h2 className="text-3xl font-bold mb-12">About Us</h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <AboutCard
          title="Mission"
          text={`To glorify God by proclaiming the Gospel, teaching sound doctrine, and equipping every believer to fulfill their calling in Christ.\n\n"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost."\n— Matthew 28:19, KJV`}
        />
        <AboutCard
          title="Vision"
          text={`To be a spiritually vibrant, Bible-based church where lives are transformed, families are strengthened, and Christ is exalted.`}
        />
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
        <h3 className="font-semibold mb-2">Who We Are</h3>
        <p>
          We are a fellowship of believers grounded in the truth of God’s Word, committed to living out
          the Gospel in our everyday lives. Our church is a place for spiritual growth, genuine fellowship,
          and active service.
        </p>
        <p className="italic mt-4">
          “And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.”<br />
          — Acts 2:42, KJV
        </p>
      </div>
    </section>
  );
}
