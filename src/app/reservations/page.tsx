"use client";
import { useEffect, useState } from "react";
import { getReservations } from "@/services/reservationsService";
import type { Reservation, ReservationDetails } from "@/types/Reservation";
import CardReservation from "@/components/CardReservation";

export default function Reservation() {
  const [reservations, setReservations] = useState<ReservationDetails[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await getReservations();
    setReservations(result);
  }

  return (
    <div className="pt-10 pb-10">
      {reservations.map((r) => (
        <CardReservation reservation={r} key={r.id} />
      ))}
    </div>
  );
}
