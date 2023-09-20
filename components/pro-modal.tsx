"use client";

import axios from "axios";
import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { tools } from "@/constants";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-x-2 font-bold text-xl">
        Upgrade to GenAI
      </div>

      <Button
        disabled={loading}
        onClick={onSubscribe}
        size="lg"
        variant="premium"
        className="w-full"
      >
        Upgrade
        <Zap className="w-4 h-4 ml-2 fill-white" />
      </Button>
    </>
  );
};
