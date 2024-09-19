"use client";
import React from "react";
import { Input } from "antd";
import { CiSearch, CiGrid41 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
   const router = useRouter();

   return (
      <div className="hidden p-[20px]  border-b-2 border-gray-500 md:flex lg:flex justify-center items-center gap-[40px] hover:cursor-pointer">
         <Image src={logo} width={160} height={190} onClick={()=>router.push("/main")} />
         <div>
            <Input
               placeholder="Search for products"
               size="large"
               style={{ width: "400px", background: "#e6e6e6" }}
               prefix={<CiSearch size={20} onClick={() => alert("jd")} />}
            />
         </div>
         <div className=" flex justify-center items-center gap-[7px] rounded-2xl px-[10px] py-[5px] hover:cursor-pointer hover:bg-gray-300">
            <CiGrid41 size={27} /> Categories
         </div>
         <div className=" flex justify-center items-center gap-[7px] rounded-2xl px-[10px] py-[5px] hover:cursor-pointer hover:bg-gray-300 relative">
            <IoCartOutline size={27} /> Cart
         </div>
         <div className=" flex justify-center items-center gap-[7px] rounded-2xl px-[10px] py-[5px] hover:cursor-pointer hover:bg-gray-300">
            <MdAccountCircle size={27} /> Account
         </div>
      </div>
   );
}
