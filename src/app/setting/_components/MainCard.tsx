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
  ];

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <a
      href={link}
      className={`relative flex gap-4 items-center justify-center bg-gradient-to-bl ${randomGradient} rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${className}`}
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
