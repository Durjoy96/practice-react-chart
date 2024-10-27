/* eslint-disable react/prop-types */
const PrimaryButton = ({ text }) => {
  return (
    <button className="px-6 py-2 rounded-lg bg-orange-500 text-orange-950 text-lg font-semibold hover:text-orange-950/80 hover:bg-orange-500/80">
      {text}
    </button>
  );
};

export default PrimaryButton;
