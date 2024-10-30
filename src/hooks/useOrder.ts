 import { useState } from "react"
 import { MenuItem, OrderItem } from "../types"
 
 export default function useOrder() {

    // state que guarda los elementos del menu, como tienen cantidad, uso <OrderItem[]> para decir que es un array de items de ordenes
    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = (item : MenuItem) => {
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        // si el item existe:
        if (itemExists) {
            // identifica cual es el elemento repetido (comparando con ids); si es el item, aumenta en 1 su quantity actual, sino es retorna el orderItem sin cambios
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity+1} :
                orderItem
            )
            //actualiza el state de order con el nuevo item agregado (con quantity modificada o no)
            setOrder(updatedOrder)
        
        // si el item no existe:
        } else {
            // creo un OrderItem copiando las propiedades del item + quantity: 1
            const newItem = {...item, quantity: 1}
            // actualizo el state de order con el item nuevo
            setOrder([...order, newItem])
        }  
    }

    return {
        order,
        addItem
    }
 }