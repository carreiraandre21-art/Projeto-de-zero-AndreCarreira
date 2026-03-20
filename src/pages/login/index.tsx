import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

import { style } from "./style";

export default function Login() {
    return (
        <SafeAreaView style={style.safeArea}>
            <StatusBar style="dark" />

            <View style={style.background}>
                <View style={style.blobLarge} />
                <View style={style.blobSmall} />
                <View style={style.blobOutline} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={style.container}
            >
                <ScrollView
                    contentContainerStyle={style.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={style.content}>
                        <View style={style.hero}>
                            <View style={style.logoWrap}>
                                <Image
                                    source={require("../../assets/logoAndre.jpeg")}
                                    style={style.logo}
                                />
                            </View>

                            <Text style={style.eyebrow}>CARREIRA WEAR</Text>
                            <Text style={style.title}>Bem-vindo ao site</Text>
                            <Text style={style.subtitle}>
                                Entre para acompanhar seus projetos e continuar
                                de onde parou.
                            </Text>
                        </View>

                        <View style={style.card}>
                            <View style={style.inputGroup}>
                                <Text style={style.label}>E-mail</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    placeholder="voce@exemplo.com"
                                    placeholderTextColor="#907D6F"
                                    style={style.input}
                                />
                            </View>

                            <View style={style.inputGroup}>
                                <View style={style.rowBetween}>
                                    <Text style={style.label}>Senha</Text>
                                    <Pressable>
                                        <Text style={style.inlineLink}>
                                            Esqueci minha senha
                                        </Text>
                                    </Pressable>
                                </View>

                                <TextInput
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#907D6F"
                                    secureTextEntry
                                    style={style.input}
                                />
                            </View>

                            <Pressable style={style.primaryButton}>
                                <Text style={style.primaryButtonText}>
                                    Entrar
                                </Text>
                            </Pressable>

                            <Pressable style={style.secondaryButton}>
                                <Text style={style.secondaryButtonText}>
                                    Criar conta
                                </Text>
                            </Pressable>
                        </View>

                        <View style={style.footer}>
                            <Text style={style.footerText}>
                                Acesso rapido para continuar seu fluxo.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
