import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import tailwind from "../assets/icon/tailwind.svg";
import js from "../assets/icon/js.svg";
import ts from "../assets/icon/ts.svg";
import react from "../assets/icon/react.svg";
import nextjs from "../assets/icon/nextjs.svg";
import redux from "../assets/icon/redux.svg";
import mongoDB from "../assets/icon/mongoDB.svg";
import git from "../assets/icon/git.svg";
import docker from "../assets/icon/docker.svg";
import aws from "../assets/icon/aws.svg";
import mysql from "../assets/icon/mysql.svg";
import php from "../assets/icon/php.svg";
import node from "../assets/icon/node.svg";

const Skills = () => {
  const icons = [
    { name: "HTML", src: html },
    { name: "CSS", src: css },
    { name: "Tailwind CSS", src: tailwind },
    { name: "JavaScript", src: js },
    { name: "TypeScript", src: ts },
    { name: "React", src: react },
    { name: "Next.js", src: nextjs },
    { name: "Node.js", src: node },
    { name: "Php", src: php },
    { name: "Redux", src: redux },
    { name: "MongoDB", src: mongoDB },
    { name: "MySql", src: mysql },
    { name: "Aws", src: aws },
    { name: "Docker", src: docker },
    { name: "Git", src: git },
  ];

  return (
    <div className="py-1">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Tech Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-pgreen hover:scale-105 "
            >
              <img src={icon.src} alt={icon.name} className="w-20 h-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
