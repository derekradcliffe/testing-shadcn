import { createFileRoute } from '@tanstack/react-router';
import data from '../../data.json';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from '@/components/ui/button';

import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { addToCart } from "../../redux/cartSlice";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const dispatch = useDispatch();

  const increment = (item: any) => {
    const { title, id, price } = item;
    const quantity = 1;
    const totalPrice = price * quantity;
    
    dispatch(addToCart({ title, id, price, quantity, totalPrice }));
  };

  const chunkArray = (array: any, size: any) => {
    const result = [];
  
    for (let index = 0; index < array.length; index += size) {
        result.push(array.slice(index, index + size));
    }
  
    return result;
  };

  return (
    <div className="App">
      <div className='cardWrapper flex flex-col justify-evenly'>
      {chunkArray(data.foods, 3).map((row, rowIndex) => (
                <div className="flex md:flex-row flex-col mx-auto" key={rowIndex}>
                    {row.map((item: any, index: any) => (
                        <Card className="w-full max-w-sm mx-[1rem] mb-[1rem]" key={index}>
                            <CardHeader>
                                <img className='rounded-t-xl' src={item.image} alt="" />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="pb-[1rem]">{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-muted-foreground">{item.price}</p>
                                <Button 
                                  onClick={() => {increment(item)}}
                                  className="ml-auto cursor-pointer hover:bg-black hover:text-white">
                                    Order
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ))}
      </div>
    </div>
  )
}
