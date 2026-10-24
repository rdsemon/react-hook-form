import { useForm } from "react-hook-form";
import Field from "../components/Field";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex mx-auto w-full min-h-dvh justify-center px-4 py-6 bg-purple-200">
      <form
        className="rounded-xl text-gray-700 shadow-2xl w-160   px-2 py-4 bg-purple-100"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Fieldset title="Register to an new account">
          <Field label={"Name"} error={errors.name}>
            <Input
              type={"text"}
              name={"name"}
              id={"name"}
              placeholder={"Enter your Name"}
              register={register("name", { required: "This name is required" })}
            />
          </Field>
          <Field label={"Email"} error={errors.email}>
            <Input
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder={"Enter your email"}
              register={register("email", { required: "Eamil is required" })}
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <Input
              type={"password"}
              name={"password"}
              id={"password"}
              placeholder={"Enter your password"}
              register={register("password", {
                required: "Password is required",
              })}
            />
          </Field>
          <Field label={"Confirm Password"} error={errors.confirmPassword}>
            <Input
              type={"password"}
              name={"confirmPassword"}
              id={"confirmPassword"}
              placeholder={"Enter Confirm password"}
              register={register("confirmPassword", {
                required: "This filed is required",
                validate: (value, formValues) =>
                  value === formValues.password || "Password do not match",
              })}
            />
          </Field>
          <Field>
            <button
              className="cursor-pointer px-4 py-2  sm:w-1/3 bg-purple-400  uppercase"
              type="submit"
            >
              Submit
            </button>
          </Field>
        </Fieldset>
      </form>
    </div>
  );
}

export default RegisterForm;
