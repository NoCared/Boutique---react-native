import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import { Header } from './components/Header/Header';
import articles from './articles';
import BoutiqueContext from './BoutiqueContext';
import SectionArticles from './components/SectionArticles/SectionArticles';
import Cart from './components/Cart/Cart';



function App() {

    const[state, setState] = React.useState({
        articlesApp: articles,
        panier: [],
        totalPrice: 0
    })

    /**
     * Modifie la quantité d'article dans le panier pour un id spécifique 
     * @param {int} id 
     * @param {int} qteModify 
     */
    const modifyItemPanier = (id, qteModify) => {
        const index = state.panier.findIndex(x => x.id === id);
        if (index >= 0) {
            setState(prevState => {
                const newPanier = [...prevState.panier];
                newPanier[index] = { ...newPanier[index], qte: newPanier[index].qte + qteModify };
                const modifPrice = state.totalPrice + qteModify * state.articlesApp[id].price;

                if (newPanier[index].qte <= 0) {
                    newPanier.splice(index, 1);
                }
                return {
                    ...prevState,
                    totalPrice: modifPrice,
                    panier: newPanier,
                };
            });
        }
        else if (qteModify > 0) {
            const modifPrice = state.totalPrice + qteModify * state.articlesApp[id].price;
            setState({
                ...state,
                totalPrice: modifPrice,
                // mise à jour de mon panier avec l'ajout de i
                panier: [...state.panier, { id: id, qte: qteModify }],
            });
        }
    }

    //Creation d'une méthode pour décrémenter un article
    const qteDecrement = (i) => {
        if (state.articlesApp[i].qte > 0) {
            
            let newArticle = state.articlesApp.slice();
            newArticle[i].qte--;
            setState({
                ...state,
                // mise à jour de ma qte pour i (id de l'article)
                articlesApp: newArticle,
                // // mise à jour de mon panier avec l'ajout de i
               
            });

            modifyItemPanier(i, 1);
        }
    }

    //Creation d'une méthode pour incrémenter un article
    const qteIncrement = (i) => {
        let newArticle = state.articlesApp.slice();
        newArticle[i].qte++;
        setState({
            ...state,
            articlesApp: newArticle,
        });

        modifyItemPanier(i, -1);
    }


    return (
        <BoutiqueContext.Provider value={{
            ...state,
            'qteDecrement': (id)=>qteDecrement(id),
            'qteIncrement': (id)=>qteIncrement(id)
            }}>
            <SafeAreaView>
                <ScrollView>
                    <Header></Header>
                    <Cart panierLength={state.panier.length} panierCost={state.totalPrice}>Texte du titre pour le composant Cart</Cart>
                    <SectionArticles articlesProp={state} />
                </ScrollView>
            </SafeAreaView>
        </BoutiqueContext.Provider>
    );
    
}



const styles = StyleSheet.create({
    exempleText: {
        fontWeight: '900',
        fontSize: 48,
        padding: 8,
        color: '#000000',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
