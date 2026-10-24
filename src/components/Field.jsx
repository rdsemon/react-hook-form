import React from "react";

function Field({ children, label, error, htmlFor }) {
  const id = htmlFor || getChieldId(children);
  return (
    <div className="flex flex-col gap-4 mb-5">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

const getChieldId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};

export default Field;
