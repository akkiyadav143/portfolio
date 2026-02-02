import meImage from "../assets/images/working.gif";

const Aboutme = ({ id }) => {
  return (
    <div id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">About me</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={meImage}
              alt="Laptop"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <div className="lg:max-w-lg info-text">
              👋 Hey there! I&apos;m Akhilesh Yadav, a passionate Senior
              Full-Stack Engineer with 9.5+ years of experience crafting
              scalable, high-performance web applications.
              <div className="mt-1 lg:max-w-lg info-text">
                🚀 My journey began with PHP, HTML, and CSS, and over the years,
                I&apos;ve evolved to specialize in React.js, Node.js, NestJS,
                TypeScript, and PostgreSQL. I build dynamic user interfaces and
                robust backend systems that scale.
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                ⚛️ I thrive in the React.js ecosystem, leveraging Next.js,
                Redux, and modern tooling to build responsive, performant
                applications. On the backend, I design RESTful APIs with Node.js
                and NestJS, deployed on AWS infrastructure.
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                💡 I bring a security-first mindset with expertise in JWT
                authentication, AES-256 encryption, and implementing robust
                security controls. I work with both SQL (PostgreSQL, MySQL) and
                NoSQL (MongoDB) databases, and containerize applications with
                Docker for consistent deployments.
              </div>
              <div className="mt-1 lg:max-w-lg info-text">
                🌟 Beyond coding, I lead cross-functional teams of 10+
                developers, driving enterprise solutions across fintech and
                e-commerce domains. I follow Agile/Scrum methodologies and
                continuously optimize for performance and user experience.
                Let&apos;s connect and create something amazing together!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
