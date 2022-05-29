import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Fooo-D </Title>
      <AccountContainer>
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size='large'>
          <AuthInput
            label='Repeat Password'
            value={repeatedPassword}
            textContentType='repeat-password'
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={(r) => setRepeatedPassword(r)}
          />
        </Spacer>

        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size='large'>
          {!isLoading ? (
            <AuthButton
              icon='email'
              mode='contained'
              color='black'
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton
          icon='backspace'
          color='black'
          mode='contained'
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
