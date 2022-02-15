import React, { useMemo } from 'react';
import { Box, useToast, Input, Button } from 'native-base';
import { login } from '@/services/User/login';
import { useForm, Controller } from 'react-hook-form';
import { createStyle } from './style';
import { SCREENS_NAME } from '@/constants/screen';
import { useNavigation } from '@react-navigation/native';
import { userAccountActions } from '@/store/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen = () => {
  const styles = useMemo(() => {
    return createStyle();
  }, []);

  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    login({
      userName: data.userName,
      password: data.password,
    })
      .then((res) => {
        if (res?.data?.result !== 'OK') {
          toast.show({
            description: 'Đã có lỗi xảy ra !',
            status: 'error',
            placement: 'top',
            isClosable: true,
          });
          return;
        }

        dispatch(userAccountActions.setIsLogin(true));
        dispatch(userAccountActions.setCode(res?.data?.code));
        navigation.replace(SCREENS_NAME.LIST_ORDER);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box style={styles.container}>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="sm"
            placeholder="Tên người dùng"
            style={styles.input}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="sm"
            placeholder="Mật khẩu"
            style={styles.input}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Đăng nhập</Button>
    </Box>
  );
};

export default LoginScreen;
