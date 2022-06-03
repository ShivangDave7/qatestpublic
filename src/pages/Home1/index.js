import React from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { postLogin } from "service/api";
import * as TestConst from "constants/TestConst";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { Grid } from "components/Grid";
import { RatingBar } from "components/RatingBar";
import { List } from "components/List";

const Home1Page = () => {
  const [apiData1, setapiData1] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi1();
  }, []);

  const handleNavigate1 = () =>
    navigate("/login", {
      state: { email: apiData1?.data?.email, pass: TestConst?.passqa },
    });
  function callApi1() {
    const req = {
      data: { username: "Frank.Jacobi84", password: TestConst.passqa },
    };
    postLogin(req)
      .then((res) => {
        setapiData1(res);

        navigate("/login", {
          state: { qaemail: res?.data?.email, qapass: TestConst?.passqa },
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins mx-[auto] w-[100%]"
        compId="1:118"
        comWidth={1440}
        comHeight={4234}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="lg:h-[607px] xl:h-[694px] h-[780px] 2xl:h-[781px] 3xl:h-[937px] w-[100%]"
          compId="170"
          comWidth={1440}
          comHeight={780}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Tabs
            selectedTabClassName="!text-indigo_A200 font-mada font-bold !opacity-100 relative before:absolute before:w-[4px] before:bottom-[-8px] before:border-indigo_A200 before:border-2 before:bg-indigo_A200 before:rounded-radius2 before:mx-[auto] before:inset-x-[0]"
            selectedTabPanelClassName="mb-[61px] mr-[120px] lg:mb-[47px] lg:mr-[93px] xl:mb-[54px] xl:mr-[106px] 3xl:mb-[73px] 3xl:mr-[144px] tab-panel--selected"
            className="absolute w-[100%]"
          >
            <Column
              className="absolute bg-gradient  inset-[0] items-start justify-start rounded-radius5 w-[100%]"
              compId="143"
              comWidth={1440}
              comHeight={780}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="font-roboto w-[100%]"
                compId="240"
                comWidth={1440}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <header
                  className="w-[100%]"
                  compId="34"
                  comWidth={1440}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Header"
                >
                  <Column
                    className="bg-white_A700 shadow-bs w-[100%]"
                    compId="4"
                    comWidth={1440}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="bg-white_A700 w-[100%]"
                      compId="3"
                      comWidth={1440}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 items-center justify-end w-[100%]"
                        compId="88"
                        comWidth={1440}
                        comHeight={80}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] mb-[23.07px] 2xl:mb-[23px] mt-[23px] lg:my-[17px] xl:my-[20px] 3xl:my-[27px] object-contain w-[2%]"
                          compId="I1:369;47:2346;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 w-[8%]"
                          compId="I1:369;47:2346;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                        <TabList
                          className="flex flex-row font-mada items-start justify-start lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[23%]"
                          compId="I1:369;101:729"
                          comWidth={335}
                          comHeight={32}
                          compLeft={271}
                          compRight={0}
                          compType="Tab"
                        >
                          <Tab className="cursor-pointer hover:font-normal font-normal xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] not-italic opacity-100 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]">
                            <Text
                              className=""
                              compId="I1:369;3:9"
                              comWidth={47}
                              comHeight={20}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Home`}</Text>
                          </Tab>
                          <Tab className="cursor-pointer hover:font-normal font-normal xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic opacity-100 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[12%]">
                            <Text
                              className=""
                              compId="I1:369;3:6"
                              comWidth={40}
                              comHeight={20}
                              compLeft={40}
                              compRight={0}
                              compType="Text"
                            >{`Shop`}</Text>
                          </Tab>
                          <Tab className="cursor-pointer hover:font-normal font-normal xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic opacity-100 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[21%]">
                            <Text
                              className=""
                              compId="I1:369;3:10"
                              comWidth={69}
                              comHeight={20}
                              compLeft={40}
                              compRight={0}
                              compType="Text"
                            >{`About Us`}</Text>
                          </Tab>
                          <Tab className="cursor-pointer hover:font-normal font-normal xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic opacity-100 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[18%]">
                            <Text
                              className=""
                              compId="I1:369;3:17"
                              comWidth={59}
                              comHeight={20}
                              compLeft={40}
                              compRight={0}
                              compType="Text"
                            >{`Contact`}</Text>
                          </Tab>
                        </TabList>
                        <Row
                          className="font-poppins items-start justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mr-[105px] mr-[119px] 3xl:mr-[142px] lg:mr-[92px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[27%]"
                          compId="237"
                          comWidth={394}
                          comHeight={48}
                          compLeft={40}
                          compRight={119}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]"
                            compId="172"
                            comWidth={28}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Image
                              src={"images/img_frame5.svg"}
                              className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I1:369;3:51"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Frame5"
                            />
                            <div
                              className="absolute bg-red_A100 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius50 top-[4%] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                              compId="I1:369;13:1422"
                              comWidth={16}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="View"
                            ></div>
                            <Text
                              className="absolute font-normal not-italic right-[18%] xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 top-[0] w-[25%]"
                              compId="I1:369;13:1423"
                              comWidth={7}
                              comHeight={18}
                              compLeft={0}
                              compRight={5}
                              compType="Text"
                            >{`3`}</Text>
                          </Stack>
                          <Image
                            src={"images/img_39.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:369;171:3579"
                            comWidth={24}
                            comHeight={24}
                            compLeft={20}
                            compRight={0}
                            compType="Image"
                            alt="39"
                          />
                          <Image
                            src={"images/img_frame5_1.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:369;12:1402"
                            comWidth={24}
                            comHeight={24}
                            compLeft={24}
                            compRight={0}
                            compType="Image"
                            alt="Frame5"
                          />
                          <Row
                            className="bg-white_A700 border-bw15 border-gray_500 border-solid font-mada items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius10 w-[63%]"
                            compId="85"
                            comWidth={250}
                            comHeight={48}
                            compLeft={24}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[21%]"
                              compId="I1:369;121:1797"
                              comWidth={52}
                              comHeight={23}
                              compLeft={16}
                              compRight={0}
                              compType="Text"
                            >{`Search`}</Text>
                            <Image
                              src={"images/img_frame6.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              compId="I1:369;7:743"
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
              <Column
                className="font-poppins items-end lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
                compId="241"
                comWidth={1440}
                comHeight={24}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mx-[505px] xl:mx-[578px] mx-[650px] 3xl:mx-[780px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[5%]"
                  compId="1:120"
                  comWidth={79}
                  comHeight={24}
                  compLeft={650}
                  compRight={650}
                  compType="Text"
                >{`More list`}</Text>
              </Column>
              <Text
                className="font-bold font-mada lg:leading-lh58 xl:leading-lh66 2xl:leading-lh75 leading-lh7500 3xl:leading-lh90 lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left text-white_A700 w-[30%]"
                compId="1:122"
                comWidth={426}
                comHeight={150}
                compLeft={120}
                compRight={120}
                compType="Text"
              >
                <span className="text-white_A700">
                  <>{`Get the Latest Dress`}</>
                </span>
                <span className="text-white_A700">
                  <>{` `}</>
                </span>
                <span className="text-white_A700">
                  <>{`Models`}</>
                </span>
                <span className="text-white_A700">
                  <>{` `}</>
                </span>
                <span className="text-white_A700">
                  <>{`From Us`}</>
                </span>
              </Text>
              <Text
                className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[35%]"
                compId="1:123"
                comWidth={508}
                comHeight={90}
                compLeft={120}
                compRight={120}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.`}</Text>
              <Button
                className="common-pointer bg-white_A700 font-bold font-poppins lg:mb-[135px] xl:mb-[154px] mb-[174px] 3xl:mb-[208px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A100 w-[13%]"
                compId="7"
                comWidth={180}
                comHeight={48}
                compLeft={120}
                compRight={120}
                compType="Button"
                onClick={handleNavigate1}
              >{`Shop Now`}</Button>
            </Column>
            {[...Array(4)].map(() => {
              return (
                <TabPanel className="absolute w-[45%]">
                  <Row
                    className="absolute items-start justify-center w-[100%]"
                    compId="133"
                    comWidth={653}
                    comHeight={559}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[26%]"
                      compId="134"
                      comWidth={173}
                      comHeight={511}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Stack
                        className="lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] w-[100%]"
                        compId="174"
                        comWidth={173}
                        comHeight={268}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_unsplashg5rse8.png"}
                          className="absolute lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] inset-y-[0] left-[1%] object-contain right-[0] w-[99%]"
                          compId="1:362"
                          comWidth={172}
                          comHeight={268}
                          compLeft={1}
                          compRight={0}
                          compType="Image"
                          alt="unsplashG5RSe8"
                        />
                        <Text
                          className="absolute bg-gradient1  bottom-[0] font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                          compId="22"
                          comWidth={173}
                          comHeight={52}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Suit`}</Text>
                      </Stack>
                      <Stack
                        className="lg:h-[171px] xl:h-[195px] h-[219px] 2xl:h-[220px] 3xl:h-[263px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] mx-[auto] w-[84%]"
                        compId="176"
                        comWidth={146}
                        comHeight={219}
                        compLeft={10}
                        compRight={10}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_unsplashnpywfy.png"}
                          className="absolute lg:h-[171px] xl:h-[195px] h-[219px] 2xl:h-[220px] 3xl:h-[263px] inset-[0] object-cover w-[100%]"
                          compId="1:366"
                          comWidth={146}
                          comHeight={219}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="unsplashnpyWFY"
                        />
                        <Text
                          className="absolute bg-gradient1  bottom-[0] font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                          compId="23"
                          comWidth={146}
                          comHeight={52}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Shirt`}</Text>
                      </Stack>
                    </Column>
                    <Image
                      src={"images/img_group1926.svg"}
                      className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[294px] xl:mb-[337px] mb-[379px] 3xl:mb-[455px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[105px] xl:mt-[120px] mt-[136px] 3xl:mt-[163px] object-contain w-[2%]"
                      compId="1:335"
                      comWidth={12}
                      comHeight={44}
                      compLeft={24}
                      compRight={0}
                      compType="Image"
                      alt="Group1926"
                    />
                    <Stack
                      className="lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] lg:mb-[28px] xl:mb-[32px] mb-[37px] 3xl:mb-[44px] lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] w-[61%]"
                      compId="178"
                      comWidth={400}
                      comHeight={522}
                      compLeft={44}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] inset-[0] w-[100%]"
                        compId="180"
                        comWidth={400}
                        comHeight={522}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_rectangle7.svg"}
                          className="absolute lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] inset-[0] object-cover w-[100%]"
                          compId="1:341"
                          comWidth={400}
                          comHeight={522}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Rectangle7"
                        />
                        <Image
                          src={"images/img_unsplashirqmti.png"}
                          className="absolute lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] inset-[0] object-cover w-[100%]"
                          compId="1:343"
                          comWidth={400}
                          comHeight={522}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="unsplashIrQmti"
                        />
                      </Stack>
                      <Stack
                        className="absolute bottom-[5%] lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] inset-x-[0] mx-[auto] w-[79%]"
                        compId="182"
                        comWidth={314}
                        comHeight={80}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] inset-y-[0] left-[4%] right-[0] w-[96%]"
                          compId="184"
                          comWidth={302}
                          comHeight={80}
                          compLeft={12}
                          compRight={0}
                          compType="Stack"
                        >
                          <Row
                            className="absolute bg-black_900_7f inset-y-[0] items-center justify-between left-[0] right-[4%] rounded-radius5 shadow-bs2 w-[96%]"
                            compId="89"
                            comWidth={290}
                            comHeight={80}
                            compLeft={0}
                            compRight={12}
                            compType="Row"
                          >
                            <Image
                              src={"images/img_unsplashirqmti_1.png"}
                              className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] object-contain lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"
                              compId="1:352"
                              comWidth={80}
                              comHeight={80}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="unsplashIrQmti"
                            />
                            <Image
                              src={"images/img_unsplashgreebe.png"}
                              className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                              compId="1:349"
                              comWidth={60}
                              comHeight={60}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="unsplashGREEBE"
                            />
                            <Image
                              src={"images/img_unsplashgreebe_1.png"}
                              className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                              compId="1:351"
                              comWidth={60}
                              comHeight={60}
                              compLeft={0}
                              compRight={10}
                              compType="Image"
                              alt="unsplashGREEBE"
                            />
                          </Row>
                          <Image
                            src={"images/img_group1929.svg"}
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] my-[auto] object-contain right-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="1:353"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Group1929"
                          />
                        </Stack>
                        <Stack
                          className="absolute bg-indigo_A200 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-y-[0] left-[0] my-[auto] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="21"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_group1930.svg"}
                            className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                            compId="1:358"
                            comWidth={18}
                            comHeight={18}
                            compLeft={3}
                            compRight={3}
                            compType="Image"
                            alt="Group1930"
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Row>
                </TabPanel>
              );
            })}
          </Tabs>
        </Stack>
        <Stack
          className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] w-[100%]"
          compId="186"
          comWidth={1440}
          comHeight={100}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Image
            src={"images/img_frame22.svg"}
            className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] inset-[0] object-cover w-[100%]"
            compId="1:125"
            comWidth={1440}
            comHeight={100}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="Frame22"
          />
          <Image
            src={"images/img_group1922.svg"}
            className="absolute lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] inset-y-[0] left-[28%] my-[auto] object-contain w-[13%]"
            compId="1:330"
            comWidth={180}
            comHeight={70}
            compLeft={410}
            compRight={0}
            compType="Image"
            alt="Group1922"
          />
        </Stack>
        <Column
          className="font-mada lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
          compId="140"
          comWidth={1440}
          comHeight={3274}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="items-center w-[100%]"
            compId="243"
            comWidth={1440}
            comHeight={1268}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="font-signika items-center justify-end w-[100%]"
              compId="97"
              comWidth={1440}
              comHeight={230}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start xl:my-[3px] lg:my-[3px] my-[4px] w-[35%]"
                compId="1:174"
                comWidth={508}
                comHeight={222}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal font-poppins mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 text-left w-[45%]"
                  compId="1:177"
                  comWidth={227}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`CHOOSE YOUR CATEGORY`}</Text>
                <Text
                  className="font-bold font-mada mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left w-[76%]"
                  compId="1:175"
                  comWidth={384}
                  comHeight={62}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Categories Style`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[100%]"
                  compId="1:176"
                  comWidth={508}
                  comHeight={90}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.`}</Text>
              </Column>
              <Stack
                className="lg:h-[179px] xl:h-[205px] h-[230px] 2xl:h-[231px] 3xl:h-[277px] lg:ml-[163px] xl:ml-[186px] ml-[210px] 3xl:ml-[252px] w-[28%]"
                compId="188"
                comWidth={400}
                comHeight={230}
                compLeft={210}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[179px] xl:h-[205px] h-[230px] 2xl:h-[231px] 3xl:h-[277px] left-[0] w-[95%]"
                  compId="191"
                  comWidth={380}
                  comHeight={230}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_unsplashxpjyl0.png"}
                    className="absolute lg:h-[179px] xl:h-[205px] h-[230px] 2xl:h-[231px] 3xl:h-[277px] object-contain right-[0] w-[95%]"
                    compId="1:184"
                    comWidth={360}
                    comHeight={230}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="unsplashxPJYL0"
                  />
                  <Button
                    className="absolute bg-indigo_A200 font-bold xl:py-[10px] py-[11.545px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] right-[4%] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 top-[7%] w-[41%]"
                    compId="1:185"
                    comWidth={156}
                    comHeight={42}
                    compLeft={0}
                    compRight={16}
                    compType="Button"
                  >{`T - Shirt`}</Button>
                  <Stack
                    className="absolute bg-indigo_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] left-[0] my-[auto] lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="9"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_group1929_1.svg"}
                      className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] justify-center m-[auto] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="1:189"
                      comWidth={24}
                      comHeight={24}
                      compLeft={8}
                      compRight={8}
                      compType="Image"
                      alt="Group1929"
                    />
                  </Stack>
                </Stack>
                <Stack
                  className="absolute bg-indigo_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] my-[auto] right-[0] lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="8"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_group1930_1.svg"}
                    className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] justify-center m-[auto] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="1:193"
                    comWidth={24}
                    comHeight={24}
                    compLeft={8}
                    compRight={8}
                    compType="Image"
                    alt="Group1930"
                  />
                </Stack>
              </Stack>
              <Stack
                className="lg:h-[127px] xl:h-[145px] h-[162.28px] 2xl:h-[163px] 3xl:h-[195px] lg:mb-[27px] xl:mb-[30px] mb-[34.72px] 2xl:mb-[34px] 3xl:mb-[41px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[14%]"
                compId="193"
                comWidth={198}
                comHeight={162.28}
                compLeft={4}
                compRight={0}
                compType="Stack"
              >
                <Input
                  className="absolute bg-gray_400 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pb-[28px] xl:pb-[32px] pb-[36.09px] 2xl:pb-[36px] 3xl:pb-[43px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:pt-[15px] xl:pt-[17px] pt-[19.43px] 2xl:pt-[19px] 3xl:pt-[23px] xl:text-fs11 2xl:text-fs12 text-fs12699999809265137 3xl:text-fs15 lg:text-fs9 text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  compId="35"
                  comWidth={198}
                  comHeight={162.28}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group35"
                  placeholder={`Jacket`}
                ></Input>
                <div
                  className="absolute bg-indigo_A200 lg:h-[24px] xl:h-[27px] h-[29.63px] 2xl:h-[30px] 3xl:h-[36px] right-[0] top-[7%] w-[33%]"
                  compId="1:180"
                  comWidth={65.36}
                  comHeight={29.63}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Stack>
            </Row>
            <Text
              className="font-normal font-poppins lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] not-italic text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 w-[22%]"
              compId="1:255"
              comWidth={310}
              comHeight={30}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`CHOOSE FROM THE BEST PRODUCTS`}</Text>
            <Text
              className="font-bold font-mada lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 w-[34%]"
              compId="1:254"
              comWidth={493}
              comHeight={58}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Our Best Seller Product`}</Text>
            <Column
              className="font-mada items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
              compId="152"
              comWidth={1440}
              comHeight={26}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-center mx-[auto] w-[21%]"
                compId="1:257"
                comWidth={296}
                comHeight={20}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 text-left w-[18%]"
                  compId="1:258"
                  comWidth={54}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`T-Shirt`}</Text>
                <Text
                  className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[17%]"
                  compId="1:259"
                  comWidth={50}
                  comHeight={20}
                  compLeft={40}
                  compRight={0}
                  compType="Text"
                >{`Jacket`}</Text>
                <Text
                  className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[13%]"
                  compId="1:260"
                  comWidth={37}
                  comHeight={20}
                  compLeft={40}
                  compRight={0}
                  compType="Text"
                >{`Shirt`}</Text>
                <Text
                  className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[12%]"
                  compId="1:261"
                  comWidth={35}
                  comHeight={20}
                  compLeft={40}
                  compRight={0}
                  compType="Text"
                >{`Jens`}</Text>
              </Row>
              <Line
                className="bg-indigo_A200 h-[2px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:mx-[442px] xl:mx-[506px] mx-[569px] 3xl:mx-[683px] rounded-radius2 w-[4%]"
                compId="1:262"
                comWidth={61}
                comHeight={2}
                compLeft={569}
                compRight={569}
                compType="Line"
              />
            </Column>
            <Grid
              className="font-poppins lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[82%]"
              compId="224"
              comWidth={1180}
              comHeight={772}
              compLeft={10}
              compRight={10}
              compType="Grid"
            >
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="101"
                comWidth={265}
                comHeight={366}
                compLeft={0}
                compRight={915}
                compType="Column"
              >
                <Stack
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                  compId="195"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_unsplashjskqei.png"}
                    className="absolute lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] inset-[0] object-cover w-[100%]"
                    compId="I1:267;116:945"
                    comWidth={265}
                    comHeight={248}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="unsplashJskqEI"
                  />
                  <Image
                    src={"images/img_group2019.svg"}
                    className="absolute bottom-[0] lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-cover w-[100%]"
                    compId="1:268"
                    comWidth={265}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group2019"
                  />
                </Stack>
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="197"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:267;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="99"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="246"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="98"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:267;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:267;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:267;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:267;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="225"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:267;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="154"
                comWidth={265}
                comHeight={366}
                compLeft={305}
                compRight={610}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplashtvg4wv.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:265;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplashtvG4Wv"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="199"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_1.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:265;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="103"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="247"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="102"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:265;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:265;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:265;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:265;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="226"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:265;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="155"
                comWidth={265}
                comHeight={366}
                compLeft={610}
                compRight={305}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplash7cernd.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:264;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplash7cERnd"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="201"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_2.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:264;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="105"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="248"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="104"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:264;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:264;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:264;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:264;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="227"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:264;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="156"
                comWidth={265}
                comHeight={366}
                compLeft={915}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplashgeupir.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:266;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplashgEupiR"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="203"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_3.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:266;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="107"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="249"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="106"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:266;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:266;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:266;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:266;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="228"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:266;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="157"
                comWidth={265}
                comHeight={366}
                compLeft={0}
                compRight={915}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplashjskqei_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:283;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplashJskqEI"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="205"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_4.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:283;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="109"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="250"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="108"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:283;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:283;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:283;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:283;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="229"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:283;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="158"
                comWidth={265}
                comHeight={366}
                compLeft={305}
                compRight={610}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplashtvg4wv_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:281;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplashtvG4Wv"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="207"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_5.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:281;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="111"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="251"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="110"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:281;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:281;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:281;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:281;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="230"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:281;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="159"
                comWidth={265}
                comHeight={366}
                compLeft={610}
                compRight={305}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplash7cernd_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:280;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplash7cERnd"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="209"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_6.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:280;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="113"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="252"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="112"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:280;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:280;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:280;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:280;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="231"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:280;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
              <Column
                className="hover:cursor-pointer hover:shadow-bs1 shadow-bs3 w-[100%]"
                compId="160"
                comWidth={265}
                comHeight={366}
                compLeft={915}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_unsplashgeupir_1.png"}
                  className="lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] object-cover w-[100%]"
                  compId="I1:282;116:945"
                  comWidth={265}
                  comHeight={248}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="unsplashgEupiR"
                />
                <Stack
                  className="xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]"
                  compId="211"
                  comWidth={265}
                  comHeight={118}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_rectangle65_7.svg"}
                    className="absolute xl:h-[105px] h-[118px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] inset-[0] object-cover w-[100%]"
                    compId="I1:282;116:948"
                    comWidth={265}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Rectangle65"
                  />
                  <Column
                    className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[14%] w-[88%]"
                    compId="115"
                    comWidth={233}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="253"
                      comWidth={233}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="114"
                        comWidth={233}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold font-poppins xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[42%]"
                          compId="I1:282;116:955"
                          comWidth={98}
                          comHeight={21}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Smart T-Shirt`}</Text>
                        <Text
                          className="font-bold font-signika lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[14%]"
                          compId="I1:282;116:958"
                          comWidth={33}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`40$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[35%]"
                      compId="I1:282;116:956"
                      comWidth={82}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Best quality`}</Text>
                    <Row
                      className="font-signika items-start justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[63%]"
                      compId="I1:282;116:949"
                      comWidth={146}
                      comHeight={18}
                      compLeft={1}
                      compRight={10}
                      compType="Row"
                    >
                      <RatingBar
                        className=""
                        compId="232"
                        comWidth={106}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="RatingBar"
                        value={5}
                        starCount={5}
                        activeColor="var(--amber_A200)"
                        size={((window.innerWidth - 15) * 18) / 1440}
                      ></RatingBar>
                      <Text
                        className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[21%]"
                        compId="I1:282;116:957"
                        comWidth={31}
                        comHeight={17}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`( 1k )`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </Column>
            </Grid>
          </Column>
          <Column
            className="items-start lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
            compId="244"
            comWidth={1440}
            comHeight={588}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <div
              className="overflow-x-auto w-[100%]"
              compId="236"
              comWidth={1675}
              comHeight={588}
              compLeft={0}
              compRight={0}
              compType="HorizontalScroll"
            >
              <Stack
                className="lg:h-[458px] xl:h-[524px] h-[588px] 2xl:h-[589px] 3xl:h-[707px] w-[100%]"
                compId="213"
                comWidth={1675}
                comHeight={588}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_group1832.png"}
                  className="absolute lg:h-[458px] xl:h-[524px] h-[588px] 2xl:h-[589px] 3xl:h-[707px] inset-[0] object-cover w-[100%]"
                  compId="1:197"
                  comWidth={1675}
                  comHeight={588}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group1832"
                />
                <Row
                  className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[7%] w-[79%]"
                  compId="1:202"
                  comWidth={1320}
                  comHeight={428}
                  compLeft={0}
                  compRight={120}
                  compType="Row"
                >
                  <Row
                    className="items-start justify-between w-[46%]"
                    compId="238"
                    comWidth={604}
                    comHeight={428}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-start justify-start lg:mb-[35px] xl:mb-[40px] mb-[46px] 3xl:mb-[55px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] mt-[84px] w-[26%]"
                      compId="1:204"
                      comWidth={156}
                      comHeight={298}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_image1.png"}
                        className="lg:h-[199px] xl:h-[228px] h-[255.36px] 2xl:h-[256px] 3xl:h-[307px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[54%]"
                        compId="1:206"
                        comWidth={84.32}
                        comHeight={255.36}
                        compLeft={0}
                        compRight={10}
                        compType="Image"
                        alt="image1"
                      />
                      <Column
                        className="lg:mt-[19px] xl:mt-[21px] mt-[24.64px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                        compId="254"
                        comWidth={156}
                        comHeight={18}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <div
                          className="bg-white_A700 lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius9 w-[100%]"
                          compId="1:205"
                          comWidth={156}
                          comHeight={18}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                      </Column>
                    </Column>
                    <Image
                      src={"images/img_group2075.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[149px] xl:mb-[170px] mb-[192px] 3xl:mb-[230px] lg:mt-[152px] xl:mt-[174px] mt-[196px] 3xl:mt-[235px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      compId="106:1370"
                      comWidth={40}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Group2075"
                    />
                    <Column
                      className="items-center justify-start w-[52%]"
                      compId="1:207"
                      comWidth={314}
                      comHeight={428}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_rectangle7_1.png"}
                        className="lg:h-[298px] xl:h-[341px] h-[383px] 2xl:h-[384px] 3xl:h-[460px] mx-[auto] object-contain w-[81%]"
                        compId="1:209"
                        comWidth={254}
                        comHeight={383}
                        compLeft={10}
                        compRight={10}
                        compType="Image"
                        alt="Rectangle7"
                      />
                      <div
                        className="bg-white_A700 lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] rounded-radius105 w-[100%]"
                        compId="1:208"
                        comWidth={314}
                        comHeight={21}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                  </Row>
                  <Image
                    src={"images/img_group2074.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[149px] xl:mb-[170px] mb-[192px] 3xl:mb-[230px] lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:mt-[152px] xl:mt-[174px] mt-[196px] 3xl:mt-[235px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="106:1369"
                    comWidth={40}
                    comHeight={40}
                    compLeft={43}
                    compRight={0}
                    compType="Image"
                    alt="Group2074"
                  />
                  <Column
                    className="items-start xl:ml-[109px] ml-[123px] 3xl:ml-[147px] lg:ml-[95px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] w-[39%]"
                    compId="125"
                    comWidth={510}
                    comHeight={392}
                    compLeft={123}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold font-mada mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left text-white_A700 w-[90%]"
                      compId="1:219"
                      comWidth={460}
                      comHeight={62}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`The Oblongers T-Shirt`}</Text>
                    <Column
                      className="font-poppins lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                      compId="255"
                      comWidth={510}
                      comHeight={122}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start w-[100%]"
                        compId="1:222"
                        comWidth={510}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start w-[13%]"
                          compId="117"
                          comWidth={68}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[74%]"
                            compId="1:251"
                            comWidth={50}
                            comHeight={27}
                            compLeft={0}
                            compRight={10}
                            compType="Text"
                          >{`Color`}</Text>
                          <Column
                            className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                            compId="256"
                            comWidth={68}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="gap-[10px] 3xl:gap-[12px] lg:gap-[7px] xl:gap-[8px] grid grid-cols-3 items-center justify-between w-[100%]"
                              compId="116"
                              comWidth={68}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Column
                                className="bg-gray_901 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] items-center xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius50 lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                                compId="24"
                                comWidth={16}
                                comHeight={16}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <div
                                  className="bg-white_A700 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mx-[auto] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"
                                  compId="1:248"
                                  comWidth={8}
                                  comHeight={8}
                                  compLeft={4}
                                  compRight={4}
                                  compType="View"
                                ></div>
                              </Column>
                              <div
                                className="bg-white_A700 border-bw05 border-gray_500 border-solid lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] rounded-radius50 lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                                compId="1:249"
                                comWidth={16}
                                comHeight={16}
                                compLeft={0}
                                compRight={0}
                                compType="View"
                              ></div>
                              <div
                                className="bg-green_400 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] rounded-radius50 lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                                compId="1:250"
                                comWidth={16}
                                comHeight={16}
                                compLeft={0}
                                compRight={0}
                                compType="View"
                              ></div>
                            </Row>
                          </Column>
                        </Column>
                        <RatingBar
                          className="lg:mb-[21px] xl:mb-[24px] mb-[27px] 3xl:mb-[32px] lg:ml-[184px] xl:ml-[210px] ml-[237px] 3xl:ml-[284px]"
                          compId="233"
                          comWidth={152}
                          comHeight={24}
                          compLeft={237}
                          compRight={0}
                          compType="RatingBar"
                          value={5}
                          starCount={5}
                          activeColor="var(--amber_A201)"
                          size={((window.innerWidth - 15) * 24) / 1440}
                        ></RatingBar>
                        <Text
                          className="font-normal lg:mb-[21px] xl:mb-[24px] mb-[27px] 3xl:mb-[32px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_300 text-left w-[9%]"
                          compId="1:229"
                          comWidth={45}
                          comHeight={21}
                          compLeft={8}
                          compRight={0}
                          compType="Text"
                        >{`( 20k )`}</Text>
                      </Row>
                      <Row
                        className="items-end justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]"
                        compId="122"
                        comWidth={510}
                        comHeight={62}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[26%]"
                          compId="121"
                          comWidth={134}
                          comHeight={55}
                          compLeft={2}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[28%]"
                            compId="1:243"
                            comWidth={37}
                            comHeight={27}
                            compLeft={0}
                            compRight={10}
                            compType="Text"
                          >{`Size`}</Text>
                          <Column
                            className="xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]"
                            compId="257"
                            comWidth={134}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="xl:gap-[10px] gap-[12px] 3xl:gap-[14px] lg:gap-[9px] grid grid-cols-4 items-center justify-between xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]"
                              compId="120"
                              comWidth={134}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Column
                                className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                compId="1:231"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-bold mx-[auto] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-indigo_A200 text-left w-[33%]"
                                  compId="1:233"
                                  comWidth={8}
                                  comHeight={20}
                                  compLeft={8}
                                  compRight={8}
                                  compType="Text"
                                >{`S`}</Text>
                              </Column>
                              <Column
                                className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                compId="1:234"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-normal mx-[auto] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[50%]"
                                  compId="1:236"
                                  comWidth={12}
                                  comHeight={20}
                                  compLeft={6}
                                  compRight={6}
                                  compType="Text"
                                >{`M`}</Text>
                              </Column>
                              <Column
                                className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                compId="1:237"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-normal mx-[auto] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[25%]"
                                  compId="1:239"
                                  comWidth={6}
                                  comHeight={20}
                                  compLeft={9}
                                  compRight={9}
                                  compType="Text"
                                >{`L`}</Text>
                              </Column>
                              <Column
                                className="bg-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                compId="1:240"
                                comWidth={24}
                                comHeight={24}
                                compLeft={0}
                                compRight={0}
                                compType="Column"
                              >
                                <Text
                                  className="font-normal xl:ml-[3px] ml-[4px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] lg:mx-[3px] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[63%]"
                                  compId="1:242"
                                  comWidth={15}
                                  comHeight={20}
                                  compLeft={4}
                                  compRight={5}
                                  compType="Text"
                                >{`XL`}</Text>
                              </Column>
                            </Row>
                          </Column>
                        </Column>
                        <Text
                          className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left text-white_A700 w-[15%]"
                          compId="1:245"
                          comWidth={79}
                          comHeight={60}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`50$`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_300 text-left w-[100%]"
                      compId="1:221"
                      comWidth={510}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. Proin et lacus blandit quam semper placerat.`}</Text>
                    <Button
                      className="bg-white_A700 font-bold font-poppins mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A100 w-[35%]"
                      compId="10"
                      comWidth={180}
                      comHeight={48}
                      compLeft={0}
                      compRight={10}
                      compType="Button"
                    >{`Order Now`}</Button>
                  </Column>
                </Row>
              </Stack>
            </div>
          </Column>
          <Column
            className="items-center lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
            compId="245"
            comWidth={1440}
            comHeight={1258}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="129"
              comWidth={1440}
              comHeight={360}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold mx-[auto] text-center lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-gray_900 w-[16%]"
                compId="1:329"
                comWidth={224}
                comHeight={52}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Testimonials`}</Text>
              <List
                className="font-poppins lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[83%]"
                compId="128"
                comWidth={1200}
                comHeight={268}
                compLeft={10}
                compRight={10}
                compType="List"
                orientation="horizontal"
              >
                <Stack
                  className="bg-white_A700 lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] shadow-bs4 w-[100%]"
                  compId="215"
                  comWidth={588}
                  comHeight={268}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_vector10.svg"}
                    className="absolute lg:h-[61px] xl:h-[70px] h-[78px] 2xl:h-[79px] 3xl:h-[94px] object-contain right-[0] top-[0] lg:w-[60px] xl:w-[69px] w-[78px] 3xl:w-[93px]"
                    compId="1:295"
                    comWidth={78}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector10"
                  />
                  <Column
                    className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[86%]"
                    compId="1:296"
                    comWidth={508}
                    comHeight={188}
                    compLeft={40}
                    compRight={40}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="258"
                      comWidth={508}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="162"
                        comWidth={508}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_unsplashb4tjxn.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain rounded-radius50 w-[auto]"
                          compId="1:298"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="unsplashB4TjXn"
                        />
                        <Column
                          className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[16%]"
                          compId="161"
                          comWidth={80}
                          comHeight={56}
                          compLeft={16}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[100%]"
                            compId="1:299"
                            comWidth={80}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Friskidia`}</Text>
                          <Text
                            className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[51%]"
                            compId="1:300"
                            comWidth={41}
                            comHeight={21}
                            compLeft={0}
                            compRight={10}
                            compType="Text"
                          >{`Client`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <RatingBar
                      className="mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px]"
                      compId="234"
                      comWidth={152}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_300)"
                      size={((window.innerWidth - 15) * 24) / 1440}
                    ></RatingBar>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                      compId="259"
                      comWidth={508}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start w-[100%]"
                        compId="1:301"
                        comWidth={508}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[1%]"
                          compId="1:303"
                          comWidth={7}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`“`}</Text>
                        <Text
                          className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[97%]"
                          compId="1:302"
                          comWidth={494}
                          comHeight={60}
                          compLeft={7}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
                <Stack
                  className="bg-white_A700 lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] shadow-bs4 w-[100%]"
                  compId="217"
                  comWidth={588}
                  comHeight={268}
                  compLeft={24}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_vector10_1.svg"}
                    className="absolute lg:h-[61px] xl:h-[70px] h-[78px] 2xl:h-[79px] 3xl:h-[94px] object-contain right-[0] top-[0] lg:w-[60px] xl:w-[69px] w-[78px] 3xl:w-[93px]"
                    compId="1:313"
                    comWidth={78}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector10"
                  />
                  <Column
                    className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[86%]"
                    compId="1:314"
                    comWidth={508}
                    comHeight={188}
                    compLeft={40}
                    compRight={40}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="260"
                      comWidth={508}
                      comHeight={56}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="165"
                        comWidth={508}
                        comHeight={56}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_unsplashrdeovt.png"}
                          className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain rounded-radius50 w-[auto]"
                          compId="1:316"
                          comWidth={48}
                          comHeight={48}
                          compLeft={0}
                          compRight={0}
                          compType="CircleImage"
                          alt="unsplashrDEOVt"
                        />
                        <Column
                          className="items-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[15%]"
                          compId="164"
                          comWidth={74}
                          comHeight={56}
                          compLeft={16}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[100%]"
                            compId="1:317"
                            comWidth={74}
                            comHeight={27}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Finkidia`}</Text>
                          <Text
                            className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[55%]"
                            compId="1:318"
                            comWidth={41}
                            comHeight={21}
                            compLeft={0}
                            compRight={10}
                            compType="Text"
                          >{`Client`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <RatingBar
                      className="mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px]"
                      compId="235"
                      comWidth={152}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_300)"
                      size={((window.innerWidth - 15) * 24) / 1440}
                    ></RatingBar>
                    <Column
                      className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                      compId="261"
                      comWidth={508}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start w-[100%]"
                        compId="1:319"
                        comWidth={508}
                        comHeight={60}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[1%]"
                          compId="1:321"
                          comWidth={7}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`“`}</Text>
                        <Text
                          className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[97%]"
                          compId="1:320"
                          comWidth={494}
                          comHeight={60}
                          compLeft={7}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </List>
            </Column>
            <Row
              className="items-center justify-start lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[83%]"
              compId="1:285"
              comWidth={1200}
              comHeight={349}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Column
                className="items-start lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[43%]"
                compId="1:287"
                comWidth={513}
                comHeight={246}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-mada mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-gray_900 text-left w-[73%]"
                  compId="1:289"
                  comWidth={374}
                  comHeight={52}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Look For Models Now`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 text-left w-[100%]"
                  compId="1:288"
                  comWidth={513}
                  comHeight={90}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.`}</Text>
                <Button
                  className="bg-gradient  font-bold font-poppins mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[35%]"
                  compId="20"
                  comWidth={180}
                  comHeight={48}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                >{`Login Now`}</Button>
              </Column>
              <Image
                src={"images/img_unsplashtvg4wv_2.png"}
                className="lg:h-[272px] xl:h-[311px] h-[349px] 2xl:h-[350px] 3xl:h-[420px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] object-contain w-[49%]"
                compId="1:291"
                comWidth={590}
                comHeight={349}
                compLeft={97}
                compRight={0}
                compType="Image"
                alt="unsplashtvG4Wv"
              />
            </Row>
            <footer
              className="font-poppins lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
              compId="5"
              comWidth={1440}
              comHeight={389}
              compLeft={0}
              compRight={0}
              compType="Footer"
            >
              <Row
                className="bg-gray_800 items-center justify-between w-[100%]"
                compId="132"
                comWidth={1440}
                comHeight={389}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start 3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] mb-[91px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[29%]"
                  compId="I1:284;120:864"
                  comWidth={424}
                  comHeight={218}
                  compLeft={120}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="262"
                    comWidth={424}
                    comHeight={130}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="I1:284;115:784"
                      comWidth={424}
                      comHeight={130}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="font-roboto items-center justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[38%]"
                        compId="I1:284;115:785;3:23"
                        comWidth={160}
                        comHeight={33.93}
                        compLeft={1}
                        compRight={10}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_1.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] object-contain w-[22%]"
                          compId="I1:284;115:785;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8.93px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:mt-[7px] xl:mt-[8px] mt-[9px] 3xl:my-[10px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[73%]"
                          compId="I1:284;115:785;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                      </Row>
                      <Text
                        className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[18px] xl:mt-[21px] mt-[24.07px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                        compId="I1:284;115:786"
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
                    compId="19"
                    comWidth={180}
                    comHeight={48}
                    compLeft={1}
                    compRight={10}
                    compType="Button"
                  >{`Login Now`}</Button>
                </Column>
                <Row
                  className="items-start justify-center lg:mb-[109px] xl:mb-[125px] mb-[141px] 3xl:mb-[169px] xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[45%]"
                  compId="239"
                  comWidth={649}
                  comHeight={168}
                  compLeft={0}
                  compRight={120}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start w-[12%]"
                    compId="I1:284;115:757"
                    comWidth={78}
                    comHeight={168}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[71%]"
                      compId="I1:284;115:758"
                      comWidth={55}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Home`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[71%]"
                      compId="I1:284;115:762"
                      comWidth={55}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Product`}</Text>
                    <Text
                      className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:284;115:759"
                      comWidth={78}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[46%]"
                      compId="I1:284;115:760"
                      comWidth={36}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Shop`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[53%]"
                      compId="I1:284;115:761"
                      comWidth={41}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Log in`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[7%]"
                    compId="I1:284;115:763"
                    comWidth={47}
                    comHeight={168}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                      compId="I1:284;115:764"
                      comWidth={47}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Shop`}</Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:284;115:768"
                      comWidth={47}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`T-Shirt`}</Text>
                    <Text
                      className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:284;115:765"
                      comWidth={47}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Jacket`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[66%]"
                      compId="I1:284;115:766"
                      comWidth={31}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Shirt`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[70%]"
                      compId="I1:284;115:767"
                      comWidth={33}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Jens`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[16%]"
                    compId="I1:284;115:769"
                    comWidth={103}
                    comHeight={136}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                      compId="I1:284;115:770"
                      comWidth={103}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[29%]"
                      compId="I1:284;115:773"
                      comWidth={30}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Men`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[57%]"
                      compId="I1:284;115:771"
                      comWidth={59}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Children`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[54%]"
                      compId="I1:284;115:772"
                      comWidth={56}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Woman`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[28%]"
                    compId="I1:284;115:774"
                    comWidth={181}
                    comHeight={120}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[42%]"
                      compId="I1:284;115:776"
                      comWidth={76}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Contact`}</Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:284;115:778"
                      comWidth={181}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`mangcoding@gmail.com`}</Text>
                    <Column
                      className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                      compId="263"
                      comWidth={181}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] w-[97%]"
                        compId="I1:284;122:4681"
                        comWidth={176}
                        comHeight={32}
                        compLeft={0}
                        compRight={5}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_facebook.svg"}
                          className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                          compId="I1:284;122:4697"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="facebook"
                        />
                        <Stack
                          className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="219"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:284;122:4693"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector.svg"}
                            className="absolute lg:h-[11px] h-[13.94px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                            compId="I1:284;122:4696"
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
                          compId="221"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:284;122:4688"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector_1.svg"}
                            className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-x-[0] mx-[auto] object-contain top-[17%] w-[66%]"
                            compId="I1:284;122:4691"
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
                          compId="223"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={4}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:284;122:4683"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector_2.svg"}
                            className="absolute lg:h-[13px] h-[15.76px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[66%]"
                            compId="I1:284;122:4686"
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
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default Home1Page;
