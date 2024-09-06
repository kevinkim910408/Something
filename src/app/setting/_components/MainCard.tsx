import React from "react";

interface MainCardProps {
  title: string;
  link: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  link,
  desc,
  icon,
  className,
}) => {
  const gradients = [
    "from-pink-500 to-orange-500",
    "from-purple-500 to-indigo-500",
    "from-green-400 to-blue-500",
    "from-yellow-400 to-red-500",
    "from-teal-400 to-cyan-500",
    "from-blue-500 to-purple-600",
    "from-red-500 to-yellow-500",
    "from-indigo-500 to-pink-500",
    "from-green-300 to-teal-500",
    "from-orange-400 to-yellow-500",
    "from-blue-400 to-cyan-600",
    "from-pink-400 to-red-500",
    "from-purple-400 to-pink-600",
    "from-teal-300 to-green-500",
    "from-yellow-300 to-orange-400",
    "from-cyan-500 to-teal-600",
    "from-red-400 to-pink-500",
    "from-indigo-400 to-blue-500",
    "from-purple-300 to-violet-500",
    "from-lime-400 to-green-500",
  ];
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <a
      href={link}
      className={`relative h-full flex gap-4 items-center justify-center bg-gradient-to-bl ${randomGradient} transform transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="text-white text-3xl">{icon}</div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-white opacity-75">{desc}</p>
      </div>
    </a>
  );
};

export default MainCard;
