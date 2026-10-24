function Fieldset({ children, title }) {
  return (
    <fieldset className="grid grid-rows-3 px-12 py-6">
      <legend className="font-bold text-center uppercase mb-8 border-b border-b-amber-500">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
