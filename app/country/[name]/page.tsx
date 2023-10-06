import Card from "@/app/components/Card";
import Image from "next/image";
import ICountryProps from "../../interfaces/IcountryProps";

type countryName = {
  params: {
    name: string;
  };
};

async function getCountryByName(name: string): Promise<ICountryProps> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: ICountryProps[] = await response.json();
  return countries.find(
    (country: ICountryProps) => country.name.common === name
  )!;
}

async function getCountryBordersByName(name: string) {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: ICountryProps[] = await response.json();

  const country = countries.find(
    (country: ICountryProps) => country.name.common === name
  )!;

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;

    return {
      name: borderCountry.name.common,
      ptName: borderCountry.translations.por.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt,
    };
  });
}

const CountryDetails = async ({ params: { name } }: countryName) => {
  const country = await getCountryByName(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name));

  const formatterPopulation = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="container flex flex-col">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-12">
        {country.translations.por.common}
      </h1>

      <article className="flex flex-col md:flex-row  justify-between min-w-full p-10 bg-white rounded-xl">
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
          {country.languages && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>Línguas faladas:</b> -{" "}
              {Object.values(country.languages).join(", ")}
            </h2>
          )}
        </section>

        <div className="relative md:h-auto h-48 w-96 shadow-md my-3 md:order-last order-first">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
            className="object-cover"
          />
        </div>
      </article>

      <section>
        {borderCountries && (
          <h3 className="mt-12 text-2xl font-semibold text-gray-800 mb-8 text-center">
            Países que fazem fronteira
          </h3>
        )}

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 container w-full gap-2 mt-12">
          {borderCountries?.map((country) => (
            <Card key={country.name} {...country} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CountryDetails;
