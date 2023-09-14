"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>Sheet</>;
};
