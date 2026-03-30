import { publications } from "@/lib/data";

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <h1 className="heading">
        My <span className="text-emerald">publications</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="bg-[rgb(4,7,29)] rounded-2xl p-6 border border-white/[0.1]"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-lg text-white">{pub.title}</h3>
              <span
                className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  pub.status === "Accepted"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/20 text-amber-400"
                }`}
              >
                {pub.status}
              </span>
            </div>
            <p className="text-sm text-white-100">{pub.venue}</p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:underline text-sm mt-2 inline-block"
              >
                arXiv &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
