import { Formik } from "formik";
import * as Yup from "yup";
import { GetSignIn } from "./api/SignIn";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button, Alert as CAlert, Checkbox, FormLabel, Input } from "@chakra-ui/react";

export default function SignIn2() {

  const router = useRouter();

  const Alert = styled(CAlert);

  return(
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required."),
          password: Yup.string().max(255).required("Password is required."),
        })}
        onSubmit={async (values, {
          setErrors, setStatus, setSubmitting
        }) => {
          try {
            //  Axios
            const data = [{email: values.email, password: values.password}]
            await GetSignIn(data);
            //  router.push("")
          } catch (error: any) {
            console.log(error);
            const message = "로그인에 실패했습니다."
            setStatus({ success: false});
            setErrors({ submit: message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}
            style={{
              position: "absolute",
              top: "299px",
              bottom: "295px",
              left: "671px",
              right: "671px",
              width: "578px",
              height: "486px",
              border: "1px solid #F0F0F0",
              borderRadius: "10px"
            }}
          >
            <FormLabel
              position="absolute"
              top="80px"
              bottom="378px"
              left="218px"
              right="217px"
              width="143px"
              height="28px"
              
              fontFamily="Spoqa Han Sans Neo"
              fontStyle="normal"
              fontSize="22px"
              fontWeight="700"
              lineHeight="28px"

              display="flex"
              alignItems="center"
              textAlign="center"
              letterSpacing="-0.03em"
              color="#333333"
            >
              공실앤톡 로그인
            </FormLabel>
            <Input 
              flexDirection="row"
              alignItems="row"
              padding="12px 70px 12px 14px"
              gap="10px"

              width="418px"
              height="44px"

              backgroundColor="#FFFFFF"
              border="1px solid #D5D5D5"
              borderRadius="5px"
              
              position="absolute"
              top="146px"
              left="80px"
              right="80px"
              bottom="296px"

              type="email"
              id="email"
              value={values.email}
              placeholder="이메일을 입력하세요."
              focusBorderColor="orange.400"

              
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input 
              flexDirection="row"
              alignItems="row"
              padding="12px 70px 12px 14px"
              gap="10px"

              width="418px"
              height="44px"

              backgroundColor="#FFFFFF"
              border="1px solid #D5D5D5"
              borderRadius="5px"
              
              position="absolute"
              top="196px"
              left="80px"
              right="80px"
              bottom="246px"

              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              focusBorderColor="orange.400"
            />
            <Checkbox
              position="absolute"
              top="250px"
              left="80px"
              fontFamily="Spoqa Han Sans Neo"
              fontStyle="normal"
              fontWeight="500"
              fontSize="14px"
              lineHeight="18px"
              color="#666666"

              display="flex"
              alignItems="center"
              letterSpacing="-0.03em"
              colorScheme="orange"
            >
              로그인 상태 유지
            </Checkbox>
            <Button
              position="absolute"
              width="78px"
              height="18px"
              left="420px"
              top="250px"
              right="80px"
              bottom="218px"

              fontFamily='Spoqa Han Sans Neo'
              fontSize="14px"
              fontWeight="500"
              lineHeight="18px"

              display="flex"
              alignItems="center"
              textAlign="center"
              letterSpacing="-0.03em"

              color="#9B9B9B"
              backgroundColor="#FFFFFF"
              _hover={{bg: "#FFFFFF"}}
            >
              비밀번호 찾기
            </Button>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="0px"

              position="absolute"
              width="418px"
              height="54px"
              left="80px"
              top="296px"
              bottom="136px"
              right="80px"

              backgroundColor="#F16341"
              borderRadius="5px"

              _hover={{bg: "#F16341"}}
              color="#FFFFFF"

              fontFamily="Spoqa Han Sans Neo"
              fontStyle="normal"
              fontSize="16px"
              fontWeight="700"
              lineHeight="20px"

              letterSpacing="-0.03em"
              type="submit"
            >
              로그인
            </Button>
          </form>
        )}


      </Formik>
    </>
  )
}