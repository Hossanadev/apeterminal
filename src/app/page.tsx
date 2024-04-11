"use client"

import {TopBar} from "@/components/TopBar";
import {Hero} from "@/components/Hero";
import {Body} from "@/components/Body";
import {Footer} from "@/components/Footer";
import {useState} from "react";

export default function Home() {
  return (
    <main className="">
      <TopBar />
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}
