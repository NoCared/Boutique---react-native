import { Drawer } from 'react-native-paper';

const Header = () => {

    return (
        <Drawer.Section title="Some title"  >
            <Drawer.Item
                label="Gallery"
                icon={require('../../assets/icons/home.png')}
            // active={active === 'first'}
            // onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Articles"
                icon={require('../../assets/icons/shopping-cart.png')}
            // active={active === 'first'}
            // onPress={() => setActive('first')}
            />
        </Drawer.Section>
    );

}

export { Header };