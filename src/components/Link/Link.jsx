/* eslint-disable react/prop-types */
const Link = ({ name, path }) => {
  return (
    <div>
      <a
        className="text-gray-600 font-normal text-base cursor-pointer lg:py-2 lg:px-4 lg:rounded-lg lg:hover:bg-gray-100 hover:text-gray-800"
        href={path}
      >
        {name}
      </a>
    </div>
  );
};

export default Link;
