import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My <span className="text-emerald">tech stack</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-emerald text-sm font-bold uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <ul>
              {group.items.map((item) => (
                <li key={item} className="text-white-200 text-sm py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
