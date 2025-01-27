"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Stars from "@/components/Stars";
import { getHotelById } from "@/services/hotelsService";
import { createReservation } from "@/services/reservationsService";
import type { Hotel } from "@/types/Hotel";

import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

const reservationInput = z.object({
  startDate: z.date(),
  endDate: z.date(),
});

export default function ReservateHotel({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const hotel = await getHotelById(id);
    setHotel(hotel);
  }
  const router = useRouter();
  const [hotel, setHotel] = useState<Hotel>({} as Hotel);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { control, handleSubmit, setValue } = useForm<ReservationInputForm>({
    resolver: zodResolver(reservationInput),
  });

  type ReservationInputForm = z.infer<typeof reservationInput>;

  async function handleSubmitForm(data: ReservationInputForm) {
    const result = await createReservation({ ...data, hotelId: id });
    console.log(result);
    toast.success(result.message, {
      autoClose: 3000,
    });
    router.back();
  }

  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold mb-3">{hotel.title}</h1>

      <Stars stars={hotel.stars} />

      <p className="mt-5">Descritivo: {hotel.description}</p>
      <p>Endereço: {hotel.address}</p>

      <form className="mt-10" onSubmit={handleSubmit(handleSubmitForm)}>
        <h2 className="text-3xl">Faça sua reserva: </h2>

        <div className="flex flex-col w-80">
          <Controller
            name="startDate"
            control={control}
            defaultValue={startDate ?? undefined}
            render={() => (
              <DatePicker
                selected={startDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => {
                  if (!date) return;
                  setValue("startDate", date);
                  setStartDate(date);
                }}
                className="border-2 border-[#9d07d1] rounded-xl h-10 outline-none my-2 w-full text-[#9d07d1] pl-2"
              />
            )}
          />

          <Controller
            name="endDate"
            control={control}
            defaultValue={endDate ?? undefined}
            render={() => (
              <DatePicker
                selected={endDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => {
                  if (!date) return;
                  setValue("endDate", date);
                  setEndDate(date);
                }}
                className="border-2 border-[#9d07d1] rounded-xl h-10 outline-none my-2 w-full text-[#9d07d1] pl-2"
              />
            )}
          />

          <button className="bg-[#9d07d1] h-10 text-white my-2 rounded-xl hover:bg-[#8106ab]">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
