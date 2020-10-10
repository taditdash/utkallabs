import Head from "next/head";
import {
  Heading,
  Box,
  Image,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  SimpleGrid,
  useDisclosure
} from "@chakra-ui/core";
import React from "react";
import Footer from "components/Footer";
import GridSection from "@/components/GridSection";
import GridCard from "components/GridCard";
import GridHeader from "components/GridHeader";
import GridCardSection from "@/components/GridCardSection";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GraphQLClient } from "graphql-request";
import HeroSection from "components/HeroSection";
import { PrimaryButton } from "components/Buttons";
import ContactUs from "components/ContactForm";

const contentful = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/kn9wi23xyla8?access_token=Ctw9v2SvPjge4r5Eb-z5kqk7AaYV9fVtYhhsQwRcc8U"
);

export async function getStaticProps() {
  const { homepageCollection, serviceCollection } = await contentful.request(
    `
     query {
      serviceCollection {
        items {
          slug
          serviceTitle
          serviceDescription
          serviceImage {
            url
          }
        }
      }
      homepageCollection {
        items {
          heroTitle
          heroHeading
          heroDescription
          heroImage {
            url
          }
        }
      }
    }  
    `
  );
  return {
    props: {
      homepageCollection,
      serviceCollection
    }
  };
}

const Home = ({ homepageCollection, serviceCollection }) => {
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Head>
        <title>Home - UtkalLabs</title>
      </Head>

      {homepageCollection.items.map((home) => (
        <HeroSection
          title={home.heroTitle}
          heading={home.heroHeading}
          description={home.heroDescription}
          src={home.heroImage.url}
          alt="Hero Image"
        >
          <PrimaryButton text="Work with us!" onClick={onOpen} height="60px" />
        </HeroSection>
      ))}

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}
        preserveScrollBarGap
      >
        <DrawerOverlay />
        <DrawerContent bg="white" roundedTop={[20]}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              textAlign="center"
              fontWeight="extrabold"
              color="gray.50"
              mt="20px"
            >
              Let's build together!
            </Heading>
          </DrawerHeader>
          <DrawerBody px={["25px", "25px", "220px", "280px"]}>
            <ContactUs />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <GridSection bgcolor="#F5F8FE">
        <GridHeader title="SERVICES" heading="We can help you with" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        >
          {serviceCollection.items.map((service) => (
            <GridCard
              size={["2xl", "2xl", "3xl", "3xl"]}
              color="gray.100"
              key={service.slug}
              src={service.url}
              cardheading={service.serviceTitle}
              carddescription={service.serviceDescription}
              iconheight="200px"
            >
              {service.serviceImage && (
                <Image
                  h="200px"
                  src={service.serviceImage.url}
                  alt={service.slug}
                />
              )}
            </GridCard>
          ))}
        </GridCardSection>
      </GridSection>

      <GridSection>
        <GridHeader title="WORKFLOW" heading="How we get it done" />
        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        >
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Clear project goals"
            carddescription="We’ll discuss what your business needs most to thrive, and focus on it during the whole project.."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="clear-project-goals"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Perfect toolset"
            carddescription="Thanks to our expertise we’ll offer you a couple of technologies, that will suit your interests best."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="perfect-toolset"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Transparent work environment"
            carddescription="Slack workspace, Jira board, GitHub repository, you’ll get access to all of these to always be in the know how your project’s going on."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="transparent-work-environment"
          />
          <GridCard
            size={("xl", "xl", "2xl", "2xl")}
            color="gray.100"
            cardheading="Afterproject relationship"
            carddescription="Our team will be happy to stay with you even after the project ends, handling your feature requests and maintenance, so you can grow your business in peace."
            src="https://images.ctfassets.net/x7ylmnfcd6wz/1IhJijGG5TDrRWbAgBCqlq/2f79acebcf9709cae34d61b178c9e830/service_icon_05.webp?h=250"
            alt="afterproject-relationship"
          />
        </GridCardSection>
      </GridSection>

      <GridSection bgcolor="#F5F8FE" mb={["10px", "10px", "60px", "60px"]}>
        <GridHeader
          title="TECHNOLOGIES WE USE"
          heading="Beautifying the web"
          description="Every project is a new story, yet some things stay the same. We pick a dedicated set of tools for each one, for the best performance possible."
        />
        <Heading
          fontSize={["md", "md", "lg", "lg"]}
          color="gray.100"
          fontWeight="extrabold"
          letterSpacing="widest"
          textAlign="center"
        >
          FRONTEND
        </Heading>

        <Stack justify="space-between" my="30px" direction="row">
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3CZzHnwO7eOVjSG64SFHa5/090508af594c83373c97d281f193b6b7/react.png?h=250"
              alt="reactjs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3qwapEKPNMWffUAmnK6GOh/f4a3a6951da2ea1c5f72b5534ac0bfaa/next.png?h=250"
              alt="nextjs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/6s9iFYT8aCo3UvUGrBGicT/f03cf05461f27522ef3ed1beaaa8b121/vue.png?h=250"
              alt="vuejs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3NX1mMpGnexKO13k534A6I/253aac96692cb354f2c1a0f52247dd1a/nuxt.png?h=250"
              alt="nuxtjs"
              opacity="0.5"
            />
          </Box>
        </Stack>

        <Heading
          mt="40px"
          fontSize={["md", "md", "lg", "lg"]}
          color="gray.100"
          fontWeight="extrabold"
          letterSpacing="widest"
          textAlign="center"
        >
          BACKEND
        </Heading>
        <Stack justify="space-between" my="30px" direction="row">
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3uabch66tk4kKVUh04zwXZ/0298a9e6c6a227db6ccfffe4b8eaf8d9/express.png?h=250"
              alt="Express"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3qwapEKPNMWffUAmnK6GOh/f4a3a6951da2ea1c5f72b5534ac0bfaa/next.png?h=250"
              alt="nextjs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/6s9iFYT8aCo3UvUGrBGicT/f03cf05461f27522ef3ed1beaaa8b121/vue.png?h=250"
              alt="vuejs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3NX1mMpGnexKO13k534A6I/253aac96692cb354f2c1a0f52247dd1a/nuxt.png?h=250"
              alt="nuxtjs"
              opacity="0.5"
            />
          </Box>
        </Stack>

        <Heading
          mt="40px"
          fontSize={["md", "md", "lg", "lg"]}
          color="gray.100"
          fontWeight="extrabold"
          letterSpacing="widest"
          textAlign="center"
        >
          DATA SOURCES
        </Heading>
        <Stack justify="space-between" my="30px" direction="row">
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3uabch66tk4kKVUh04zwXZ/0298a9e6c6a227db6ccfffe4b8eaf8d9/express.png?h=250"
              alt="Express"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3qwapEKPNMWffUAmnK6GOh/f4a3a6951da2ea1c5f72b5534ac0bfaa/next.png?h=250"
              alt="nextjs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/6s9iFYT8aCo3UvUGrBGicT/f03cf05461f27522ef3ed1beaaa8b121/vue.png?h=250"
              alt="vuejs"
              opacity="0.5"
            />
          </Box>
          <Box>
            <Image
              src="https://images.ctfassets.net/kn9wi23xyla8/3NX1mMpGnexKO13k534A6I/253aac96692cb354f2c1a0f52247dd1a/nuxt.png?h=250"
              alt="nuxtjs"
              opacity="0.5"
            />
          </Box>
        </Stack>
      </GridSection>

      <Footer onClick={onOpen} />
    </>
  );
};

export default Home;
