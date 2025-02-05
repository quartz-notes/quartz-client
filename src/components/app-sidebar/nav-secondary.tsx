import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/shared/ui/sidebar";
import NavSupport from "./nav-support";

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <NavSupport />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
