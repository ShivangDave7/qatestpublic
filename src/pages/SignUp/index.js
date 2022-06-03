import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { CheckBox } from "components/CheckBox";
import { Input } from "components/Input";
import { Button } from "components/Button";

const SignUpPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-poppins mx-[auto] w-[100%]"
        compId="1:655"
        comWidth={1440}
        comHeight={1448}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="h-[1059px] 2xl:h-[1060px] 3xl:h-[1272px] lg:h-[824px] xl:h-[943px] w-[100%]"
          compId="329"
          comWidth={1440}
          comHeight={1059}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute h-[1059px] 2xl:h-[1060px] 3xl:h-[1272px] lg:h-[824px] xl:h-[943px] inset-[0] w-[100%]"
            compId="331"
            comWidth={1440}
            comHeight={1059}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_unsplashtvg4wv_4.png"}
              className="absolute h-[1059px] 2xl:h-[1060px] 3xl:h-[1272px] lg:h-[824px] xl:h-[943px] inset-[0] object-cover w-[100%]"
              compId="1:656"
              comWidth={1440}
              comHeight={1059}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="unsplashtvG4Wv"
            />
            <Column
              className="absolute bg-gradient2  inset-[0] items-start justify-start w-[100%]"
              compId="325"
              comWidth={1440}
              comHeight={1059}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="font-roboto w-[100%]"
                compId="342"
                comWidth={1440}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <header
                  className="w-[100%]"
                  compId="63"
                  comWidth={1440}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Header"
                >
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="54"
                    comWidth={1440}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="bg-white_A700 w-[100%]"
                      compId="53"
                      comWidth={1440}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 items-center justify-end w-[100%]"
                        compId="309"
                        comWidth={1440}
                        comHeight={80}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_4.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] mb-[23.07px] 2xl:mb-[23px] mt-[23px] lg:my-[17px] xl:my-[20px] 3xl:my-[27px] object-contain w-[2%]"
                          compId="I1:664;47:2346;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 w-[8%]"
                          compId="I1:664;47:2346;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                        <Column
                          className="font-mada items-start lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[23%]"
                          compId="I1:664;101:729"
                          comWidth={335}
                          comHeight={32}
                          compLeft={271}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="343"
                            comWidth={335}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-between w-[100%]"
                              compId="I1:664;3:5"
                              comWidth={335}
                              comHeight={20}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Text
                                className="cursor-pointer hover:font-bold font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 text-left w-[14%]"
                                compId="I1:664;3:9"
                                comWidth={47}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Home`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[12%]"
                                compId="I1:664;3:6"
                                comWidth={40}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Shop`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[21%]"
                                compId="I1:664;3:10"
                                comWidth={69}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`About Us`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[18%]"
                                compId="I1:664;3:17"
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
                            compId="I1:664;3:22"
                            comWidth={4}
                            comHeight={4}
                            compLeft={23}
                            compRight={23}
                            compType="View"
                          ></div>
                        </Column>
                        <Row
                          className="font-poppins items-start justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mr-[105px] mr-[119px] 3xl:mr-[142px] lg:mr-[92px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[27%]"
                          compId="340"
                          comWidth={394}
                          comHeight={48}
                          compLeft={40}
                          compRight={119}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]"
                            compId="333"
                            comWidth={28}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Image
                              src={"images/img_frame5_4.svg"}
                              className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I1:664;3:51"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Frame5"
                            />
                            <div
                              className="absolute bg-red_A100 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius50 top-[4%] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                              compId="I1:664;13:1422"
                              comWidth={16}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="View"
                            ></div>
                            <Text
                              className="absolute font-normal not-italic right-[18%] xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 top-[0] w-[25%]"
                              compId="I1:664;13:1423"
                              comWidth={7}
                              comHeight={18}
                              compLeft={0}
                              compRight={5}
                              compType="Text"
                            >{`3`}</Text>
                          </Stack>
                          <Image
                            src={"images/img_39_2.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:664;171:3579"
                            comWidth={24}
                            comHeight={24}
                            compLeft={20}
                            compRight={0}
                            compType="Image"
                            alt="39"
                          />
                          <Image
                            src={"images/img_frame5_5.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:664;12:1402"
                            comWidth={24}
                            comHeight={24}
                            compLeft={24}
                            compRight={0}
                            compType="Image"
                            alt="Frame5"
                          />
                          <Row
                            className="bg-white_A700 border-bw15 border-gray_500 border-solid font-mada items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius10 w-[63%]"
                            compId="306"
                            comWidth={250}
                            comHeight={48}
                            compLeft={24}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[21%]"
                              compId="I1:664;121:1797"
                              comWidth={52}
                              comHeight={23}
                              compLeft={16}
                              compRight={0}
                              compType="Text"
                            >{`Search`}</Text>
                            <Image
                              src={"images/img_frame6_2.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              compId="I1:664;7:743"
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
                compId="1:660"
                comWidth={183}
                comHeight={22}
                compLeft={120}
                compRight={120}
                compType="Row"
              >
                <Text
                  className="font-normal my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[23%]"
                  compId="1:661"
                  comWidth={42}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[4%]"
                  compId="1:662"
                  comWidth={7}
                  comHeight={21}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`/`}</Text>
                <Text
                  className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[47%]"
                  compId="1:663"
                  comWidth={86}
                  comHeight={21}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`My Account`}</Text>
              </Row>
              <Text
                className="font-bold font-mada lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left text-white_A700 w-[14%]"
                compId="1:658"
                comWidth={201}
                comHeight={52}
                compLeft={120}
                compRight={120}
                compType="Text"
              >{`My Account`}</Text>
              <Text
                className="font-bold font-mada lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-white_A700 w-[8%]"
                compId="1:659"
                comWidth={122}
                comHeight={47}
                compLeft={120}
                compRight={120}
                compType="Text"
              >{`Sign Up`}</Text>
              <CheckBox
                className="font-bold font-poppins lg:mb-[118px] xl:mb-[135px] mb-[152px] 3xl:mb-[182px] lg:mt-[445px] xl:mt-[509px] mt-[573px] 3xl:mt-[687px] xl:mx-[106px] mx-[120px] 3xl:mx-[144px] lg:mx-[93px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[10%]"
                inputClassName="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] bg-white_A700 h-[24px] lg:h-[19px] lg:w-[18px] w-[24px] xl:h-[22px] xl:w-[21px] mr-[5px]"
                compId="64"
                comWidth={145}
                comHeight={24}
                compLeft={120}
                compRight={120}
                compType="CheckBox"
                name="Group64"
                label={`Remember Me`}
              ></CheckBox>
            </Column>
          </Stack>
          <Column
            className="absolute bottom-[8%] items-start justify-start left-[8%] w-[41%]"
            compId="321"
            comWidth={588}
            comHeight={645}
            compLeft={120}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[29%]"
              compId="1:692"
              comWidth={172}
              comHeight={21}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              <span className="text-white_A700 font-poppins">
                <>{`You have accout ?`}</>
              </span>
              <span className="text-black_900 font-poppins">
                <>{` `}</>
              </span>
              <span className="text-white_A700 font-poppins font-bold">
                <>{`Login`}</>
              </span>
            </Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
              compId="344"
              comWidth={588}
              comHeight={174}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-2 items-center justify-start w-[100%]"
                compId="316"
                comWidth={588}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="bg-white_A700 items-center justify-center w-[100%]"
                  compId="1:695"
                  comWidth={180}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group1938_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="1:698"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Group1938"
                  />
                  <Text
                    className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[36%]"
                    compId="1:697"
                    comWidth={65}
                    comHeight={30}
                    compLeft={20}
                    compRight={0}
                    compType="Text"
                  >{`Google`}</Text>
                </Row>
                <Row
                  className="bg-white_A700 items-center justify-center w-[100%]"
                  compId="1:708"
                  comWidth={180}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_group1939_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    compId="1:711"
                    comWidth={24}
                    comHeight={24}
                    compLeft={26}
                    compRight={0}
                    compType="Image"
                    alt="Group1939"
                  />
                  <Text
                    className="font-normal lg:mx-[16px] xl:mx-[18px] mx-[21px] 3xl:mx-[25px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[49%]"
                    compId="1:710"
                    comWidth={88}
                    comHeight={30}
                    compLeft={21}
                    compRight={21}
                    compType="Text"
                  >{`Facebook`}</Text>
                </Row>
              </Row>
              <Row
                className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-2 items-center justify-between lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
                compId="317"
                comWidth={588}
                comHeight={86}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start w-[100%]"
                  compId="1:717"
                  comWidth={282}
                  comHeight={86}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[35%]"
                    compId="1:721"
                    comWidth={100}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`First Name`}</Text>
                  <Input
                    className="placeholder:bg-transparent bg-white_A700 border-0 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                    compId="1:718"
                    comWidth={282}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group1940"
                    placeholder={`First Name`}
                  ></Input>
                </Column>
                <Column
                  className="items-start w-[100%]"
                  compId="1:722"
                  comWidth={282}
                  comHeight={86}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[35%]"
                    compId="1:726"
                    comWidth={98}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Last Name`}</Text>
                  <Input
                    className="placeholder:bg-transparent bg-white_A700 border-0 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                    compId="1:723"
                    comWidth={282}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group2009"
                    placeholder={`Last Name`}
                  ></Input>
                </Column>
              </Row>
            </Column>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[9%]"
              compId="1:669"
              comWidth={52}
              comHeight={30}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Email`}</Text>
            <Input
              className="placeholder:bg-transparent bg-white_A700 border-0 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
              compId="58"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group58"
              placeholder={`Email`}
            ></Input>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[15%]"
              compId="1:687"
              comWidth={91}
              comHeight={30}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Password`}</Text>
            <Column
              className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="345"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-between w-[100%]"
                compId="311"
                comWidth={588}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[15%]"
                  compId="1:681"
                  comWidth={87}
                  comHeight={30}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Password`}</Text>
                <Image
                  src={"images/img_15_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:mr-[16px] xl:mr-[18px] mr-[21px] 3xl:mr-[25px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="1:682"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={21}
                  compType="Image"
                  alt="15"
                />
              </Row>
            </Column>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[33%]"
              compId="1:673"
              comWidth={194}
              comHeight={30}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Entry Keyword Again`}</Text>
            <Column
              className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
              compId="346"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 items-center justify-between w-[100%]"
                compId="312"
                comWidth={588}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[31%]"
                  compId="1:672"
                  comWidth={183}
                  comHeight={30}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`Enter keyword again`}</Text>
                <Image
                  src={"images/img_15_2.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:mr-[16px] xl:mr-[18px] mr-[21px] 3xl:mr-[25px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="1:674"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={21}
                  compType="Image"
                  alt="15"
                />
              </Row>
            </Column>
            <Column
              className="items-end lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] w-[100%]"
              compId="347"
              comWidth={588}
              comHeight={48}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Button
                className="bg-white_A700 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs1 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A100 w-[31%]"
                compId="49"
                comWidth={180}
                comHeight={48}
                compLeft={10}
                compRight={0}
                compType="Button"
              >{`Sign Up`}</Button>
            </Column>
          </Column>
        </Stack>
        <footer
          className="w-[100%]"
          compId="50"
          comWidth={1440}
          comHeight={389}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-gray_800 items-center justify-between w-[100%]"
            compId="315"
            comWidth={1440}
            comHeight={389}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start 3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] mb-[91px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[29%]"
              compId="I1:665;120:864"
              comWidth={424}
              comHeight={218}
              compLeft={120}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="348"
                comWidth={424}
                comHeight={130}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="I1:665;115:784"
                  comWidth={424}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="font-roboto items-center justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[38%]"
                    compId="I1:665;115:785;3:23"
                    comWidth={160}
                    comHeight={33.93}
                    compLeft={1}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_logo_5.svg"}
                      className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] object-contain w-[22%]"
                      compId="I1:665;115:785;3:25"
                      comWidth={35.26}
                      comHeight={33.93}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Logo"
                    />
                    <Text
                      className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8.93px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:mt-[7px] xl:mt-[8px] mt-[9px] 3xl:my-[10px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[73%]"
                      compId="I1:665;115:785;3:24"
                      comWidth={116}
                      comHeight={16}
                      compLeft={8.74}
                      compRight={0}
                      compType="Text"
                    >{`mangcoding Store`}</Text>
                  </Row>
                  <Text
                    className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[18px] xl:mt-[21px] mt-[24.07px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                    compId="I1:665;115:786"
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
                compId="57"
                comWidth={180}
                comHeight={48}
                compLeft={1}
                compRight={10}
                compType="Button"
              >{`Login Now`}</Button>
            </Column>
            <Row
              className="items-start justify-center lg:mb-[109px] xl:mb-[125px] mb-[141px] 3xl:mb-[169px] xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[45%]"
              compId="341"
              comWidth={649}
              comHeight={168}
              compLeft={0}
              compRight={120}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[12%]"
                compId="I1:665;115:757"
                comWidth={78}
                comHeight={168}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[71%]"
                  compId="I1:665;115:758"
                  comWidth={55}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Home`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[71%]"
                  compId="I1:665;115:762"
                  comWidth={55}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Product`}</Text>
                <Text
                  className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:665;115:759"
                  comWidth={78}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[46%]"
                  compId="I1:665;115:760"
                  comWidth={36}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Shop`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[53%]"
                  compId="I1:665;115:761"
                  comWidth={41}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Log in`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[7%]"
                compId="I1:665;115:763"
                comWidth={47}
                comHeight={168}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                  compId="I1:665;115:764"
                  comWidth={47}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Shop`}</Text>
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:665;115:768"
                  comWidth={47}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`T-Shirt`}</Text>
                <Text
                  className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:665;115:765"
                  comWidth={47}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Jacket`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[66%]"
                  compId="I1:665;115:766"
                  comWidth={31}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Shirt`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[70%]"
                  compId="I1:665;115:767"
                  comWidth={33}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Jens`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[16%]"
                compId="I1:665;115:769"
                comWidth={103}
                comHeight={136}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                  compId="I1:665;115:770"
                  comWidth={103}
                  comHeight={27}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Categories`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[29%]"
                  compId="I1:665;115:773"
                  comWidth={30}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Men`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[57%]"
                  compId="I1:665;115:771"
                  comWidth={59}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Children`}</Text>
                <Text
                  className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[54%]"
                  compId="I1:665;115:772"
                  comWidth={56}
                  comHeight={21}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Woman`}</Text>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[28%]"
                compId="I1:665;115:774"
                comWidth={181}
                comHeight={120}
                compLeft={80}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[42%]"
                  compId="I1:665;115:776"
                  comWidth={76}
                  comHeight={27}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Contact`}</Text>
                <Text
                  className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                  compId="I1:665;115:778"
                  comWidth={181}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`mangcoding@gmail.com`}</Text>
                <Column
                  className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                  compId="349"
                  comWidth={181}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] w-[97%]"
                    compId="I1:665;122:4681"
                    comWidth={176}
                    comHeight={32}
                    compLeft={0}
                    compRight={5}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_facebook_2.svg"}
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      compId="I1:665;122:4697"
                      comWidth={32}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="facebook"
                    />
                    <Stack
                      className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="335"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:665;122:4693"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_6.svg"}
                        className="absolute lg:h-[11px] h-[13.94px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                        compId="I1:665;122:4696"
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
                      compId="337"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:665;122:4688"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_7.svg"}
                        className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-x-[0] mx-[auto] object-contain top-[17%] w-[66%]"
                        compId="I1:665;122:4691"
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
                      compId="339"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={4}
                      compType="Stack"
                    >
                      <div
                        className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        compId="I1:665;122:4683"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Image
                        src={"images/img_vector_8.svg"}
                        className="absolute lg:h-[13px] h-[15.76px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[66%]"
                        compId="I1:665;122:4686"
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
    </>
  );
};

export default SignUpPage;
