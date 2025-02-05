import { LoginForm } from "@/components/login-form/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-6 min-h-svh bg-muted md:p-10">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <a
          href="#"
          className="flex gap-2 items-center self-center text-3xl font-medium"
        >
          <div className="flex justify-center items-center w-10 h-10 rounded-md text-primary-foreground">
            <img src="/logo.svg" alt="" />
          </div>
          quartz
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
