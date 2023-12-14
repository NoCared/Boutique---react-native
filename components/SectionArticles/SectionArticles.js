import { View } from 'react-native';
import CardItem from '../CardItem/CardItem.js';
import styles from './SectionArticles.style.js';
import { Text } from 'react-native-paper';

const SectionArticles = (props)=>{
    return(
        <View>
            <Text>Mes fabuleux articles : </Text>
            {/* emplacement de mes cards articles */}
            <View style={styles.articleList}>
                {
                    props.articlesProp.articlesApp.map((value,index)=>{
                        return(
                            <CardItem key={index} articleInfo={value}/>
                        )
                    })
                }
            </View>
        </View>
    )
}
export default SectionArticles;