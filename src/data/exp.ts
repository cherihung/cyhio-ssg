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
    id: "cap0",
    company: "Capital One",
    title: "Director of Software Engineering, Shopping",
    dates: "FEB 2023 - PRESENT",
    location: "New York City",
    description:
      "Directs the technology space behind Capital One Shopping's Price Comparison features. Provide technical and strategic leadership to full-stack teams delivering large-sclae and highly efficient customer-facing applications.",
  },
  {
    id: "cap1",
    company: "Capital One",
    title: "Senior Manager/Tech Lead, Shopping",
    dates: "JUL 2021 - PRESENT",
    location: "New York City",
    description:
      "Design and deliver reliable, resilient, and scalable software for customers and internal teams Capital One Shopping. Provide tech leadership to full-stack feature team on large-scale NodeJS/React application and event-based services. Mentor and manage a team of engineers.",
  },
  {
    id: "cap2",
    company: "Capital One",
    title: "Master Software Engineer/Tech Lead, Shopping",
    dates: "JAN 2019 - JUL 2021",
    location: "New York City",
    description:
      "Full-stack engineering for Capital One Shopping, delivering reliable, resilient software and tooling for customers and internal teams. Special projects include exploration into GraphQL/Apollo with React, large-scale NodeJS and event-based architecture.",
  },
  {
    id: "cap3",
    company: "Capital One",
    title: "Master Software Engineer/Tech Lead, Commercial Tech",
    dates: "OCT 2017 - JAN 2019",
    location: "Vienna, VA",
    description:
      "Focused on UI engineering efforts in Capital One's Commercial Card and leading a team of front-end and back-end software engineers to deliver products and features. Mentoring and managing performances of junior engineers.",
  },
  {
    id: "aviture",
    company: "Aviture",
    title: "UI Engineer",
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
