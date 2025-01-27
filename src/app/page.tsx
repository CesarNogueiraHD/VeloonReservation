"use client";
import { getHotels } from "../services/hotelsService";
import { useEffect, useState } from "react";
import type { Hotel } from "@/types/Hotel";
import CardHotel from "@/components/CardHotel";

export default function Home() {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const hotels = await getHotels();
    setHotels(hotels);
  }

  return (
    <div className="pt-10 pb-10">
      {hotels.map((h) => (
        <CardHotel hotel={h} key={h.id} />
      ))}
    </div>
  );
}
