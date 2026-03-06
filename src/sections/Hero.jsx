import meImage from "../assets/images/me.jpg";
import { BiSolidDownload } from "react-icons/bi";

const Hero = ({ id }) => {
  const resumeLink = "./Full_Stack_Engineer.pdf";
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Full_Stack_Engineer.pdf";
    link.click();
  };
  return (
    <section
      id={id}
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold text-gray-700">
          Senior Full-Stack Engineer{" "}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-lg mb-4 info-text font-medium text-gray-500">
          Hi, I&apos;m Akhilesh Yadav. A passionate Lead Full Stack Engineer
          with 9.5+ years of experience building scalable, high-performance web
          applications using React.js, Node.js, NestJS, Express.js, TypeScript,
          PostgreSQL, and MongoDB. Experienced in Micro Frontend (MFE)
          architectures and Backend-for-Frontend (BFF) patterns to deliver
          modular and scalable enterprise solutions. Proven track record of
          leading cross-functional teams of 5+ developers, designing secure REST
          APIs, and deploying cloud-native applications on AWS with CI/CD
          pipelines. Strong expertise in microservices architecture, system
          design, performance optimization, and fintech/e-commerce platforms,
          delivering reliable and production-ready systems.
        </p>

        <div className="mt-11">
          <button className="btn third" onClick={handleDownloadResume}>
            <span className="github-text">Resume</span>
            <span className="github-icon">
              <BiSolidDownload size={20} />
            </span>{" "}
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center hero-image">
        <img
          src={meImage}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
