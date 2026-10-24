function Input({ name, id, type, placeholder, register }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      {...register}
      className="border rounded-md h-10 px-2 border-purple-300 sm:w-2/3  focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
  );
}

export default Input;
