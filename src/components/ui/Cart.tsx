// import {useEffect} from 'react';
import shoppingBag from "/src/img/shopping_bag.svg";
// import { useSelector } from "react-redux";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";

  import {
    Card,
    // CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "@/components/ui/card";

import { Button } from "@/components/ui/button"

const Cart = () => { 
    // const elements = useSelector((state) => state.reducer.itemList);

    return (
        <div className="cartWrapper cursor-pointer flex flex-row items-center justify-center">
            <Drawer>
                <DrawerTrigger className="cursor-pointer">
                    <img src={shoppingBag} alt="Shopping Bag" />
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                        <DrawerDescription>
                            <Card className="w-full max-w-sm mx-[1rem] mb-[1rem]"></Card>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button className="w-fit mx-auto">Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Cart;