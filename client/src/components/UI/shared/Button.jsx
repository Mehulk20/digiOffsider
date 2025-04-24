function Button({ children }) {
  return (
    <button className="px-4 py-3 bg-blue-500 font-semibold text-white text-lg text-center rounded-md shadow-md">
      {children}
    </button>
  );
}

export default Button;
