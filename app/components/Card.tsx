import ICountryProps from "../interfaces/IcountryProps";
import Link from "next/link";
import Image from "next/image";

const Card = (country: ICountryProps) => {
  return (
    <Link href={`/country/${country.name.common}`}>
      <article
        key={country.name.common}
        className="h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl"
      >
        <div className="relative w-full h-40 p-2 overflow-hidden  rounded-xl">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="font-bold text-xl text-center mt-2 ">
          {country.translations.por.common}
        </h1>
      </article>
    </Link>
  );
};

export default Card;
