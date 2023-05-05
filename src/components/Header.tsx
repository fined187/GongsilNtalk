import { Box, Button, Container, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Box bg="#FFFFFF" position="absolute" width={{base: "100%", md: "1920px"}} height="70px" left="0px" top="0px" w="100%">
        <Container maxW={1900}>
          <SimpleGrid templateColumns="repeat(3, 1fr)">
            <Link
              href="/"
            >
              <Image
                src="Logo.png"
                position="absolute"
                left="2.290%"
                right="90.99%"
                top="22.06%"
                bottom="20.59%"
                width={"129"}
                height={"39"}
                cursor={"pointer"}
              ></Image>
            </Link>
            <Flex
              alignItems={"center"}
              gap={"20px"}
              color="black"
              fontSize={"20px"}
              fontWeight={"semibold"}
            >
              <Link 
                href="/Recommend"
                style={{
                  textDecoration: "none", 
                  color: (router.pathname === '/Recommend' ? "#F16341" : "#333333"),
                  letterSpacing: "-0.03em",
                  fontFamily: 'Spoqa Han Sans Neo',
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "25px",
                  position: "absolute",
                  left: "627px",
                  top: "20px",
                  bottom: "22px"
                }}
              >
                추천 분양현장
              </Link>
              <Link 
                href="/Buildingmap"
                style={{
                  textDecoration: "none", 
                  color: (router.pathname === '/Buildingmap' ? "#F16341" : "#333333"),
                  letterSpacing: "-0.03em",
                  fontFamily: 'Spoqa Han Sans Neo',
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "25px",
                  position: "absolute",
                  left: "825px",
                  top: "20px",
                  bottom: "22px"
                
                }}
              >
                실시간 매물지도
              </Link>
              <Link 
                href="/Mybuilding"
                style={{
                  textDecoration: "none", 
                  color: (router.pathname === '/Mybuilding' ? "#F16341" : "#333333"),
                  letterSpacing: "-0.03em",
                  fontFamily: 'Spoqa Han Sans Neo',
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "25px",
                  position: "absolute",
                  left: "1041px",
                  top: "20px",
                  bottom: "22px"
                }}
              >내 매물관리
              </Link>
              <Link 
                href="/Community"
                style={{
                  textDecoration: "none", 
                  color: (router.pathname === '/Community' ? "#F16341" : "#333333"),
                  letterSpacing: "-0.03em",
                  fontFamily: 'Spoqa Han Sans Neo',
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "25px",
                  position: "absolute",
                  left: "1221px",
                  top: "20px",
                  bottom: "22px"
                }}
              >커뮤니티
              </Link>
            </Flex>
            <Box>
              <Link
                href="/Sign-in2"
                style={{
                  color: "#848484",
                  width: "41px",
                  position: "absolute",
                  height: "19px",
                  alignItems: "center",
                  border: "none",
                  background: "#FFFFFF",
                  cursor: "pointer",
                  left: "1654px",
                  top: "24px",
                  bottom: "23px",
                  fontStyle: "normal",
                  fontFamily: "Spoqa Han Sans Neo",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "19px",
                  letterSpacing: "-0.03em",
                }}
              >
                로그인
              </Link>
            </Box>
            <Box
            style={{
              width: "12px",
              height: "0px",
              border: "1px solid #CECECE",
              transform: "rotate(90deg)",
              flex: "none",
              position: "absolute",
              left: "1700px",
              top: "32px"
            }}
          >
          </Box>
          <Link
            href="/Sign-up"
            style={{
              position: "absolute",
              width: "54px",
              height: "19px",
              fontSize: "15px",
              lineHeight: "19px",
              fontWeight: "500",
              letterSpacing: "-0.03em",
              color: "#848484",
              border: "none",
              left: "1720px",
              background: "#FFFFFF",
              top: "24px",
              bottom: "23px",
              fontStyle: "normal",
              fontFamily: "Spoqa Han Sans Neo",
              cursor: "pointer"
            }}
          >
            회원가입
          </Link>
          <Link
            href="/mana-login"
            style={{
              position: "absolute",
              width: "90px",
              height: "27px",
              left: "1785px",
              top: "20px",
              background: "#D5D5D5",
              borderRadius: "50px",
              flex: "none",
              flexGrow: "0",
              border: "none",
              padding: "4px 10px",
              fontStyle: "normal",
              fontFamily: "Spoqa Han Sans Neo",
              cursor: "pointer",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            중개사 가입
          </Link>
          </SimpleGrid>
        </Container>
        <Box style={{
          position: "absolute",
          width: "1920px",
          height: "0px",
          border: "1px solid #D5D5D5",
          top: "70px"
        }} />
      </Box>
    </>
  )
}