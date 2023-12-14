import { Text, View } from "react-native"
import { Drawer } from 'react-native-paper';

const Header = () => {

    return (
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="First Item"
                // active={active === 'first'}
                // onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                // active={active === 'second'}
                // onPress={() => setActive('second')}
            />
        </Drawer.Section>
    );

}

export { Header };