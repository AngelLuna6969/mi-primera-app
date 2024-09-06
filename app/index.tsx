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
            
            <View style={styles.rowContainer}>
            <View style={{flex:2}}>
            <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(counter+1)}
                    >
                        Incrementar
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:2}}>
                <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(counter-1)}>
                        Decrementar
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:2}}>
                <TouchableOpacity style={styles.btnTouchable}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(0)}>
                        Reinicar
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowContainerReversible}>
                <Pressable style={[styles.btnPressable, {flex:1}]}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(counter+1)}>
                        Incremetar
                    </Text>
                </Pressable>
                <Pressable style={[styles.btnPressable, {flex:2}]}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(counter-1)}>
                        Decrementar
                    </Text>
                </Pressable>
                <Pressable style={[styles.btnPressable, {flex:3}]}>
                    <Text style={styles.btnTouchableText}
                    onPress={() => setcounter(0)}>
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
        fontSize: 15
    },
    rowContainer:{
      flexDirection:"row"
    },
    btnPressable:{
      backgroundColor: "lightblue",
      padding: 20,
      borderRadius:30,
      justifyContent: "center",
      alignItems: "center"
    },
    rowContainerReversible:{
      flexDirection:"row-reverse"
    }
})