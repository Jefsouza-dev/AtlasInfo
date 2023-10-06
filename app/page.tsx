import ICountryProps from "./interfaces/IcountryProps";
import Card from "./components/Card";

async function getCountries(): Promise<ICountryProps[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 container w-full gap-2 mt-16">
      {countries.map((country) => (
        <Card
          key={country.name.common}
          name={country.name.common}
          ptName={country.translations.por.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
        />
      ))}
    </section>
  );
}
