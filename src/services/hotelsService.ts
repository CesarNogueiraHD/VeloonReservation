import type { Hotel } from "@/types/Hotel";
import api from "../data/api";

export async function getHotels() {
  const hotels: Hotel[] = (await api.get("/hotels")).data;
  return hotels;
}

export async function getHotelById(id: string) {
  const hotel: Hotel = (await api.get(`/hotels/${id}`)).data;
  return hotel;
}
