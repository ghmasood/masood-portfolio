import { fa } from "@/locale/fa";
import { useRouter } from "next/router";
import React from "react";

function ChangeLang() {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between">
      <button
        className="px-6 border-2 border-red-500"
        onClick={() => {
          router.push(router.pathname, undefined, { locale: "fa" });
        }}
      >
        fa
      </button>
      <button
        className="px-6 border-2 border-red-500"
        onClick={() => {
          router.push(router.pathname, undefined, { locale: "en" });
        }}
      >
        en
      </button>
    </div>
  );
}

export default ChangeLang;
