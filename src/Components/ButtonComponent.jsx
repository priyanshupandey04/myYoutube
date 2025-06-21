const ButtonComponent = ({ name }) => {
  return (
    <button className="px-4 py-1 text-sm font-semibold text-black transition bg-gray-100 rounded-lg whitespace-nowrap hover:bg-gray-200 hover:bg-black hover:text-white">
      {name}
    </button>
  );
};

export default ButtonComponent;
