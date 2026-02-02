import cognizant from "../assets/icon/cognizant.svg";
import here from "../assets/icon/here.svg";
import Lti from "../assets/icon/Lti.svg";
import nm from "../assets/icon/siet.png";
import srmv from "../assets/icon/srmv.svg";
import tp from "../assets/icon/ryan.png";

export const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "March' 24 - Present",
    points: [
      "Built and maintained RESTful APIs using NestJS, Node.js, and Express in a 4-member team, enabling reliable frontend-backend communication for enterprise applications.",
      "Optimized PostgreSQL queries, reducing average response times by 20% and improving overall system performance.",
      "Implemented JWT-based authentication and robust security controls (XSS, X-Frame-Options, Permissions-Policy, Referrer-Policy), strengthening application security posture.",
      "Designed encryption/decryption workflows using AES-256-CTR with HMAC and salt to protect sensitive user data.",
      "Deployed production applications to AWS (EC2, S3, Elastic Beanstalk) using CodePipeline for CI/CD, achieving 99.9% uptime.",
      "Developed React.js + Redux frontend features, improving application usability and maintainability.",
      "Led UI redesign initiatives that increased customer engagement by 40%.",
      "Implemented drag-and-drop functionality in React, reducing portfolio creation time by 40%.",
      "Integrated third-party services, including SMS and email providers, to enhance user communication.",
      "Participated in Agile ceremonies and peer code reviews, improving code quality and delivery velocity.",
      "Enforced unit and integration testing using Jest and React Testing Library to improve release stability.",
      "Containerized Node.js and NestJS services using Docker, improving deployment consistency across environments.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Innowrap Technologies",
    icon: here,
    iconBg: "#d1d5db",
    date: "Oct 2018 - March' 24",
    points: [
      "Led a cross-functional team of 10+ developers, delivering high-impact projects across fintech, retail, and enterprise domains while consistently meeting timelines and quality standards.",
      "Architected and developed full-stack applications using React.js, Redux, Node.js, and TypeScript, improving frontend performance and code maintainability.",
      "Introduced TypeScript across projects, reducing runtime errors and increasing long-term code stability.",
      "Executed responsive, mobile-first designs to enhance user experience across devices.",
      "Improved application load times and scalability through performance optimization techniques.",
      "Designed and delivered e-commerce platforms with dynamic payment gateway integrations, increasing checkout conversion rates by 25%.",
      "Collaborated closely with designers, backend engineers, and stakeholders to deliver production-ready solutions.",
      "Conducted end-to-end testing and bug fixes to ensure smooth releases and high customer satisfaction.",
      "Actively contributed to Agile/Scrum processes, supporting continuous improvement in development workflows.",
      "Enhanced Agile workflows with JIRA-based Scrum processes, resulting in a 230% increase in deliverables by optimizing SAFe frameworks.",
      "Centralized codebase through Git implementation and automated CI/CD pipelines to ensure code quality and compliance principles.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Innowrap Technologies",
    icon: Lti,
    iconBg: "#E6DEDD",
    date: "Oct 2015 - Oct 2018",
    points: [
      "Developed robust and secure server-side applications using PHP.",
      "Collaborated with cross-functional teams to implement new features and optimize existing code.",
      "Contributed to the integration of third-party APIs, enhancing system functionality.",
      "Maintained and updated databases to ensure efficient data processing.",
      "Actively participated in code reviews, addressing feedback for continuous improvement.",
      "Incorporated version control with GIT to streamline collaborative development and to maintain codebase integrity.",
      "Improved the performance and load times of web applications through optimization techniques.",
    ],
  },
];

export const education = [
  {
    title: "Shambhunath Institute of Engineering and Technology",
    company_name: "B.tech",
    icon: nm,
    iconBg: "#E6DEDD",
    date: "June 2011 - May 2015",
    points: [
      "University: DR. A.P.J Abdul Kalam",
      "Specialization: Computer Science",
      "Percentage: 60%",
    ],
  },

  {
    title: "Ryan college of engineering and management",
    company_name: "Diploma",
    icon: tp,
    iconBg: "#E6DEED",
    date: "June 2008 - May 2011",
    points: [
      "University: Tilak Maharashtra Vidyapeeth",
      "Stream: Computer Science",
      "Percentage: 63%",
    ],
  },

  {
    title: "S.R.M.V.",
    company_name: "Class 10th (Secondary)",
    icon: srmv,
    iconBg: "#d1d5db",
    date: "June 2007 - March 2008",
    points: [
      "Board: Maharashtra State Board of Secondary & Higher Secondary Education",
      "Percentage: 63%",
    ],
  },
];
