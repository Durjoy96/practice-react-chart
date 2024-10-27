/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";

const Card = ({ data }) => {
  const { name, price, features } = data;
  return (
    <div className="p-12 rounded-3xl border flex flex-col">
      <div>
        <span className="text-3xl font-bold text-gray-800">{price}</span>
        <span className="text-lg font-bold text-gray-800">/m</span>
      </div>
      <p className="mt-2 text-gray-500 font-normal text-base">
        You are just getting started
      </p>
      <ul className="my-8 space-y-3 flex-grow">
        {features.map((item, id) => (
          <li key={id} className="flex gap-3 items-center">
            <FaCheck className="fill-orange-500" />
            <span className="text-base text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-full bg-orange-500 text-lg font-semibold text-orange-950">
        {name}
      </button>
    </div>
  );
};

export default Card;
