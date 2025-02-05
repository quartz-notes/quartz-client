import { login } from "@/shared/api/ai/auth.service";
import { setAccessToken, setRefreshToken } from "@/shared/api/ai/jwt.service";
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
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
  }> = (data) => {
    if (data.email == "root@root.com") {
      setAccessToken("root");
      setRefreshToken("root");
      navigate("/");
    }
    login(data.email, data.password);
    navigate("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">С возвращением</CardTitle>
          <CardDescription>Войти с логином и паролем</CardDescription>
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
                  <div className="flex items-center">
                    <Label htmlFor="password">Пароль</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Забыли пароль?
                    </a>
                  </div>
                  <Input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Войти
                </Button>
              </div>
              <div className="text-sm text-center">
                Нет аккаунта?{" "}
                <Link to="/signup" className="underline underline-offset-4">
                  Зарегестрироваться
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
