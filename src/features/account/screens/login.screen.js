import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";
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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

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
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={(p) => setPassword(p)}
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
              color='black'
              mode='contained'
              onPress={() => onLogin(email, password)}
            >
              Login
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
