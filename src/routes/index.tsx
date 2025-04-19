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

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { type RootState } from "../../redux/store";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const elements = useTypedSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();

  const increment = (item: any) => {
    const { title, id, price } = item;
    const quantity = 1;
    const totalPrice = price * quantity;

    dispatch(addToCart({ title, id, price, quantity, totalPrice }));
  };

  const decrement = (item: any) => {
    const { id } = item;

    dispatch(removeFromCart({ id}));
  }

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
                            <CardFooter className='flex justify-between flex-col lg:flex-row'>
                                <p className="text-sm text-muted-foreground font-semibold">{item.price}</p>
                                <CardContent className='flex flex-row pt-[1rem] lg:pt-[0]'>
                                  <Button 
                                    onClick={() => {increment(item)}}
                                    className="ml-auto cursor-pointer bg-black text-white border-black border-1 hover:bg-white hover:text-black hover:border-black hover:border-1">
                                      {elements.some((cartItem) => cartItem.id === item.id) ? (
                                        elements
                                        .filter((cartItem) => cartItem.id === item.id)
                                        .map((cartItem) => (
                                          <div key={cartItem.id}>+1</div>
                                        ))
                                      ) : (
                                          <div>Order</div>
                                      )}
                                  </Button>

                                  
                                    {elements.some((cartItem) => cartItem.id === item.id) ? (
                                      elements
                                      .filter((cartItem) => cartItem.id === item.id)
                                      .map((cartItem) => (
                                        <CardContent key={cartItem.id} className='flex justify-center self-center'>
                                          <div>{cartItem.quantity}</div>
                                        </CardContent>
                                      ))
                                    ) : (
                                      <></>
                                    )}
                                  
                                  {elements.some((cartItem) => cartItem.id === item.id) ? (
                                    <Button 
                                    onClick={() => {decrement(item)}}
                                    className="ml-auto cursor-pointer bg-black text-white border-black border-1 hover:bg-white hover:text-black hover:border-black hover:border-1">
                                    -1
                                    </Button>
                                  ) : (
                                    <></>
                                  )}
                                </CardContent>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ))}
      </div>
    </div>
  )
}

export default App;