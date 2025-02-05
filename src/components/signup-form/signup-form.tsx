import useUserStore from "@/app/stores/user.store";
import { signup } from "@/shared/api/ai/auth.service";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<{
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
  }>();

  const onSubmit: SubmitHandler<{
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
  }> = async (data) => {
    if (data.password !== data.passwordConfirm) {
      return;
    }
    await signup(data.email, data.name, data.password);
    useUserStore.setState({
      name: data.name,
      email: data.email,
    });
    navigate("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Добро пожаловать</CardTitle>
          <CardDescription>Создайте аккаунт прямо сейчас</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    {...register("name", { required: true })}
                    id="name"
                    type="text"
                    minLength={2}
                    placeholder="Иван Петров"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password-confirmation">
                    Подтверждение пароля
                  </Label>
                  <Input
                    {...register("passwordConfirm", { required: true })}
                    id="password-confirmation"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Зарегестрироваться
                </Button>
              </div>
              <div className="text-sm text-center">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Войти
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        Нажимая продолжить, вы соглашаетесь с нашими{" "}
        <a href="#">условиями использования</a> и{" "}
        <a href="#">политикой приватности</a>.
      </div>
    </div>
  );
}
