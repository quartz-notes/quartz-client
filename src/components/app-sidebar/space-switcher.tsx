import { ChevronsUpDown, Plus } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/ui/sidebar";
import useSpaceStore from "@/app/stores/spaces.store";
import getById from "@/shared/lib/get-by-id";
import { TextMorph } from "@/shared/ui/text-morph";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useState } from "react";

export default function SpaceSwitcher() {
  const { isMobile } = useSidebar();
  const spaces = useSpaceStore((state) => state.spaces);
  const currentSpace = useSpaceStore((state) => state.currentSpace);
  const setCurrentSpace = useSpaceStore((state) => state.setCurrentSpace);
  const activeSpace = getById(spaces, currentSpace) || spaces[0];
  const addSpace = useSpaceStore((state) => state.addSpace);

  const [newSpaceName, setNewSpaceName] = useState("");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex justify-center items-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                  <DynamicIcon name={activeSpace.logo} className="size-4" />
                </div>
                <div className="grid flex-1 text-sm leading-tight text-left">
                  <span className="font-semibold truncate">
                    <TextMorph>{activeSpace?.name}</TextMorph>
                  </span>
                  <span className="text-xs truncate">пространство</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Пространства
              </DropdownMenuLabel>
              {spaces.map((space, index) => (
                <DropdownMenuItem
                  key={space.name}
                  onClick={() => setCurrentSpace(space.id)}
                  className="gap-2 p-2"
                >
                  <div className="flex justify-center items-center rounded-sm border size-6">
                    <DynamicIcon
                      name={space.logo}
                      className="size-4 shrink-0"
                    />
                  </div>
                  {space.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex justify-center items-center rounded-md border size-6 bg-background">
                    <Plus className="size-4" />
                  </div>
                  <div className="font-medium">Новое пространство</div>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Новое пространство</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                value={newSpaceName}
                onChange={(e) => setNewSpaceName(e.target.value)}
                placeholder="Название"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => {
                    if (!newSpaceName.length) return;
                    addSpace(newSpaceName);
                  }}
                  type="submit"
                >
                  Отправить
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
