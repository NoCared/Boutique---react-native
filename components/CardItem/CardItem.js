import * as React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CardItem = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    const article = boutiqueContext.articlesApp[props.articleInfo.id];
    return (
        <Card>
            <Card.Title title={article.name}/>
            <Card.Content>
                <Text variant="bodyMedium">{article.description}</Text>
            </Card.Content>
            <Card.Cover source={article.url} />
            <Card.Actions>
                <Button
                    onClick={
                        () => {
                            boutiqueContext.qteDecrement(props.articleInfo.id);
                        }}
                    disabled={props.articleInfo.qte <= 0 ? true : false}
                >Buy</Button>
            </Card.Actions>
        </Card>
    );
};

export default CardItem;