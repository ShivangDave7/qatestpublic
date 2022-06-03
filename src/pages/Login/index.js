import React from "react";

import * as TestConst from "constants/TestConst";
import { useNavigate } from "react-router-dom";
import { postLogin } from "service/api";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";
import { Button } from "components/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const [apiData, setapiData] = React.useState();
  const location = useLocation();

  const handleNavigate2 = () =>
    navigate("/myaccount", {
      state: {
        qaqaqa: location?.state?.emailtest,
        qaqa: TestConst?.usernameqa,
      },
    });
  function callApi() {
    const req = {
      data: {
        username: location?.state?.qaemail,
        password: location?.state?.qapass,
      },
    };
    postLogin(req)
      .then((res) => {
        setapiData(res);

        toast.success("Pass");
      })
      .catch((err) => {
        console.error(err);
        toast.error("fail");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins mx-[auto] w-[100%]"
        compId="1:599"
        comWidth={1440}
        comHeight={1247}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="3xl:h-[1031px] lg:h-[668px] xl:h-[764px] h-[858px] 2xl:h-[859px] w-[100%]"
          compId="286"
          comWidth={1440}
          comHeight={858}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute 3xl:h-[1031px] lg:h-[668px] xl:h-[764px] h-[858px] 2xl:h-[859px] inset-[0] w-[100%]"
            compId="288"
            comWidth={1440}
            comHeight={858}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_unsplashtvg4wv_3.png"}
              className="absolute 3xl:h-[1031px] lg:h-[668px] xl:h-[764px] h-[858px] 2xl:h-[859px] inset-[0] object-cover w-[100%]"
              compId="1:600"
              comWidth={1440}
              comHeight={858}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="unsplashtvG4Wv"
            />
            <Column
              className="absolute bg-gradient2  inset-[0] items-start justify-start w-[100%]"
              compId="282"
              comWidth={1440}
              comHeight={858}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="font-roboto w-[100%]"
                compId="299"
                comWidth={1440}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <header
                  className="w-[100%]"
                  compId="47"
                  comWidth={1440}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Header"
                >
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="41"
                    comWidth={1440}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="bg-white_A700 w-[100%]"
                      compId="40"
                      comWidth={1440}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 items-center justify-end w-[100%]"
                        compId="267"
                        comWidth={1440}
                        comHeight={80}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_2.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] mb-[23.07px] 2xl:mb-[23px] mt-[23px] lg:my-[17px] xl:my-[20px] 3xl:my-[27px] object-contain w-[2%]"
                          compId="I1:608;47:2346;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 w-[8%]"
                          compId="I1:608;47:2346;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                        <Column
                          className="font-mada items-start lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[23%]"
                          compId="I1:608;101:729"
                          comWidth={335}
                          comHeight={32}
                          compLeft={271}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="300"
                            comWidth={335}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-between w-[100%]"
                              compId="I1:608;3:5"
                              comWidth={335}
                              comHeight={20}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Text
                                className="cursor-pointer hover:font-bold font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 text-left w-[14%]"
                                compId="I1:608;3:9"
                                comWidth={47}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Home`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[12%]"
                                compId="I1:608;3:6"
                                comWidth={40}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Shop`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[21%]"
                                compId="I1:608;3:10"
                                comWidth={69}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`About Us`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[18%]"
                                compId="I1:608;3:17"
                                comWidth={59}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Contact`}</Text>
                            </Row>
                          </Column>
                          <div
                            className="bg-indigo_A200 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[17px] xl:mx-[20px] mx-[23px] 3xl:mx-[27px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                            compId="I1:608;3:22"
                            comWidth={4}
                            comHeight={4}
                            compLeft={23}
                            compRight={23}
                            compType="View"
                          ></div>
                        </Column>
                        <Row
                          className="font-poppins items-start justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mr-[105px] mr-[119px] 3xl:mr-[142px] lg:mr-[92px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[27%]"
                          compId="297"
                          comWidth={394}
                          comHeight={48}
                          compLeft={40}
                          compRight={119}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]"
                            compId="290"
                            comWidth={28}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Image
                              src={"images/img_frame5_2.svg"}
                              className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I1:608;3:51"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Frame5"
                            />
                            <div
                              className="absolute bg-red_A100 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius50 top-[4%] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                              compId="I1:608;13:1422"
                              comWidth={16}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="View"
                            ></div>
                            <Text
                              className="absolute font-normal not-italic right-[18%] xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 top-[0] w-[25%]"
                              compId="I1:608;13:1423"
                              comWidth={7}
                              comHeight={18}
                              compLeft={0}
                              compRight={5}
                              compType="Text"
                            >{`3`}</Text>
                          </Stack>
                          <Image
                            src={"images/img_39_1.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:608;171:3579"
                            comWidth={24}
                            comHeight={24}
                            compLeft={20}
                            compRight={0}
                            compType="Image"
                            alt="39"
                          />
                          <Image
                            src={"images/img_frame5_3.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:608;12:1402"
                            comWidth={24}
                            comHeight={24}
                            compLeft={24}
                            compRight={0}
                            compType="Image"
                            alt="Frame5"
                          />
                          <Row
                            className="bg-white_A700 border-bw15 border-gray_500 border-solid font-mada items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius10 w-[63%]"
                            compId="264"
                            comWidth={250}
                            comHeight={48}
                            compLeft={24}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[21%]"
                              compId="I1:608;121:1797"
                              comWidth={52}
                              comHeight={23}
                              compLeft={16}
                              compRight={0}
                              compType="Text"
                            >{`Search`}</Text>
                            <Image
                              src={"images/img_frame6_1.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              compId="I1:608;7:743"
                              comWidth={18}
                              comHeight={18}
                              compLeft={0}
                              compRight={16}
                              compType="Image"
                              alt="Frame6"
                            />
                          </Row>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </header>
              </Column>
              <Row
                className="font-poppins items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] w-[13%]"
                compId="1:604"
                comWidth={183}
                comHeight={22}
                compLeft={120}
                compRight={120}
                compType="Row"
              >
                <Text
                  className="font-normal my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[23%]"
                  compId="1:605"
                  comWidth={42}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[4%]"
                  compId="1:606"
                  comWidth={7}
                  comHeight={21}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`/`}</Text>
                <Text
                  className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[47%]"
                  compId="1:607"
                  comWidth={86}
                  comHeight={21}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`My Account`}</Text>
              </Row>
              <Text
                className="font-bold font-mada lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left text-white_A700 w-[14%]"
                compId="1:602"
                comWidth={201}
                comHeight={52}
                compLeft={120}
                compRight={120}
                compType="Text"
              >{`My Account`}</Text>
              <Text
                className="font-bold font-mada lg:mb-[426px] xl:mb-[487px] mb-[548px] 3xl:mb-[657px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-white_A700 w-[6%]"
                compId="1:603"
                comWidth={88}
                comHeight={47}
                compLeft={120}
                compRight={120}
                compType="Text"
              >{`Login`}</Text>
            </Column>
          </Stack>
          <Column
            className="absolute bottom-[9%] items-start justify-start left-[8%] w-[41%]"
            compId="278"
            comWidth={588}
            comHeight={444}
            compLeft={120}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[34%]"
              compId="1:615"
              comWidth={197}
              comHeight={21}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              <span className="text-white_A700 font-poppins">
                <>{`Don’t have accout ?`}</>
              </span>
              <span className="text-black_900 font-poppins">
                <>{` `}</>
              </span>
              <span className="text-white_A700 font-poppins font-bold">
                <>{`Sign Up `}</>
              </span>
            </Text>
            <Column
              className="lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[100%]"
              compId="301"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-2 items-center justify-start w-[100%]"
                compId="273"
                comWidth={588}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="common-pointer bg-white_A700 items-center justify-center w-[100%]"
                  compId="1:618"
                  comWidth={180}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                  onClick={handleNavigate2}
                >
                  <Image
                    src={"images/img_group1938.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="1:621"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group1938"
                  />
                  <Text
                    className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[36%]"
                    compId="1:620"
                    comWidth={65}
                    comHeight={30}
                    compLeft={20}
                    compRight={0}
                    compType="Text"
                  >{`Google`}</Text>
                </Row>
                <Row
                  className="bg-white_A700 items-center justify-center w-[100%]"
                  compId="1:631"
                  comWidth={180}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group1939.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="1:634"
                    comWidth={24}
                    comHeight={24}
                    compLeft={26}
                    compRight={0}
                    compType="Image"
                    alt="Group1939"
                  />
                  <Text
                    className="font-normal lg:mx-[16px] xl:mx-[18px] mx-[21px] 3xl:mx-[25px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[49%]"
                    compId="1:633"
                    comWidth={88}
                    comHeight={30}
                    compLeft={21}
                    compRight={21}
                    compType="Text"
                  >{`Facebook`}</Text>
                </Row>
              </Row>
            </Column>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[9%]"
              compId="1:644"
              comWidth={52}
              comHeight={30}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Email`}</Text>
            <Input
              className="placeholder:bg-transparent bg-white_A700 border-0 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
              compId="1:641"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group1902"
              placeholder={`Email`}
            ></Input>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[15%]"
              compId="1:654"
              comWidth={91}
              comHeight={30}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Password`}</Text>
            <Column
              className="xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
              compId="302"
              comWidth={588}
              comHeight={96}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-between w-[100%]"
                compId="269"
                comWidth={588}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[15%]"
                  compId="1:648"
                  comWidth={87}
                  comHeight={30}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Password`}</Text>
                <Image
                  src={"images/img_15.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[16px] xl:mr-[18px] mr-[21px] 3xl:mr-[25px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="1:649"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={21}
                  compType="Image"
                  alt="15"
                />
              </Row>
              <Row
                className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                compId="1:610"
                comWidth={588}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <CheckBox
                  className="font-bold lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[25%]"
                  inputClassName="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] bg-white_A700 h-[24px] lg:h-[19px] lg:w-[18px] w-[24px] xl:h-[22px] xl:w-[21px] mr-[5px]"
                  compId="48"
                  comWidth={145}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="CheckBox"
                  name="Group48"
                  label={`Remember Me`}
                ></CheckBox>
                <Text
                  className="font-bold xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[22%]"
                  compId="1:612"
                  comWidth={131}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Forget Password ?`}</Text>
              </Row>
            </Column>
            <Column
              className="items-end lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
              compId="303"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Button
                className="common-pointer bg-white_A700 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A100 w-[31%]"
                compId="36"
                comWidth={180}
                comHeight={48}
                compLeft={10}
                compRight={0}
                compType="Button"
                onClick={callApi}
              >{`Login`}</Button>
            </Column>
          </Column>
        </Stack>
        <footer
          className="w-[100%]"
          compId="37"
          comWidth={1440}
          comHeight={389}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-gray_800 items-center justify-between w-[100%]"
            compId="272"
            comWidth={1440}
            comHeight={389}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start 3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] mb-[91px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[29%]"
              compId="I1:609;120:864"
              comWidth={424}
              comHeight={218}
              compLeft={120}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="304"
                comWidth={424}
                comHeight={130}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="I1:609;115:784"
                  comWidth={424}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="font-roboto items-center justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[38%]"
                    compId="I1:609;115:785;3:23"
                    comWidth={160}
                    comHeight={33.93}
                    compLeft={1}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_logo_3.svg"}
                      className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] object-contain w-[22%]"
                      compId="I1:609;115:785;3:25"
                      comWidth={35.26}
                      comHeight={33.93}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Logo"
                    />
                    <Text
                      className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8.93px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:mt-[7px] xl:mt-[8px] mt-[9px] 3xl:my-[10px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[73%]"
                      compId="I1:609;115:785;3:24"
                      comWidth={116}
                      comHeight={16}
                      compLeft={8.74}
                      compRight={0}
                      compType="Text"
                    >{`mangcoding Store`}</Text>
                  </Row>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[18px] xl:mt-[21px] mt-[24.07px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                    compId="I1:609;115:786"
                    comWidth={424}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.`}</Text>
                </Column>
              </Column>
              <Button
                className="bg-white_A700 font-bold ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs4 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A100 w-[42%]"
                compId="44"
                comWidth={180}
                comHeight={48}
                compLeft={1}
                compRight={10}
                compType="Button"
              >{`Login Now`}</Button>
            </Column>
            <Row
              className="items-start justify-center lg:mb-[109px] xl:mb-[125px] mb-[141px] 3xl:mb-[169px] xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[45%]"
              compId="298"
              comWidth={649}
              comHeight={168}
              compLeft={0}
              compRight={120}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[12%]"
                compId="I1:609;115:757"
                comWidth={78}
                comHeight={168}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[71%]"
                  compId="I1:609;115:758"
                  comWidth={55}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[71%]"
                  compId="I1:609;115:762"
                  comWidth={55}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Product`}</Text>
                <Text
                  className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:609;115:759"
                  comWidth={78}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[46%]"
                  compId="I1:609;115:760"
                  comWidth={36}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Shop`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[53%]"
                  compId="I1:609;115:761"
                  comWidth={41}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Log in`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[7%]"
                compId="I1:609;115:763"
                comWidth={47}
                comHeight={168}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                  compId="I1:609;115:764"
                  comWidth={47}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shop`}</Text>
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:609;115:768"
                  comWidth={47}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`T-Shirt`}</Text>
                <Text
                  className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:609;115:765"
                  comWidth={47}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Jacket`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[66%]"
                  compId="I1:609;115:766"
                  comWidth={31}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Shirt`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[70%]"
                  compId="I1:609;115:767"
                  comWidth={33}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Jens`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[16%]"
                compId="I1:609;115:769"
                comWidth={103}
                comHeight={136}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                  compId="I1:609;115:770"
                  comWidth={103}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[29%]"
                  compId="I1:609;115:773"
                  comWidth={30}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Men`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[57%]"
                  compId="I1:609;115:771"
                  comWidth={59}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Children`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[54%]"
                  compId="I1:609;115:772"
                  comWidth={56}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Woman`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[28%]"
                compId="I1:609;115:774"
                comWidth={181}
                comHeight={120}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[42%]"
                  compId="I1:609;115:776"
                  comWidth={76}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:609;115:778"
                  comWidth={181}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`mangcoding@gmail.com`}</Text>
                <Column
                  className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                  compId="305"
                  comWidth={181}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] w-[97%]"
                    compId="I1:609;122:4681"
                    comWidth={176}
                    comHeight={32}
                    compLeft={0}
                    compRight={5}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_facebook_1.svg"}
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I1:609;122:4697"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="facebook"
                    />
                    <Stack
                      className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="292"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:609;122:4693"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_3.svg"}
                        className="absolute lg:h-[11px] h-[13.94px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                        compId="I1:609;122:4696"
                        comWidth={17.78}
                        comHeight={13.94}
                        compLeft={3}
                        compRight={3.22}
                        compType="Image"
                        alt="Vector"
                      />
                    </Stack>
                    <Stack
                      className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="294"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:609;122:4688"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_4.svg"}
                        className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-x-[0] mx-[auto] object-contain top-[17%] w-[66%]"
                        compId="I1:609;122:4691"
                        comWidth={15.79}
                        comHeight={15}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                    </Stack>
                    <Stack
                      className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mr-[3px] lg:mr-[3px] mr-[4px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="296"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={4}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:609;122:4683"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_5.svg"}
                        className="absolute lg:h-[13px] h-[15.76px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[66%]"
                        compId="I1:609;122:4686"
                        comWidth={15.8}
                        comHeight={15.76}
                        compLeft={4}
                        compRight={4.2}
                        compType="Image"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Row>
        </footer>
      </Column>

      <ToastContainer />
    </>
  );
};

export default LoginPage;
