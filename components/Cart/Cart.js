import { View } from 'react-native';
import CartDetails from '../CartDetails/CartDetails'
import { Text } from 'react-native-paper';


const Cart = (props) => {
    return (
        <View>
            <Text>{props.children}</Text>
            <View>
                {
                    /* Affichage des éléments de mon panier avec CartDetails à partir de props.panierLength  */
                    
                    //Utilisé comme une boucle for
                    Array.from(Array(props.panierLength), (value, key) => {
                        return (
                                <CartDetails key={key} id={key} />
                        )
                    })
                }
            </View>
            <Text>
                {props.panierCost === 0 ? "Panier vide" : "Total price : " + props.panierCost}
            </Text>
        </View>
    )
}
export default Cart;