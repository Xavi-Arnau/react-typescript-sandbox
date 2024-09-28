import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  age: z
    .number({ message: "Must be a number" })
    .min(10, { message: "Must be over 10 plz" }),
});

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const ourSubmitMethod = (data: z.infer<typeof schema>) => {
    console.log(data);
    toast.success("Success!");
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center items-center p-8"
      onSubmit={handleSubmit(ourSubmitMethod)}
    >
      <input
        className="bg-slate-200 py-2 px-4 w-1/4"
        placeholder="name"
        {...register("name")}
      />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input
        className="bg-slate-200 py-2 px-4 w-1/4"
        placeholder="age"
        {...register("age", { valueAsNumber: true })}
      />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <input
        className="text-white bg-blue-600 py-2 px-4 rounded-xl w-1/6"
        type="submit"
      />
    </form>
  );
};

export default ZodForm;
