"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      if (!supabase) {
        throw new Error("Supabase client is not initialized. Please check your environment variables.");
      }

      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) throw error;

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Waitlist error:", err);
      setStatus("error");
    }
  };

  return {
    email,
    setEmail,
    status,
    submit,
  };
}
