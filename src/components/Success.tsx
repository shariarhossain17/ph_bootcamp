import { Building2, Globe, Users } from "lucide-react";
import {
  jobPlacement,
  partnerCompany,
  supportMember,
} from "../config/successText";
const Success = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 p-4  justify-center items-center py-32 ">
        {/* First Card  */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm w-[350px] h-[172px]">
          <div className="w-12 h-12 mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center relative">
              <Globe className="w-6 h-6 text-white" />
              <div className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1 border border-white"></div>
              <div className="absolute w-2 h-2 bg-red-500 rounded-full bottom-2 left-0 border border-white"></div>
            </div>
          </div>
          <div className="text-5xl font-bold text-teal-400">
            {jobPlacement}+
          </div>
          <div className="text-gray-700 mt-1 text-center">
            জব প্লেসমেন্ট বিশ্বব্যাপি
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm  w-[350px] h-[172px]">
          <div className="w-12 h-12 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-5xl font-bold text-blue-400">
            {partnerCompany}+
          </div>
          <div className="text-gray-700 mt-1 text-center">
            পার্টনার কোম্পানি
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm  w-[350px] h-[172px]">
          <div className="w-12 h-12 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
            {supportMember}+
          </div>
          <div className="text-gray-700 mt-1 text-center">
            ডেডিকেটেড সাপোর্ট মেম্বার
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
