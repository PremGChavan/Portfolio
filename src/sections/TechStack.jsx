import TitleHeader from '../components/TitleHeader';
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const TechStack = () => {

  const stack = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={50} />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-700" size={50} />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400 animate-spin-slow" size={50} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" size={50} />,
    },
  ];


  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title="My Prefered Tech Stack"
          sub = "🤝 The Skills I Bring to the Table"
        />

        <div className="p-6 bg-black text-white-50 rounded-2xl shadow-xl max-w-md mx-auto text-center">
          <div className="flex justify-between items-center gap-10">
            {stack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                {tech.icon}
                <p className="mt-2 text-sm text-gray-600">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack