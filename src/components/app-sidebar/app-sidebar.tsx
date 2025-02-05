import * as React from "react";
import { LifeBuoy, Send } from "lucide-react";

import { NavNotes } from "@/components/app-sidebar/nav-notes";
import { NavSecondary } from "@/components/app-sidebar/nav-secondary";
import { NavUser } from "@/components/app-sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/shared/ui/sidebar";
import SpaceSwitcher from "./space-switcher";
import useUserStore from "@/app/stores/user.store";

const data = {
  navSecondary: [
    {
      title: "Поддержка",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Фидбек",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useUserStore((state) => state);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SpaceSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavNotes />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
