import * as React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const CardItem = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const article = boutiqueContext.articlesApp[props.articleInfo.id];
    return (
        <Card>
            <Card.Title title={article.name} />
            <Card.Content>
                <Text variant="bodyMedium">{article.description}</Text>
            </Card.Content>
            <Text variant="bodyMedium">Quantity : {article.qte}</Text>
            <Card.Cover source={article.url} />
            <Card.Actions>
                <Button onPress={
                            () => {
                                boutiqueContext.qteDecrement(article.id);
                            }}
                        disabled={props.articleInfo.qte <= 0 ? true : false}>
                    Buy
                </Button>
            </Card.Actions>
        </Card>
    );
};

export default CardItem;