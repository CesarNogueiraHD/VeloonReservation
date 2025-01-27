import moment from "moment";
import type { ReservationDetails } from "@/types/Reservation";

interface CardReservationProps {
  reservation: ReservationDetails;
}

export default function CardReservation({ reservation }: CardReservationProps) {
  return (
    <div className="text-white bg-[#9d07d1] mr-40 ml-28 mb-10 h-32 rounded-2xl px-6 py-2">
      <h1 className="text-2xl">{reservation.hotel.title}</h1>
      <p>
        Data de check-in: {moment(reservation.startDate).format("DD/MM/yyyy")}
      </p>
      <p>
        Data de check-out: {moment(reservation.endDate).format("DD/MM/yyyy")}
      </p>
    </div>
  );
}
