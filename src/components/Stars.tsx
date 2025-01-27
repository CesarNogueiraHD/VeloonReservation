import Image from "next/image";
import star from "public/star.svg";

interface StarsProps {
  stars: number;
}

export default function Stars({ stars }: StarsProps) {
  function renderStars() {
    const starsImages = [];
    for (let i = 0; i < stars; i++) {
      starsImages.push(<Image width={50} src={star} alt="Estrela" key={i} />);
    }

    return starsImages;
  }
  return <div className="flex">{renderStars()}</div>;
}
