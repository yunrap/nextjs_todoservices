import Index from "@/components/Index/Index";
import type { NextPage } from "next";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "@/apis/setting";

const Page: NextPage = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default Page;
