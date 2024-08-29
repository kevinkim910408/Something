export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="flex items-center justify-center min-h-content">
      <div className="max-w-[1024px] h-content w-11/12 border-8 border-black rounded-[36px] bg-cover bg-center relative overflow-hidden shadow-[0px_0px_10px_0px_#718096]">
        <SettingHeader currentTime={currentTime} />

        <div className="flex items-center justify-center h-[calc(100%-104px)]">
          {children}
        </div>

        <SettingFooter />
      </div>
    </div>
  );
}

const SettingHeader = ({ currentTime }: { currentTime: string }) => {
  return (
    <div className="flex justify-between items-center px-4 h-6 bg-gray-300">
      {/* Time */}
      <div className="flex items-center space-x-2">
        <div className="text-black text-sm font-semibold">{currentTime}</div>
      </div>
      <div className="flex items-center space-x-2">
        {/* Signal Strength */}
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="w-1.5 h-2 bg-black rounded-full"></div>
          <div className="w-1.5 h-2.5 bg-black rounded-full"></div>
          <div className="w-1.5 h-3 bg-black rounded-full"></div>
        </div>

        {/* Battery Icon */}
        <div className="flex items-center space-x-1">
          <div className="w-6 h-3.5 border-2 border-black relative">
            <div className="w-4/5 h-full bg-black"></div>
          </div>
          <div className="w-1 h-2 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

const SettingFooter = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-black">
      <button className="w-14 h-14 bg-gray-400 rounded-full shadow-md flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full" />
      </button>
    </div>
  );
};
