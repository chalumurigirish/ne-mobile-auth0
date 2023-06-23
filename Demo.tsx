import {View, Text, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const Demo = () => {
  const {authorize, user, isLoading, error, clearSession} = useAuth0();

  const login = async () => {
    await authorize({scope: 'openid profile email'}); // authorize({scope: 'openid profile email'}, {customScheme: 'CUSTOM_SCHEME'}) when using Expo or a custom scheme
  };
  const logout = async () => {
    await clearSession(); // clearSession({customScheme: 'CUSTOM_SCHEME'}) when using Expo or a custom scheme
  };
  if (isLoading) {
    return (
      <View>
        <Text>SDK is Loading</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Demo Auth0-Login</Text>

      {!user && <Button onPress={login} title="Log in" />}
      {user && <Text>Logged in as {user.name}</Text>}
      {error && <Text>{error.message}</Text>}
      {user && <Button onPress={logout} title="Log out" />}
    </View>
  );
};

export default Demo;
