import type { ReservationDetails, ReservationInput } from "@/types/Reservation";
import api from "../data/api";

export async function getReservations() {
  const reservations: ReservationDetails[] = (await api.get("/reservations"))
    .data;
  return reservations;
}

export async function getReservationById(id: string) {
  const reservation: ReservationDetails = (await api.get(`/reservations/${id}`))
    .data;
  return reservation;
}

export async function createReservation(input: ReservationInput) {
  const response = await api.post("/reservations", input);
  if (response.status !== 201)
    throw new Error(`Erro ao criar a reserva: ${response.data}`);
  return response.data;
}
