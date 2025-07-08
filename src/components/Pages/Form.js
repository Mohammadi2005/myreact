import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const SubForm = () => {
    const schema = yup.object().shape({
        name: yup.string().required("نام اجباری هست"),
        email: yup.string().email().required("ایمیل اجباری هست"),
        // password: yup.string().min(4).max(12).required("Password is required"),
        password: yup.string().min(4).max(12).matches(/[a-z]+/)
            .matches(/[A-Z]+/).matches(/[0-9]+/).required("پسورد باید شامل حداقل یک a-z و A-Z و 0-9 باشد و طول ان بین 4 تا 15"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "پسوورد را تکرار کنید").required("پسوورد را تکرار کنید"),
        age: yup.number().positive().max(100).min(18).required("سن باید بین 18 تا 100 باشه"),
    });
    const {register, handleSubmit , formState:{errors}} = useForm({resolver : yupResolver(schema)})

    const onFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}><br/>
                <input type="text" placeholder="name" {...register("name")} /><br/>
                <input type="text" placeholder="email" {...register("email")} /><br/>
                <input type="password" placeholder="password" {...register("password")} /><br/>
                <input type="password" placeholder="confirm password" {...register("confirmPassword")} /><br/>
                <input type="number" placeholder="age" {...register("age")} /><br/>
                <input type="submit" />
                {errors.name && <p>{errors.name.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                {errors.age && <p>{errors.age.message}</p>}
            </form>
        </div>
    )
}
