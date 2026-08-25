const awards = [
  {
    title: "Leadership Recognition — House Prefect (RA)",
    place: "St. Louis Senior High School",
    period: "09/2021",
    detail:
      "Recognized for exemplary leadership, discipline enforcement, and effective support in managing residential student affairs for ~100 students; directly mentored and impacted 7 individuals through guidance and conflict resolution.",
  },
  {
    title: "Academic Excellence Award — Mathematics & Science",
    place: "St. Louis Senior High School",
    period: "09/2020",
    detail:
      "Awarded for outstanding academic performance, ranking among the top 10 students with consistently high grades in mathematics and science.",
  },
  {
    title: "Leadership Recognition — Editorial Board",
    place: "St. Louis Senior High School",
    period: "02/2021",
    detail:
      "Recognized for leading media initiatives and coordinating 2 student-driven projects that reached and influenced 200+ students, raising awareness on social and environmental issues.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="rule-dots mb-16" />
      <p className="eyebrow mb-10">Awards</p>
      <div className="grid gap-8 sm:grid-cols-3">
        {awards.map((item) => (
          <div key={item.title} className="rounded-2xl bg-gold-400/10 p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-gold-600">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-lg text-plum-950">{item.title}</h3>
            <p className="mt-1 text-sm text-plum-500">{item.place}</p>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
