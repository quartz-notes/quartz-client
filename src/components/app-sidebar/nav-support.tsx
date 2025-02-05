import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Label } from "@/shared/ui/label";
import { SidebarMenuItem, SidebarMenuButton } from "@/shared/ui/sidebar";
import { Switch } from "@/shared/ui/switch";
import { Textarea } from "@/shared/ui/textarea";
import { LifeBuoy } from "lucide-react";

function NavSupport() {
  return (
    <SidebarMenuItem>
      <Dialog>
        <DialogTrigger asChild>
          <SidebarMenuButton size="sm">
            <LifeBuoy />
            <span>Поддержка</span>
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Обратиться в поддержку</DialogTitle>
            <DialogDescription>Опишите вашу проблему</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea />
            <div className="flex items-center space-x-2">
              <Switch id="send-analytics" />
              <Label htmlFor="send-analytics">Поделиться статистикой</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Отправить</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}

export default NavSupport;
