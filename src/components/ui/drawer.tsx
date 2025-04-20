import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { type RootState } from "../../../redux/store";
import { clearCart } from "../../../redux/cartSlice";
import shoppingBag from "/src/img/shopping_bag.svg";

import { cn } from "@/lib/utils"
import { Button } from "./button";

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerBag({ className, ...props }: React.ComponentProps<"div">) {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const elements = useTypedSelector((state) => state.cart.itemList);

  return (
    <div
      data-slot="drawer-bag"
      className={cn("mt-auto flex flex-col gap-2", className)}
      {...props}
    >
      <img src={shoppingBag} alt="Shopping Bag" />
      <div className="absolute lg:top-[-0.5rem] lg:left-[-0.5rem] top-[-0.8rem] left-[-0.8rem] bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {elements.reduce((sum, item) => sum + item.quantity, 0)}
      </div>
    </div>
  )
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const elements = useTypedSelector((state) => state.cart.itemList);

  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    >
      <div>
      {elements.length > 0 ? (
        elements.map((item) => (
          <ul>
            <li>
              <div className="flex flex-row justify-center gap-2 items-center">
                <p className="text- text-muted-foreground font-bold">{item.title}</p>
                <p className="text-sm text-muted-foreground">${item.price}</p>
                <p className="text-sm text-muted-foreground">x{item.quantity}</p>
              </div>
            </li>
          </ul>
        ))
      ) : (
        <div className="flex flex-row justify-center gap-2">
          <p className="text- text-muted-foreground">No items in bag</p>
        </div>
      )}
      </div>
    </div>
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function DrawerTotal({ className, ...props }: React.ComponentProps<"div">) {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const elements = useTypedSelector((state) => state.cart.itemList);
  const totalPrice = elements.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
  const formattedTotal = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalPrice);

  return (
    <div
      data-slot="drawer-total"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    >
      <div className="flex flex-row justify-center gap-2 items-center">
        <p className="text- text-muted-foreground">Total</p>
        <p className="text-sm text-muted-foreground">${formattedTotal}</p>
      </div>
    </div>
  )
}

function DrawerClearTotal({ className, ...props }: React.ComponentProps<"div">) {
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  }

  return (
    <div
      data-slot="drawer-total"
      className={cn("mt-auto flex flex-col gap-2", className)}
      {...props}
    >
      <Button className="bg-red-700 hover:bg-red-400" onClick={clear}>Clear</Button>
    </div>
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerTotal,
  DrawerClearTotal,
  DrawerBag,
}
