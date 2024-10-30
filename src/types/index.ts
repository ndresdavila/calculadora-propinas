// Objeto que aparece en el Menu
export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// Objeto que aparece en la Orden: hereda del tipo MenuItem y le agrega un atributo nuevo
export type OrderItem = MenuItem & {
    quantity: number
}