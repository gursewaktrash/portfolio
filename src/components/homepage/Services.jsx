import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "App Development",
    "Web Design",
    "Wireframing",
    "UI/UX Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "NextJS",
    "TailwindCSS",
    "ReactJS",
    "MongoDB",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my current go to tech stack to make any projects happen. I'm constantly curious to learn more about the technology I use now, and new ones that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
