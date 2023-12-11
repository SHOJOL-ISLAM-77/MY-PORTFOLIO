
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ progress, color }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: color,
    height: '7px', // Adjust the height as needed
    borderRadius: '0.25rem', // Rounded corners
  };

  return (
    <div className="w-full bg-gray-500 rounded-lg overflow-hidden">
      <div className="h-full" style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
