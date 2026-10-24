import { useForm } from "react-hook-form";
import Field from "../components/Field";
import Fieldset from "../components/Fieldset";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data.email);
    console.log(data.password);
  };

  return (
    <div className="flex mx-auto w-full h-dvh justify-center px-4 py-6 bg-purple-200">
      <form
        className="rounded-xl text-gray-700 shadow-2xl w-160 h-150  px-2 py-4 bg-purple-100"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Fieldset title={"Enter your login details"}>
          <Field label={"Email"} error={errors.email}>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your password"
              className="border rounded-md h-10 px-2 border-purple-300 sm:w-2/3  focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be gratter then eight",
                },
              })}
              placeholder="Enter your password"
              className="border rounded-md h-10 px-2 border-purple-300 sm:w-2/3  focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </Field>
          <Field>
            <button
              className="cursor-pointer px-4 py-2  sm:w-1/3 bg-purple-400  uppercase"
              type="sumbit"
            >
              Submit
            </button>
          </Field>
        </Fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
