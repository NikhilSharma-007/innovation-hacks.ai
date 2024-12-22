import React, { useState } from "react";

const AutomateDesign = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="relative">
      {/* Navbar  */}
      <div className="flex justify-between py-5 pl-11 pr-6 gap-[30px]">
        <div className="flex items-center font-quicksand font-medium text-[24px] leading-7 text-white gap-4">
          <div>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.24875 14.2012C9.8875 14.8487 10.2594 15.6952 10.4891 16.5418C10.9375 18.1868 10.9375 20.2212 10.9375 21.794V21.8749C10.9375 26.3768 10.0953 29.0499 9.14156 30.6403C8.78019 31.2657 8.30716 31.8196 7.74594 32.2743C7.5227 32.4471 7.28051 32.5939 7.02406 32.7118C7.02406 32.7118 6.74625 32.8124 6.5625 32.8124C6.40481 32.7999 6.24954 32.7661 6.10094 32.7118C5.84449 32.5939 5.6023 32.4471 5.37906 32.2743C4.81785 31.8196 4.34481 31.2657 3.98344 30.6403C3.02969 29.0521 2.1875 26.3768 2.1875 21.8749V21.7962C2.1875 20.2212 2.1875 18.189 2.63594 16.5396C2.86563 15.6952 3.2375 14.8487 3.87625 14.199C2.84375 13.2212 2.1875 11.6637 2.1875 9.84369C2.1875 9.13056 2.37781 8.27962 2.64031 7.49431C2.90281 6.709 3.27031 5.89306 3.69469 5.23681C4.2 4.38369 4.91094 3.66837 5.46219 3.18712C5.76552 2.92267 6.08085 2.6723 6.40719 2.43681L6.47281 2.39306L6.4925 2.37775L6.49906 2.37337L6.50344 2.37119C6.7041 2.23462 6.94448 2.16868 7.18674 2.18375C7.429 2.19882 7.65936 2.29405 7.84154 2.45443C8.02373 2.61482 8.14739 2.83125 8.19305 3.06964C8.23871 3.30803 8.20378 3.55483 8.09375 3.77119C8.07454 3.83429 8.06495 3.89992 8.06531 3.96587C8.06531 4.10369 8.10031 4.36619 8.43063 4.69431C8.59031 4.854 8.71281 4.96775 8.84625 5.09244C8.95563 5.19306 9.07156 5.29806 9.21813 5.44244C9.5025 5.71369 9.80219 6.03306 10.0713 6.43337C10.6291 7.27119 10.9375 8.319 10.9375 9.84369C10.9375 11.6637 10.2813 13.219 9.24875 14.2012ZM6.5625 15.3124C6.01563 15.3124 5.6875 15.4831 5.44031 15.7281C5.16469 16.0059 4.92625 16.4565 4.74688 17.1149C4.38375 18.4515 4.375 20.2059 4.375 21.8749C4.375 26.1231 5.17344 28.3718 5.86031 29.5159C6.12281 29.9534 6.37 30.2356 6.5625 30.4128C6.8388 30.1494 7.07533 29.8473 7.26469 29.5159C7.95156 28.3696 8.75 26.1231 8.75 21.8749C8.75 20.2059 8.74125 18.4515 8.37813 17.1149C8.19875 16.4587 7.96031 16.0059 7.68469 15.7281C7.4375 15.4831 7.10719 15.3124 6.5625 15.3124ZM4.375 9.84369C4.375 12.1887 5.72031 13.1249 6.5625 13.1249C7.40469 13.1249 8.75 12.1887 8.75 9.84369C8.75 8.634 8.51156 8.04119 8.24906 7.64744C8.08903 7.41779 7.90497 7.20586 7.7 7.01525L7.42875 6.7615C7.2435 6.59184 7.06118 6.419 6.88188 6.24306C6.64325 6.00576 6.43794 5.73716 6.27156 5.44462C5.99321 5.73748 5.74818 6.06029 5.54094 6.40712C5.23469 6.87744 4.93719 7.52275 4.71625 8.18775C4.48875 8.86587 4.375 9.46525 4.375 9.84369ZM15.3081 24.0034C14.5499 23.9187 13.804 23.7462 13.0856 23.4893C13.1119 22.941 13.125 22.3737 13.125 21.7874V21.1399C13.8031 21.4615 14.5381 21.6868 15.3081 21.7962V17.4999C15.3081 16.3396 15.7691 15.2268 16.5895 14.4063C17.41 13.5859 18.5228 13.1249 19.6831 13.1249H23.9816C23.8076 11.9155 23.3466 10.7652 22.6372 9.77026C21.9278 8.77533 20.9906 7.96465 19.9038 7.40597C18.8171 6.84729 17.6124 6.55684 16.3905 6.55889C15.1686 6.56094 13.9649 6.85543 12.88 7.41775C12.7082 6.7026 12.4247 6.01901 12.04 5.39212C13.4578 4.69143 15.0235 4.34265 16.6046 4.37531C18.1858 4.40796 19.7358 4.82109 21.1234 5.57972C22.5111 6.33835 23.6955 7.42015 24.5764 8.73353C25.4574 10.0469 26.0089 11.5532 26.1844 13.1249H28.4309C29.5913 13.1249 30.7041 13.5859 31.5245 14.4063C32.345 15.2268 32.8059 16.3396 32.8059 17.4999V26.2499C32.8059 27.4103 32.345 28.5231 31.5245 29.3435C30.7041 30.164 29.5913 30.6249 28.4309 30.6249H19.6809C18.5206 30.6249 17.4078 30.164 16.5873 29.3435C15.7669 28.5231 15.3059 27.4103 15.3059 26.2499L15.3081 24.0034ZM26.1866 15.3124C25.9388 17.5322 24.9435 19.6016 23.3642 21.181C21.7848 22.7603 19.7154 23.7556 17.4956 24.0034V26.2499C17.4956 26.8301 17.7261 27.3865 18.1363 27.7967C18.5466 28.207 19.103 28.4374 19.6831 28.4374H28.4331C29.0133 28.4374 29.5697 28.207 29.9799 27.7967C30.3902 27.3865 30.6206 26.8301 30.6206 26.2499V17.4999C30.6206 16.9198 30.3902 16.3634 29.9799 15.9531C29.5697 15.5429 29.0133 15.3124 28.4331 15.3124H26.1866ZM23.9816 15.3124H19.6831C19.103 15.3124 18.5466 15.5429 18.1363 15.9531C17.7261 16.3634 17.4956 16.9198 17.4956 17.4999V21.7984C19.1321 21.5625 20.6483 20.8033 21.8174 19.6342C22.9865 18.4651 23.7457 16.9489 23.9816 15.3124Z"
                fill="white"
              />
            </svg>
          </div>
          <span>Automate Design</span>
        </div>

        <div className="flex items-center w-60 h-10 gap-6">
          <div className="flex gap-2 py-[10px] px-4 w-20 h-10 font-quicksand font-semibold text-[16px] leading-5 text-white cursor-pointer">
            <div>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_23603)">
                  <path
                    d="M19.583 1.58301L9.68301 11.483M19.583 1.58301L13.283 19.583L9.68301 11.483M19.583 1.58301L1.58301 7.88301L9.68301 11.483"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_23603">
                    <rect width="20" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>Share</span>
          </div>

          <button className=" bg-white text-[#1C1C1C] w-36 h-11 py-[10px] px-4 border border-[#1E1E1E] rounded-[31px] flex items-center justify-center gap-2 ">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15.5L21 19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5L5 21.5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5L3 15.5M7 10.5L12 15.5M12 15.5L17 10.5M12 15.5L12 3.5"
                stroke="#1C1C1C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Download
          </button>
        </div>
      </div>

      {/* Customer Registration  */}
      <div className="flex items-center pl-6 gap-4">
        <div>
          <svg
            width="69"
            height="69"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9872 33.0128L24.1609 44.8391M25.4372 36.2563L19.6445 34.888C19.0072 34.7374 18.783 33.9462 19.2447 33.4829L23.8514 28.8762C24.1609 28.5667 24.5807 28.3894 25.0207 28.386L30.2145 28.3409M36.7566 22.3976C40.6223 25.0339 43.9661 28.3777 46.6024 32.2434M32.742 43.5628L34.1103 49.3555C34.2609 49.9928 35.0521 50.217 35.5154 49.7553L40.1222 45.1486C40.4316 44.8391 40.6089 44.4193 40.6123 43.9793L40.6575 38.7855M47.5943 29.5252L48.9459 23.0216C49.3139 21.2518 47.7482 19.6861 45.9784 20.0541L39.4748 21.4057C37.5595 21.8038 35.8032 22.7523 34.4215 24.1356L29.0854 29.47C27.0497 31.5057 25.7249 34.1453 25.3067 36.994L25.2883 37.1161C25.024 38.9343 25.6329 40.7693 26.9309 42.0691C28.229 43.3671 30.0657 43.976 31.8839 43.71L32.006 43.6916C34.8547 43.2751 37.4943 41.9486 39.53 39.9129L44.8644 34.5785C46.2477 33.1968 47.1962 31.4405 47.5943 29.5252Z"
              stroke="url(#paint0_linear_1_23659)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="34.5"
              cy="34.5"
              r="34.5"
              fill="url(#paint1_linear_1_23659)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_23659"
                x1="34"
                y1="20"
                x2="34"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BE0E9E" />
                <stop offset="1" stop-color="#8451E0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_23659"
                x1="34.5"
                y1="0"
                x2="15.3333"
                y2="69"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8353E2" stop-opacity="0.2" />
                <stop offset="1" stop-color="#B914A4" stop-opacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-white w-[262px] h-[30px] font-bold text-[24px] leading-[30px]">
            Customer Registration
          </span>
          <span className="text-white w-[132px] h-[30px] font-normal text-[16px] leading-[30px]">
            Automation Steps
          </span>
        </div>
      </div>

      {/* Accordions  */}
      <div className="h-[480px] overflow-y-scroll no-scrollbar">
        <div className="flex items-center gap-3">
          {/* Numbers  */}
          <div class="w-[52px] h-[52px] border-2 border-[#4664F3] rounded-full box-border mt-5 ml-4 p-2 flex item-center">
            <span className="text-white flex justify-center items-center p-3">
              1
            </span>
          </div>

          {/* Main  */}
          <div
            className="w-[50rem] min-h-[75px] p-4 mt-4 mr-6 mx-auto bg-[#151515] border-2 border-[#404040] rounded-[20px] box-border flex flex-col items-center justify-between cursor-pointer "
            onClick={handleClick}
          >
            <div className="flex items-center gap-20">
              <div className="flex flex-col ">
                <div class=" font-medium text-[20px] leading-[28px] text-white">
                  Customer Information Collection
                </div>

                <div class=" font-medium text-[16px] leading-[20px] text-[#A1A1A1]">
                  User enters personal details (eg. name, email, phone number)
                  and submits it
                </div>
              </div>

              {/* <!-- Assist button --> */}
              <button className="flex flex-row items-center justify-center gap-[10px] px-[20px] py-[10px] w-[78px] h-[40px] right-[24px] top-[calc(50%-20px)] bg-[#292929] border-[1.5px] border-white rounded-full">
                <span class="font-semibold text-[14px] leading-[20px] text-white">
                  Assist
                </span>
              </button>
            </div>

            {/* OnClick Accordion  */}
            {showDescription && (
              <div className="flex items-center justify-evenly w-[50rem] mx-auto p-4 -left-6 relative">
                <div className="relative w-[230px] h-[325px]  top-[9px] border-2 border-[#404040] rounded-[10px] box-border flex flex-col items-center p-4 m-2 gap-3">
                  <img
                    src="Website setup-amico 1.png"
                    alt="Website setup"
                    className="w-[180px] h-[183px]"
                  />

                  <span className="text-white w-[262px] h-[30px] font-bold text-[24px] leading-[30px] flex justify-center items-center">
                    <span>Start</span>
                  </span>

                  <button className="text-[#FF999B] left-4 w-[130px] h-[41px] border border-[#FF999B] rounded-[48px] box-border flex items-center justify-center cursor-pointer">
                    Trigger
                  </button>
                </div>

                <div className="flex flex-col items-center relative w-[230px] h-[325px]  top-[9px] border-2 border-[#404040] rounded-[10px] box-border p-4 m-2 gap-3">
                  <img
                    src="Data extraction-amico 1.png"
                    alt="Data extraction"
                    className="w-[298px] h-[186px]"
                  />
                  <span className="text-white w-[262px] h-[30px] font-bold text-[24px] leading-[30px] flex justify-center items-center">
                    <span>Activity</span>
                  </span>
                  <button className=" text-[#B8FF91] left-4 w-[130px] h-[41px] border border-[#B8FF91] rounded-[48px] box-border flex items-center justify-center cursor-pointer">
                    Input
                  </button>
                </div>

                <div className="relative flex flex-col items-center w-[230px] h-[325px]  top-[9px] border-2 border-[#404040] rounded-[10px] box-border p-4 m-2 gap-3">
                  <img
                    src="Dark analytics-cuate 1.png"
                    alt="Dark anlytics"
                    className="w-[240px] h-[186px]"
                  />
                  <span className="text-white w-[262px] h-[30px] font-bold text-[24px] leading-[30px] flex justify-center items-center">
                    <span>Result</span>
                  </span>
                  <button className="text-[#FF9BE1] left-4 w-[130px] h-[41px] border border-[#FF9BE1] rounded-[48px] box-border flex items-center justify-center gap-3 cursor-pointer">
                    Output
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Numbers  */}
          <div class="w-[52px] h-[52px] border-2 border-[#4664F3] rounded-full box-border mt-5 ml-4 p-2 flex item-center">
            <span className="text-white flex justify-center items-center p-3">
              2
            </span>
          </div>

          {/* Main  */}
          <div className="w-[50rem] min-h-[75px] p-4 mt-4 mr-6 mx-auto bg-[#151515] border-2 border-[#404040] rounded-[20px] box-border flex flex-col items-center justify-between cursor-pointer ">
            <div className="flex items-center gap-20">
              <div className="flex flex-col ">
                <div class=" font-medium text-[20px] leading-[28px] text-white">
                  Customer Information Collection
                </div>

                <div class=" font-medium text-[16px] leading-[20px] text-[#A1A1A1]">
                  User enters personal details (eg. name, email, phone number)
                  and submits it
                </div>
              </div>

              {/* <!-- Assist button --> */}
              <button className="flex flex-row items-center justify-center gap-[10px] px-[20px] py-[10px] w-[78px] h-[40px] right-[24px] top-[calc(50%-20px)] bg-[#292929] border-[1.5px] border-white rounded-full">
                <span class="font-semibold text-[14px] leading-[20px] text-white">
                  Assist
                </span>
              </button>
            </div>

            {/* OnClick Accordion  */}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Numbers  */}
          <div class="w-[52px] h-[52px] border-2 border-[#4664F3] rounded-full box-border mt-5 ml-4 p-2 flex item-center">
            <span className="text-white flex justify-center items-center p-3">
              3
            </span>
          </div>

          {/* Main  */}
          <div className="w-[50rem] min-h-[75px] p-4 mt-4 mr-6 mx-auto bg-[#151515] border-2 border-[#404040] rounded-[20px] box-border flex flex-col items-center justify-between cursor-pointer ">
            <div className="flex items-center gap-20">
              <div className="flex flex-col ">
                <div class=" font-medium text-[20px] leading-[28px] text-white">
                  Customer Information Collection
                </div>

                <div class=" font-medium text-[16px] leading-[20px] text-[#A1A1A1]">
                  User enters personal details (eg. name, email, phone number)
                  and submits it
                </div>
              </div>

              {/* <!-- Assist button --> */}
              <button className="flex flex-row items-center justify-center gap-[10px] px-[20px] py-[10px] w-[78px] h-[40px] right-[24px] top-[calc(50%-20px)] bg-[#292929] border-[1.5px] border-white rounded-full">
                <span class="font-semibold text-[14px] leading-[20px] text-white">
                  Assist
                </span>
              </button>
            </div>

            {/* OnClick Accordion  */}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Numbers  */}
          <div class="w-[52px] h-[52px] border-2 border-[#4664F3] rounded-full box-border mt-5 ml-4 p-2 flex item-center">
            <span className="text-white flex justify-center items-center p-3">
              4
            </span>
          </div>

          {/* Main  */}
          <div className="w-[50rem] min-h-[75px] p-4 mt-4 mr-6 mx-auto bg-[#151515] border-2 border-[#404040] rounded-[20px] box-border flex flex-col items-center justify-between cursor-pointer ">
            <div className="flex items-center gap-20">
              <div className="flex flex-col ">
                <div class=" font-medium text-[20px] leading-[28px] text-white">
                  Customer Information Collection
                </div>

                <div class=" font-medium text-[16px] leading-[20px] text-[#A1A1A1]">
                  User enters personal details (eg. name, email, phone number)
                  and submits it
                </div>
              </div>

              {/* <!-- Assist button --> */}
              <button className="flex flex-row items-center justify-center gap-[10px] px-[20px] py-[10px] w-[78px] h-[40px] right-[24px] top-[calc(50%-20px)] bg-[#292929] border-[1.5px] border-white rounded-full">
                <span class="font-semibold text-[14px] leading-[20px] text-white">
                  Assist
                </span>
              </button>
            </div>

            {/* OnClick Accordion  */}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Numbers  */}
          <div class="w-[52px] h-[52px] border-2 border-[#4664F3] rounded-full box-border mt-5 ml-4 p-2 flex item-center">
            <span className="text-white flex justify-center items-center p-3">
              5
            </span>
          </div>

          {/* Main  */}
          <div className="w-[50rem] min-h-[75px] p-4 mt-4 mr-6 mx-auto bg-[#151515] border-2 border-[#404040] rounded-[20px] box-border flex flex-col items-center justify-between cursor-pointer ">
            <div className="flex items-center gap-20">
              <div className="flex flex-col ">
                <div class=" font-medium text-[20px] leading-[28px] text-white">
                  Customer Information Collection
                </div>

                <div class=" font-medium text-[16px] leading-[20px] text-[#A1A1A1]">
                  User enters personal details (eg. name, email, phone number)
                  and submits it
                </div>
              </div>

              {/* <!-- Assist button --> */}
              <button className="flex flex-row items-center justify-center gap-[10px] px-[20px] py-[10px] w-[78px] h-[40px] right-[24px] top-[calc(50%-20px)] bg-[#292929] border-[1.5px] border-white rounded-full">
                <span class="font-semibold text-[14px] leading-[20px] text-white">
                  Assist
                </span>
              </button>
            </div>

            {/* OnClick Accordion  */}
          </div>
        </div>
      </div>

      {/* Search Input  */}
      <div class="absolute flex items-center p-2 w-[50rem] max-w-7xl mt-9 mx-auto top-[605px] left-6 h-10 -left[1px] bg-[#262626] border-2 border-[#BCBCBC] rounded-[34px] placeholder:text-white placeholder:p-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search here to customize your discovery process....."
          class="flex-1 bg-transparent outline-none px-2"
        />

        <div className="gap-1 flex items-center">
          <butoon class="cursor-pointer">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.8574V21.4289"
                stroke="#9095A0"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M17.1429 10.2861C17.1429 15.0201 13.945 18.8576 10 18.8576C6.05504 18.8576 2.85718 15.0201 2.85718 10.2861"
                stroke="#9095A0"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M14.2857 7.71415C14.2857 4.87382 12.3669 2.57129 9.99995 2.57129C7.63301 2.57129 5.71423 4.87382 5.71423 7.71415L5.71423 10.2856C5.71423 13.1259 7.63301 15.4284 9.99995 15.4284C12.3669 15.4284 14.2857 13.1259 14.2857 10.2856V7.71415Z"
                stroke="#9095A0"
                stroke-width="1.37143"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
          </butoon>

          <butoon class="cursor-pointer">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5965 2.32932L17.5782 2.3952V2.40116L13.0528 17.3255L13.0527 17.3255L13.0501 17.3347C13.0091 17.48 12.9245 17.6094 12.8078 17.7054C12.6911 17.8013 12.5478 17.8593 12.3972 17.8715L12.3943 17.8717C12.3727 17.8736 12.3512 17.8745 12.3297 17.8745L12.3282 17.8745C12.1872 17.875 12.049 17.8351 11.9299 17.7595C11.8109 17.684 11.7159 17.5759 11.6562 17.4481L11.6551 17.4456L8.92187 11.6754L13.3021 7.29445L13.3022 7.29457L13.311 7.28531C13.5131 7.07262 13.624 6.7894 13.6203 6.49604C13.6165 6.20269 13.4983 5.9224 13.2909 5.71495L12.9373 6.0685L13.2909 5.71495C13.0834 5.5075 12.8031 5.38929 12.5098 5.38554C12.2164 5.38178 11.9332 5.49277 11.7205 5.69484L11.7204 5.69473L11.7116 5.7035L7.32425 10.084L1.58443 7.36485L1.58445 7.36481L1.57863 7.36214C1.43847 7.29793 1.32053 7.19358 1.23972 7.06229C1.1594 6.9318 1.11937 6.78053 1.1246 6.62744C1.13273 6.47318 1.18885 6.32528 1.28514 6.20443C1.38202 6.08286 1.51465 5.99481 1.6643 5.95273L1.66433 5.95283L1.67405 5.94988L16.5984 1.42452H16.6049L16.6712 1.40588C16.7993 1.36989 16.9347 1.36863 17.0635 1.40223L17.1897 0.918429L17.0635 1.40223C17.1922 1.43583 17.3097 1.50307 17.4039 1.59706C17.4981 1.69106 17.5655 1.80841 17.5994 1.9371C17.6333 2.06578 17.6323 2.20115 17.5965 2.32932ZM7.23062 10.1775C7.2308 10.1773 7.23097 10.1771 7.23116 10.1769L7.23062 10.1775Z"
                fill="#9095A0"
                stroke="#9095A0"
              />
            </svg>
          </butoon>
        </div>
      </div>
    </div>
  );
};

export default AutomateDesign;
