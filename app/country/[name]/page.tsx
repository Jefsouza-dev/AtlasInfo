import Image from "next/image";
import ICountryProps from "../../interfaces/IcountryProps";

type countryName = {
  params: {
    name: string;
  };
};

async function getCountryByName(name: string): Promise<ICountryProps> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return (await response.json())[0];
}

const CountryDetails = async ({ params: { name } }: countryName) => {
  const country = await getCountryByName(name);

  const formatterPopulation = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="container flex flex-col">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        {country.translations.por.common}
      </h1>

      <article className="flex justify-between min-w-full p-10 bg-white rounded-xl">
        <section>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>Capital:</b> - {country.capital}
          </h2>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>Continente:</b> - {country.region} - {country.subregion}
          </h2>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>População:</b> - {formatterPopulation.format(country.population)}
          </h2>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>Línguas faladas:</b> -{" "}
            {Object.values(country.languages).join(", ")}
          </h2>
        </section>

        <div className="relative h-auto w-96 shadow-md">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
            className="object-cover"
          />
        </div>
      </article>
    </section>
  );
};

export default CountryDetails;
