import { FC } from "react"
import { CartContent } from "../components/Cart/CartContent"
import { Layout } from "../components/Layout"


const Cart:FC = () => {
    return (
        <Layout path="/cart" title="Корзина">
            <CartContent />
        </Layout>
    )
}
export default Cart