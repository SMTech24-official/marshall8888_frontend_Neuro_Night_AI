
import Popups from "@/component/ai-bots/Popups";
import ReviewsCard from "@/component/makeManey/ReviewsCard";
import StrategyCard from "@/component/makeManey/StrategyCard";
import Features from "@/component/sellCourse/Features";
import Container from "@/component/shared/Container";
import { LeftBorder } from "@/component/shared/LeftBorder";

import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";

import SubHeader from "@/component/shared/SubHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import smallImage from "@/../public/small.png"
import LaunchAdForm from "@/component/allForms/LaunchAdForm";




const Page = () => {
 

  return (
    <div>
      <Container>
      {/* heading  */}
        <div className="md:h-2/3 w-1/2 mx-auto">
         <MainHeader title="Want to create and sell your own course like this?" header="" />
        </div>
        <div className="mx-auto w-4/10 h-[40px] flex justify-center">

        <Image src={smallImage} alt="redLine" />
        </div>
        <p className="text-center text-lg">Start a course project in 7 days</p>
        <Button className="mx-auto block px-6 bg-red-600 my-6">Launch my course</Button>
        <p className="text-center text-lg">Unlock in Level 20</p>

        {/* Features section and card  */}
        <div className="lg:mt-30 mt-18 mb-16">
          <h2 className="lg:text-4xl font-semibold text-center text-2xl text-white mb-11">
            Features
          </h2>
          <LeftBorder>
            <Features/>
          </LeftBorder>
        </div>

       
        {/* Launch Your Ad Campaign setion  */}

        <div>
          <SubHeader title="Launch Your Ad Campaign" />
          <div>
            <LeftBorder>
              {/* <StrategyCard /> */}
              <LaunchAdForm/>
            </LeftBorder>
          </div>
        </div>

        {/* latest reviews card show sectoin  */}

        <div className="my-10">
          <h2 className="lg:text-4xl font-semibold text-2xl text-white my-11 text-center leading-[54px]">
            Latest reviews
          </h2>

          <ReviewsCard />
        </div>

      
      </Container>
    </div>
  );
};

export default Page;
