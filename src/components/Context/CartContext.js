import React, {useContext,createContext, useState} from 'react'


export const DataContext = React.createContext()


export const CartContext = ({children}) => {

    const [productCart, setproductCart] = useState([])



    const addItemToCart = (item, quantity)=>{
        if(isInCart(item.id)){
            //el producto ya existe
            const newProducts = [...productCart];
            //buscamos la posicion del producto dentro del arreglo.
            const productIndex = newProducts.findIndex(prod=>prod.item.id === item.id);
            //index del producto
            console.log(newProducts[productIndex]);
            newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
            //cantidad actualizada del producto que se repite
            console.log('productos actualizado',newProducts);
            setproductCart(newProducts);
        } else{
            //el producto no ha sido agregado
            const newProduct = {
                item,
                quantity
            }
            console.log('newProduct',newProduct)
            //agregamos el nuevo producto al carrito
            setproductCart([...productCart, newProduct]);
        }
    }

    const isInCart = (id) =>{
        productCart.some(product=>product.item.id === id);
       

    }

    const removeItem = (itemId) =>{
        const nuevosProductos = productCart.filter(producto=>producto.item.id !== itemId);
        setproductCart(productCart);
        console.log('nuevosProductos',nuevosProductos)
    }

    const removeAll = ()=>{
        setproductCart([]);
    }
     


    //  const isInCart = (id,quantity) =>{
    //       const inCart = productCart.some((prod) => prod.id === id)
    //     if (inCart) {
    //         const products = productCart.map(prod=>{
    //             if (prod.id === productCart.id){
    //                 prod.quantity +=1
    //                 return prod
    //             }else{
    //                 return prod
    //             }
    //             setproductCart(prod)
    //         })
    //     } }



    return (
            
        <CartContext.Provider value={{
            addItemToCart,
            removeAll,
            removeItem,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
