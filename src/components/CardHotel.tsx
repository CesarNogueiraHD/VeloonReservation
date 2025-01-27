import Image from "next/image";
import type { Hotel } from "@/types/Hotel";
import emptyImage from "public/empty-image.webp";
import Stars from "./Stars";
import Link from "next/link";

interface CardHotelProps {
  hotel: Hotel;
}

export default function CardHotel({ hotel }: CardHotelProps) {
  return (
    <Link href={`/reservations/${hotel.id}`}>
      <div className="mb-10 h-64 bg-[#9d07d1] mr-10 rounded-3xl flex">
        <Image
          src={hotel.image ? `http://localhost:3333${hotel.image}` : emptyImage}
          alt="Imagem do hotel"
          width={250}
          height={0}
          style={{
            height: hotel.image ? "65%" : 250,
          }}
          className={hotel.image ? "mx-5 my-12" : ""}
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-white font-bold uppercase mt-2">
              {hotel.title}
            </h1>
            <Stars stars={hotel.stars} />
          </div>

          <div className="mb-3">
            <p>
              <small className="text-white">{hotel.description}</small>
            </p>

            <p>
              <small className="text-white">{hotel.address}</small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
