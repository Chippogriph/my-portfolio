import Badge from "@/components/badge/badge";
import Container from "@/components/container/Container";
import Hero from "@/components/hero/hero";
import ProjectCard from "@/components/project-card/project-card";
import SiteHeader from "@/components/site-header/site-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-dark-gray font-sans relative">
      
      <main className="flex flex-1 w-full flex-col items-center sm:items-start bg-signature-terracotta dark:bg-dark-terracotta-light">
        <SiteHeader />
        <Hero />
        <section id="about" className="px-4 pt-6 pb-16 mt-36 w-full">
          <Container className="flex justify-center">
            <div className="mr-8 flex-none">
              <Image
                src="/headshot.jpg"
                alt=""
                width={100}
                height={100}
                className="w-80 h-100 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="grow flex flex-col justify-center gap-4">
              <h2 className="text-3xl uppercase font-semibold">About me</h2>
              <span className="w-20 p-0.5 bg-dark-terracotta"></span>
              <p>Hej och välkommen hit!</p>
              <p>
                Efter ett par års distansstudier inom fullstackutveckling har
                jag byggt upp en bred teknisk grund inom webbutveckling. Nu
                söker jag mig vidare från skolmiljö och min praktik på 6 månader
                till ett sammanhang där jag kan utvecklas tillsammans med andra
                och bidra i riktiga projekt.
              </p>
              <p>
                Jag är noggrann, lösningsorienterad och har ett öga för detaljer
                vilket är egenskaper som hjälper mig att bygga gränssnitt som
                inte bara fungerar, utan också känns genomtänkta. Tillgänglighet
                och användarupplevelse är områden jag tycker är särskilt viktiga
                och något jag aktivt vill fortsätta utveckla.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg text-dark-gray opacity-50">Plats</h3>
                  <p>Falun, Dalarna</p>
                </div>
                <div>
                  <h3 className="text-lg text-dark-gray opacity-50">
                    Utbildning
                  </h3>
                  <p>Frontendutvecklare, EC Utbildning</p>
                </div>
                <div>
                  <h3 className="text-lg text-dark-gray opacity-50">
                    Tillgänglig
                  </h3>
                  <p>Enligt överenskommelse med nuvarande arbetsgivare</p>
                </div>
                <div>
                  <h3 className="text-lg text-dark-gray opacity-50">
                    Intressen
                  </h3>
                  <p>Gaming, styrkelyft och vandring</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section
          id="skills"
          className="px-4 py-16 w-full gap-6 bg-dark-terracotta"
        >
          <Container className="flex justify-center">
            <div className="grow min-w-1/3">
              <h2 className="mb-2 text-2xl font-semibold">Frontend</h2>
              <div className="flex flex-wrap gap-2">
                <Badge content="HTML / CSS" />
                <Badge content="JavaScript" />
                <Badge content="Tailwind" />
                <Badge content="SCSS" />
                <Badge content="TypeScript" />
                <Badge content="React" />
                <Badge content="Next.JS" />
              </div>
            </div>
            <div className="grow min-w-1/3">
              <h2 className="mb-2 text-2xl font-semibold">Backend</h2>
              <div className="flex flex-wrap gap-2">
                <Badge content="Express" />
                <Badge content="Node.js" />
                <Badge content="PHP" />
                <Badge content="SQL" />
              </div>
            </div>
            <div className="grow min-w-1/3">
              <h2 className="mb-2 text-2xl font-semibold">Övrigt</h2>
              <div className="flex flex-wrap gap-2">
                <Badge content="Git / Github" />
                <Badge content="Wordpress" />
                <Badge content="WPBakery" />
                <Badge content="Webflow" />
                <Badge content="WCAG" />
                <Badge content="SEO" />
                <Badge content="Figma" />
                <Badge content="Supabase" />
              </div>
            </div>
          </Container>
        </section>
        <section
          id="projects"
          className="py-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 max-w-5xl mx-auto"
        >
          <ProjectCard
            link="https://chippogriph-freaky-fashion.vercel.app/"
            title="Freaky Fashion"
            header="En e-handelsajt med fungerande frontend och backend"
            description="Lösningens frontend är byggd i Angular och backend är byggd med
              Express."
            details="Hosting sker på Vercel för frontend, Render för backend och Supabase hanterar databasen."
          />
          <ProjectCard
            link="/"
            title="TBL"
            header="En annan sajt"
            description="Lösningens frontend kommer byggas i React."
            details="Lorem Ipsum Dolor"
          />
        </section>
      </main>
    </div>
  );
}
