import shoppingBag from "/src/img/shopping_bag.svg";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    // DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    // DrawerTitle,
    DrawerTrigger,
    DrawerTotal,
    DrawerClearTotal,
  } from "@/components/ui/drawer";

// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cart = () => {
    return (
        <div className="cartWrapper cursor-pointer flex flex-row items-center justify-center">
            <Drawer>
                <DrawerTrigger className="cursor-pointer">
                    <img className="m-[1rem]" src={shoppingBag} alt="Shopping Bag" />
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader className="border-b-2 border-b-slate-200 w-fit mx-auto">
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerTotal className="w-fit mx-auto font-bold" />
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <Button className="w-fit cursor-pointer bg-black text-white border-black border-1 hover:bg-white hover:text-black hover:border-black hover:border-1">Submit</Button>
                            <DrawerClearTotal></DrawerClearTotal>
                            <DrawerClose>
                                <Button className="cursor-pointer bg-white text-black border-black border-1 hover:bg-black hover:text-white hover:border-s hover:border-1" variant="outline">Cancel</Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Cart;