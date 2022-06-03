import React from "react";

import { postLogin } from "service/api";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const MyAccountPage = () => {
  const [apiData2, setapiData2] = React.useState();
  const location = useLocation();

  function callApi2() {
    const req = { data: { username: location?.state?.qaqaqa } };
    postLogin(req)
      .then((res) => {
        setapiData2(res);

        toast.success("wow");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Nah");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 mx-[auto] w-[100%]"
        compId="1:727"
        comWidth={1440}
        comHeight={1433}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-start justify-start w-[100%]"
          compId="367"
          comWidth={1440}
          comHeight={1433}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="font-roboto w-[100%]"
            compId="390"
            comWidth={1440}
            comHeight={876}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[462px] xl:h-[529px] h-[594px] 2xl:h-[595px] 3xl:h-[714px] w-[100%]"
              compId="375"
              comWidth={1440}
              comHeight={594}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[333px] xl:h-[381px] h-[428px] 2xl:h-[429px] 3xl:h-[514px] top-[0] w-[100%]"
                compId="377"
                comWidth={1440}
                comHeight={428}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_rectangle6.png"}
                  className="absolute lg:h-[333px] xl:h-[381px] h-[428px] 2xl:h-[429px] 3xl:h-[514px] inset-[0] object-cover rounded-radius5 w-[100%]"
                  compId="1:728"
                  comWidth={1440}
                  comHeight={428}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Rectangle6"
                />
                <header
                  className="absolute top-[0] w-[100%]"
                  compId="80"
                  comWidth={1440}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Header"
                >
                  <Column
                    className="shadow-bs w-[100%]"
                    compId="70"
                    comWidth={1440}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="bg-white_A700 w-[100%]"
                      compId="69"
                      comWidth={1440}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 items-center justify-end w-[100%]"
                        compId="353"
                        comWidth={1440}
                        comHeight={80}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_6.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] mb-[23.07px] 2xl:mb-[23px] mt-[23px] lg:my-[17px] xl:my-[20px] 3xl:my-[27px] object-contain w-[2%]"
                          compId="I1:734;47:2346;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 w-[8%]"
                          compId="I1:734;47:2346;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                        <Column
                          className="font-mada items-start lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[210px] xl:ml-[241px] ml-[271px] 3xl:ml-[325px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[23%]"
                          compId="I1:734;101:729"
                          comWidth={335}
                          comHeight={32}
                          compLeft={271}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="392"
                            comWidth={335}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-between w-[100%]"
                              compId="I1:734;3:5"
                              comWidth={335}
                              comHeight={20}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Text
                                className="cursor-pointer hover:font-bold font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-indigo_A200 text-left w-[14%]"
                                compId="I1:734;3:9"
                                comWidth={47}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Home`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[12%]"
                                compId="I1:734;3:6"
                                comWidth={40}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`Shop`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[21%]"
                                compId="I1:734;3:10"
                                comWidth={69}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`About Us`}</Text>
                              <Text
                                className="cursor-pointer hover:font-bold font-normal not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 hover:text-indigo_A200 text-left w-[18%]"
                                compId="I1:734;3:17"
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
                            compId="I1:734;3:22"
                            comWidth={4}
                            comHeight={4}
                            compLeft={23}
                            compRight={23}
                            compType="View"
                          ></div>
                        </Column>
                        <Row
                          className="font-poppins items-start justify-center lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mr-[105px] mr-[119px] 3xl:mr-[142px] lg:mr-[92px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] w-[27%]"
                          compId="388"
                          comWidth={394}
                          comHeight={48}
                          compLeft={40}
                          compRight={119}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]"
                            compId="379"
                            comWidth={28}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Image
                              src={"images/img_frame5_6.svg"}
                              className="absolute bottom-[0] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              compId="I1:734;3:51"
                              comWidth={24}
                              comHeight={24}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Frame5"
                            />
                            <div
                              className="absolute bg-red_A100 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] right-[0] rounded-radius50 top-[4%] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                              compId="I1:734;13:1422"
                              comWidth={16}
                              comHeight={16}
                              compLeft={0}
                              compRight={0}
                              compType="View"
                            ></div>
                            <Text
                              className="absolute font-normal not-italic right-[18%] xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 top-[0] w-[25%]"
                              compId="I1:734;13:1423"
                              comWidth={7}
                              comHeight={18}
                              compLeft={0}
                              compRight={5}
                              compType="Text"
                            >{`3`}</Text>
                          </Stack>
                          <Image
                            src={"images/img_39_3.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:734;171:3579"
                            comWidth={24}
                            comHeight={24}
                            compLeft={20}
                            compRight={0}
                            compType="Image"
                            alt="39"
                          />
                          <Image
                            src={"images/img_frame5_7.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:734;12:1402"
                            comWidth={24}
                            comHeight={24}
                            compLeft={24}
                            compRight={0}
                            compType="Image"
                            alt="Frame5"
                          />
                          <Row
                            className="bg-white_A700 border-bw15 border-gray_500 border-solid font-mada items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius10 w-[63%]"
                            compId="350"
                            comWidth={250}
                            comHeight={48}
                            compLeft={24}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_300 text-left w-[21%]"
                              compId="I1:734;121:1797"
                              comWidth={52}
                              comHeight={23}
                              compLeft={16}
                              compRight={0}
                              compType="Text"
                            >{`Search`}</Text>
                            <Image
                              src={"images/img_frame6_3.svg"}
                              className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                              compId="I1:734;7:743"
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
              </Stack>
              <Column
                className="absolute items-start justify-start left-[8%] top-[20%] w-[35%]"
                compId="355"
                comWidth={508}
                comHeight={228}
                compLeft={120}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="font-poppins items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[36%]"
                  compId="1:730"
                  comWidth={183}
                  comHeight={22}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-normal my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[23%]"
                    compId="1:731"
                    comWidth={42}
                    comHeight={21}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[4%]"
                    compId="1:732"
                    comWidth={7}
                    comHeight={21}
                    compLeft={24}
                    compRight={0}
                    compType="Text"
                  >{`/`}</Text>
                  <Text
                    className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[47%]"
                    compId="1:733"
                    comWidth={86}
                    comHeight={21}
                    compLeft={24}
                    compRight={0}
                    compType="Text"
                  >{`My Account`}</Text>
                </Row>
                <Text
                  className="font-bold font-mada mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left text-white_A700 w-[40%]"
                  compId="1:729"
                  comWidth={201}
                  comHeight={52}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`My Account`}</Text>
                <Text
                  className="font-normal font-poppins lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_100 text-left w-[100%]"
                  compId="1:736"
                  comWidth={508}
                  comHeight={90}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.`}</Text>
              </Column>
              <Column
                className="absolute bg-white_A700 bottom-[11%] font-poppins items-center justify-center lg:py-[31px] xl:py-[35px] py-[40px] 3xl:py-[48px] right-[8%] shadow-bs4 w-[34%]"
                compId="1:739"
                comWidth={486}
                comHeight={407}
                compLeft={0}
                compRight={120}
                compType="Column"
              >
                <Stack
                  className="lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] mx-[auto] lg:w-[116px] xl:w-[133px] w-[150px] 3xl:w-[180px]"
                  compId="381"
                  comWidth={150}
                  comHeight={150}
                  compLeft={10}
                  compRight={10}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_unsplash95uf6l.png"}
                    className="absolute lg:h-[117px] xl:h-[134px] h-[150px] 2xl:h-[151px] 3xl:h-[181px] inset-[0] object-cover rounded-radius50 w-[auto]"
                    compId="1:741"
                    comWidth={150}
                    comHeight={150}
                    compLeft={0}
                    compRight={0}
                    compType="CircleImage"
                    alt="unsplash95UF6L"
                  />
                  <Stack
                    className="absolute bg-indigo_A200_7f lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"
                    compId="79"
                    comWidth={34}
                    comHeight={34}
                    compLeft={58}
                    compRight={58}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_frame.svg"}
                      className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] justify-center m-[auto] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="1:745"
                      comWidth={24}
                      comHeight={24}
                      compLeft={5}
                      compRight={5}
                      compType="Image"
                      alt="Frame"
                    />
                  </Stack>
                </Stack>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] mx-[auto] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left w-[53%]"
                  compId="1:742"
                  comWidth={256}
                  comHeight={36}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Alexanderdrostact12`}</Text>
                <Text
                  className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left w-[48%]"
                  compId="1:743"
                  comWidth={235}
                  comHeight={21}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Alexanderrostact567@gmail.com`}</Text>
                <Button
                  className="bg-gradient  font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs4 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[37%]"
                  compId="72"
                  comWidth={180}
                  comHeight={48}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`Update`}</Button>
              </Column>
              <Column
                className="absolute bottom-[0] font-poppins items-start justify-start left-[8%] w-[41%]"
                compId="1:748"
                comWidth={588}
                comHeight={86}
                compLeft={120}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[10%]"
                  compId="1:751"
                  comWidth={56}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Name`}</Text>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  compId="73"
                  comWidth={588}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group73"
                  placeholder={`Alexanderdrostact12`}
                ></Input>
              </Column>
            </Stack>
            <Row
              className="font-poppins items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
              compId="362"
              comWidth={1440}
              comHeight={86}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] w-[41%]"
                compId="1:752"
                comWidth={588}
                comHeight={86}
                compLeft={120}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[10%]"
                  compId="1:755"
                  comWidth={56}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Street`}</Text>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  compId="74"
                  comWidth={588}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group74"
                  placeholder={`jl.karadenan no 100`}
                ></Input>
              </Column>
              <Column
                className="items-start xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] w-[34%]"
                compId="1:760"
                comWidth={486}
                comHeight={86}
                compLeft={0}
                compRight={120}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[19%]"
                  compId="1:761"
                  comWidth={92}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`No. Phone`}</Text>
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  compId="76"
                  comWidth={486}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group76"
                  placeholder={`1234 1234 1234 1234`}
                ></Input>
              </Column>
            </Row>
            <Row
              className="font-poppins items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
              compId="363"
              comWidth={1440}
              comHeight={164}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] w-[41%]"
                compId="1:756"
                comWidth={588}
                comHeight={164}
                compLeft={120}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[13%]"
                  compId="1:759"
                  comWidth={77}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Address`}</Text>
                <TextArea
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-bold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  compId="75"
                  comWidth={588}
                  comHeight={126}
                  compLeft={0}
                  compRight={0}
                  compType="TextArea"
                  name="Group75"
                  placeholder={`Perum Mulya Sari, Jl. Candi Mendut No.36, RT 011/RW 005 (Belakang Polsek Lowokwaru), Kel. Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur, 65142`}
                ></TextArea>
              </Column>
              <Column
                className="items-start justify-start 3xl:mb-[106px] lg:mb-[69px] xl:mb-[79px] mb-[89px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[16%]"
                compId="358"
                comWidth={235}
                comHeight={59}
                compLeft={126}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left w-[29%]"
                  compId="1:765"
                  comWidth={68}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Gender`}</Text>
                <Column
                  className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                  compId="393"
                  comWidth={235}
                  comHeight={21}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-between w-[100%]"
                    compId="357"
                    comWidth={235}
                    comHeight={21}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_group2057.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="1:767"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Group2057"
                    />
                    <Text
                      className="font-bold lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[15%]"
                      compId="1:770"
                      comWidth={36}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Male`}</Text>
                    <div
                      className="bg-gray_300 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius50 lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="1:772"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-bold lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[23%]"
                      compId="1:773"
                      comWidth={54}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Female`}</Text>
                    <div
                      className="bg-gray_300 lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius50 lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="1:775"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-bold lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left w-[17%]"
                      compId="1:776"
                      comWidth={41}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Other`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Button
            className="common-pointer bg-gradient  font-bold font-poppins lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] xl:mx-[107px] mx-[121px] 3xl:mx-[145px] lg:mx-[94px] xl:py-[10px] py-[12.045px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] shadow-bs4 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[13%]"
            compId="65"
            comWidth={180}
            comHeight={48}
            compLeft={121}
            compRight={121}
            compType="Button"
            onClick={callApi2}
          >{`Update`}</Button>
          <Column
            className="font-poppins lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
            compId="391"
            comWidth={1440}
            comHeight={389}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <footer
              className="w-[100%]"
              compId="66"
              comWidth={1440}
              comHeight={389}
              compLeft={0}
              compRight={0}
              compType="Footer"
            >
              <Row
                className="bg-gray_800 items-center justify-between w-[100%]"
                compId="361"
                comWidth={1440}
                comHeight={389}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start 3xl:mb-[109px] lg:mb-[70px] xl:mb-[80px] mb-[91px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[29%]"
                  compId="I1:735;120:864"
                  comWidth={424}
                  comHeight={218}
                  compLeft={120}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="394"
                    comWidth={424}
                    comHeight={130}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="I1:735;115:784"
                      comWidth={424}
                      comHeight={130}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="font-roboto items-center justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[38%]"
                        compId="I1:735;115:785;3:23"
                        comWidth={160}
                        comHeight={33.93}
                        compLeft={1}
                        compRight={10}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_7.svg"}
                          className="lg:h-[27px] xl:h-[31px] h-[33.93px] 2xl:h-[34px] 3xl:h-[41px] object-contain w-[22%]"
                          compId="I1:735;115:785;3:25"
                          comWidth={35.26}
                          comHeight={33.93}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="Logo"
                        />
                        <Text
                          className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8.93px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.74px] 2xl:ml-[8px] lg:mt-[7px] xl:mt-[8px] mt-[9px] 3xl:my-[10px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 w-[73%]"
                          compId="I1:735;115:785;3:24"
                          comWidth={116}
                          comHeight={16}
                          compLeft={8.74}
                          compRight={0}
                          compType="Text"
                        >{`mangcoding Store`}</Text>
                      </Row>
                      <Text
                        className="font-normal font-poppins lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:mt-[18px] xl:mt-[21px] mt-[24.07px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                        compId="I1:735;115:786"
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
                    compId="71"
                    comWidth={180}
                    comHeight={48}
                    compLeft={1}
                    compRight={10}
                    compType="Button"
                  >{`Login Now`}</Button>
                </Column>
                <Row
                  className="items-start justify-center lg:mb-[109px] xl:mb-[125px] mb-[141px] 3xl:mb-[169px] xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[45%]"
                  compId="389"
                  comWidth={649}
                  comHeight={168}
                  compLeft={0}
                  compRight={120}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start w-[12%]"
                    compId="I1:735;115:757"
                    comWidth={78}
                    comHeight={168}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[71%]"
                      compId="I1:735;115:758"
                      comWidth={55}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Home`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[71%]"
                      compId="I1:735;115:762"
                      comWidth={55}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Product`}</Text>
                    <Text
                      className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:735;115:759"
                      comWidth={78}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[46%]"
                      compId="I1:735;115:760"
                      comWidth={36}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Shop`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[53%]"
                      compId="I1:735;115:761"
                      comWidth={41}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Log in`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[7%]"
                    compId="I1:735;115:763"
                    comWidth={47}
                    comHeight={168}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                      compId="I1:735;115:764"
                      comWidth={47}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Shop`}</Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:735;115:768"
                      comWidth={47}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`T-Shirt`}</Text>
                    <Text
                      className="font-normal mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:735;115:765"
                      comWidth={47}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Jacket`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[66%]"
                      compId="I1:735;115:766"
                      comWidth={31}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Shirt`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[70%]"
                      compId="I1:735;115:767"
                      comWidth={33}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Jens`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[16%]"
                    compId="I1:735;115:769"
                    comWidth={103}
                    comHeight={136}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[100%]"
                      compId="I1:735;115:770"
                      comWidth={103}
                      comHeight={27}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Categories`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[29%]"
                      compId="I1:735;115:773"
                      comWidth={30}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Men`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[57%]"
                      compId="I1:735;115:771"
                      comWidth={59}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Children`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[54%]"
                      compId="I1:735;115:772"
                      comWidth={56}
                      comHeight={21}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Woman`}</Text>
                  </Column>
                  <Column
                    className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[28%]"
                    compId="I1:735;115:774"
                    comWidth={181}
                    comHeight={120}
                    compLeft={80}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 w-[42%]"
                      compId="I1:735;115:776"
                      comWidth={76}
                      comHeight={27}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Contact`}</Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_100 text-left w-[100%]"
                      compId="I1:735;115:778"
                      comWidth={181}
                      comHeight={21}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`mangcoding@gmail.com`}</Text>
                    <Column
                      className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                      compId="395"
                      comWidth={181}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] w-[97%]"
                        compId="I1:735;122:4681"
                        comWidth={176}
                        comHeight={32}
                        compLeft={0}
                        compRight={5}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_facebook_3.svg"}
                          className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                          compId="I1:735;122:4697"
                          comWidth={32}
                          comHeight={32}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="facebook"
                        />
                        <Stack
                          className="border border-solid border-white_A700 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[3px] lg:my-[3px] my-[4px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          compId="383"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:735;122:4693"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector_9.svg"}
                            className="absolute lg:h-[11px] h-[13.94px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[74%]"
                            compId="I1:735;122:4696"
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
                          compId="385"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:735;122:4688"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector_10.svg"}
                            className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-x-[0] mx-[auto] object-contain top-[17%] w-[66%]"
                            compId="I1:735;122:4691"
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
                          compId="387"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={4}
                          compType="Stack"
                        >
                          <div
                            className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            compId="I1:735;122:4683"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="View"
                          ></div>
                          <Image
                            src={"images/img_vector_11.svg"}
                            className="absolute lg:h-[13px] h-[15.76px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] object-contain w-[66%]"
                            compId="I1:735;122:4686"
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

export default MyAccountPage;
