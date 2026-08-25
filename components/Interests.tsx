const interests = ["Open Source Projects", "Hackathons", "Mentorship"];

export default function Interests() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <div className="flex flex-wrap items-center gap-3">
        <p className="eyebrow mr-2">Beyond work</p>
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-rose-200 bg-white px-4 py-1.5 text-sm text-plum-800"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
