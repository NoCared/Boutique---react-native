


import styles from './CartDetails.style.js'
import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BoutiqueContext from '../../BoutiqueContext';

const CartDetails = (props) => {
    const boutiqueContext = useContext(BoutiqueContext);
    const articlePanier = boutiqueContext.panier[props.id];
    const article = boutiqueContext.articlesApp[articlePanier.id];

    return (
        <View style={styles.cartDetails}>
            <View style={styles.iconCartDetails}>
                <Image source={article.url } style={styles.iconImage} />
            </View>
            <Text>{article.name}</Text>
            <TouchableOpacity onPress={() => boutiqueContext.qteIncrement(articlePanier.id)}>
                <Text style={styles.cartDetailsText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.cartDetailsText}>{articlePanier.qte}</Text>
            <TouchableOpacity
                onPress={() => boutiqueContext.qteDecrement(articlePanier.id)}
                disabled={article.qte <= 0}
            >
                <Text style={styles.cartDetailsText}>+</Text>
            </TouchableOpacity>
            <Text>{article.price * articlePanier.qte} £</Text>
        </View>
    );
};

export default CartDetails;