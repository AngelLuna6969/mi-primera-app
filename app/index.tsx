import { useState } from 'react';
import { Text, StyleSheet, View, Button, Touchable, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Index = () => {

    const [counter, setcounter] = useState(0)

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{counter}</Text>
            </View>
            <View>
                <Button
                    title='Incrementa'
                    color="gold"
                    onPress={() => setcounter(counter+1)}
                />
                <Button
                    title='Decrementa'
                    color="red"
                    onPress={() => setcounter(counter-1)}
                />
                <Button
                    title='Reiniciar'
                    color="green"
                    onPress={() => setcounter(0)}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Incrementar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Decrementar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Reinicar
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Pressable style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Incremetar
                    </Text>
                </Pressable>
                <Pressable style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Decrementar
                    </Text>
                </Pressable>
                <Pressable style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}>
                        Reiniciar
                    </Text>
                </Pressable>
            </View>
        </>
    )

}

export default Index;

const styles = StyleSheet.create({
    container: {
        //flex: 3, //toda la grid en este entorno son 6 columnas
        //al colocar solo el 1 toma toda la pantalla
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
    },
    btnTouchable: {
        backgroundColor: "dodgerblue",
        padding: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    btnTouchableText: {
        fontSize: 30
    }
})