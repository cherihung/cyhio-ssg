export type experienceItem = {
  id: string;
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string;
};

const experience: experienceItem[] = [
  {
    id: "cap1",
    company: "Capital One",
    title: "Tech Lead, Senior Manager",
    dates: "OCT 2017 - PRESENT",
    location: "New York City & Vienna, VA",
    description:
      "Design and deliver reliable, resilient, and scalable software for customers and internal teams Capital One Shopping. Provide tech leadership to full-stack feature team on large-scale NodeJS/React application and event-based services. Mentor and manage junior engineers.",
  },
  {
    id: "aviture",
    company: "Aviture",
    title: "Frontend Engineer",
    dates: "MAR 2014 - OCT 2017",
    location: "Washington, DC",
    description:
      "Created  modular and shareable UI toolkit/frameworks. Designed functional prototypes and implemented applications in AngularJS, React and Backbone.",
  },
  {
    id: "edweek",
    company: "Editorial Projects in Education",
    title: "Online Creative Director",
    dates: "SEP 2010 - OCT 2014",
    location: "Bethesda, MD",
    description:
      "Designed and implemented UI and analytics capabilities for the publication’s flagship website and mobile application. Directed and executed data visualization, multimedia and information projects.",
  },
];

export default experience;
