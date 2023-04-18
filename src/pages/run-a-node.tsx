// Libraries
import React, { ReactNode } from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import styled from "@emotion/styled"
import { Box, chakra, Text, type Icon as ChakraIcon } from "@chakra-ui/react"

// Assets
import Dappnode from "../assets/run-a-node/dappnode.svg"
import Dapptap from "../assets/run-a-node/dapptap.svg"
import Terminal from "../assets/run-a-node/terminal.svg"
import {
  DecentralizationGlyphIcon,
  DownloadGlyphIcon,
  EarthGlyphIcon,
  HardwareGlyphIcon,
  MegaphoneGlyphIcon,
  PrivacyGlyphIcon,
  SovereigntyGlyphIcon,
  VoteGlyphIcon,
} from "../components/icons/run-a-node"

// Components
import PageHero, { IContent } from "../components/PageHero"
import PageMetadata from "../components/PageMetadata"
import Translation from "../components/Translation"
import {
  Content,
  Divider,
  Page,
  InfoGrid,
  Width60,
  Width40,
} from "../components/SharedStyledComponents"
import ExpandableCard from "../components/ExpandableCard"
import ExpandableInfo from "../components/ExpandableInfo"
import Emoji from "../components/OldEmoji"
import Link from "../components/Link"
import ButtonLink from "../components/ButtonLink"
import FeedbackCard from "../components/FeedbackCard"
import Icon from "../components/Icon"
import NakedButton from "../components/NakedButton"

// Utils
import { translateMessageId, TranslationKey } from "../utils/translations"
import { scrollIntoView } from "../utils/scrollIntoView"
import { getImage } from "../utils/image"

type ChildOnlyProp = { children: ReactNode }

// Styles

const GappedPage = chakra(Page, {
  baseStyle: {
    gap: { base: 12, lg: 16 },
    "*": {
      scrollMarginTop: 22,
    },
  },
})

const GappedContent = chakra(Content, {
  baseStyle: {
    gap: { base: 8, lg: 12 },
    px: 4,
    py: { base: 0, md: 8, lg: 16 },
    display: "flex",
    flexDir: "column",
  },
})

const HeroContainer = (props: ChildOnlyProp) => {
  return <Box background="runNodeGradient" w="100%" {...props} />
}

const Hero = chakra(PageHero, {
  baseStyle: {
    pb: 8,
  },
})

const TwoColumnContent = (props: ChildOnlyProp) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={8}
      gap={8}
      flexDirection={{ base: "column", lg: "inherit" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      ml={{ base: 0, lg: "inherit" }}
      mr={{ base: 0, lg: "inherit" }}
      {...props}
    />
  )
}

const SplitContent = (props: ChildOnlyProp) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={8}
      flexDirection={{ base: "column-reverse", md: "inherit" }}
      width={{ base: "100%", md: "auto" }}
      {...props}
    />
  )
}

const Column = (props: ChildOnlyProp) => {
  return <Box flex={1} {...props} />
}

const ResponsiveButtonLink = chakra(ButtonLink, {
  baseStyle: {
    gap: 4,
    pl: 8,
    pr: 8,
    _hover: {
      svg: {
        fill: "buttonColor",
        transform: "scale(1.15)",
        transition: "0.1s",
      },
    },
    width: { base: "100%", md: "auto" },
    justifyContent: { base: "center", md: "flex-start" },
  },
})

const Highlight = styled(Content)<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 2rem 6rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  isolation: isolate;
  svg {
    margin: 0 0 0 2rem;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    svg {
      margin: 0 2rem 0 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 2rem;
    flex-direction: column-reverse;
    &:nth-of-type(even) {
      flex-direction: column-reverse;
      svg {
        margin: 0 0 2rem;
      }
    }
    svg {
      margin: 0 0 2rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: inherit;
    filter: blur(1rem);
  }
`
//TODO
// const Highlight = chakra(Content, {
//  baseStyle: {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   // background: "backgroundColor",
//   border: "1px solid #dadada",
//   boxSizing: "border-box",
//   borderRadius: "4px",
//   padding: "2rem 6rem",
//   color: "text",
//   position: "relative",
//   isolation: "isolate",
//   "@media (max-width: 48em)": {
//     padding: "2rem",
//     flexDirection: "column-reverse",
//     "&:nth-of-type(even)": {
//       flexDirection: "column-reverse",
//       "& svg": {
//         margin: "0 0 2rem",
//       },
//     },
//     "& svg": {
//       margin: "0 0 2rem",
//     },
//   },
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     inset: 0,
//     zIndex: -1,
//     background: "inherit",
//     filter: "blur(1rem)",
//   },
//   svg: {
//     ml: 8,
//   },
//   _even: {
//     flexDirection: "row-reverse",
//     svg: {
//       ml: 0,
//       mr: 8,
//     },
//   },

//  }

// })

const SoftwareHighlight = chakra(Highlight)

const ColumnFill = (props: ChildOnlyProp) => {
  return (
    <Box
      lineHeight={2}
      boxSizing="border-box"
      flex={1}
      width={{ base: "100%", md: "auto" }}
      listStyleType="none"
      {...props}
    />
  )
}

const ColumnNarrow = (props: ChildOnlyProp) => {
  return (
    <Box
      boxSizing="border-box"
      justifyContent="center"
      alignItems="center"
      inset="auto"
      width={{ base: "100%", md: "auto" }}
      {...props}
    />
  )
}

const FlexContent = chakra(Content, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
  },
})

const Flex = (props: ChildOnlyProp) => {
  return (
    <Box
      display="flex"
      gap={8}
      flexDirection={{ base: "column", lg: "inherit" }}
      {...props}
    />
  )
}

const MarginFlex = chakra(Flex, {
  baseStyle: {
    marginX: 8,
  },
})

const Container = (props: ChildOnlyProp) => {
  return (
    <Box
      background="grayBackground"
      border="1px solid #d1d1d1"
      boxSizing="border-box"
      borderRadius="5px"
      color="text"
      paddingX={8}
      paddingY={0}
      {...props}
    />
  )
}

const BuildBox = styled(Container)`
  background: ${({ theme }) => theme.colors.preBackground};
  flex: 1;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: column;
  }

  & > p:last-of-type {
    margin-bottom: 2rem;
  }
`

//TODO
// const BuildBox = chakra(Container, {
//   baseStyle: {
//     background: "preBackground",
//     flex: 1,
//     padding: 8,
//     flexDirection: { base: "column", md: "row" },
//     "& > p:last-of-type": {
//       marginBottom: 8,
//     },
//   },
// })

const BuildBoxSpace = chakra(BuildBox, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    _hover: {
      transform: "scale(1.02)",
      transition: "transform 0.1s",
    },
  },
})

const FullyLoaded = (props: ChildOnlyProp) => {
  return (
    <Box
      as={Container}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      lineHeight="200%"
      padding={8}
      flex={1}
      sx={{
        p: {
          fontSize: "110%",
        },
        code: {
          fontWeight: 600,
          lineHeight: "125%",
        },
        button: {
          width: { base: "100%", sm: "fit-content", lg: "inherit" },
          paddingLeft: { base: 8, lg: "inherit" },
          paddingRight: { base: 8, lg: "inherit" },
        },
      }}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.1s",
      }}
      {...props}
    />
  )
}

const SvgTitle = (props: ChildOnlyProp) => {
  return <Box display="flex" gap={4} alignItems="center" {...props} />
}

const ButtonContainer = (props: ChildOnlyProp) => {
  return (
    <Box
      display="flex"
      gap={4}
      flexDirection={{ base: "column", lg: "row" }}
      mt="auto"
      {...props}
    />
  )
}

const DappNodeButtonLink = chakra(ResponsiveButtonLink, {
  baseStyle: {
    background: "#187d76",
    span: {
      color: "white",
    },
    _hover: {
      background: "#0f5f5f",
      boxShadow: "4px 4px 0 0 rgba(#187d76, 0.47)",
    },
  },
})

const AvadoButtonLink = chakra(ResponsiveButtonLink, {
  baseStyle: {
    background: "#37822e",
    span: {
      color: "white",
    },
    _hover: {
      background: "#2e6d2e",
      boxShadow: "4px 4px 0 0 rgba(#37822e, 0.47)",
    },
  },
})

const StyledEmoji = styled(Emoji)`
  margin-right: 1rem;
`

// const StyledEmoji = chakra(Emoji, {
//   baseStyle: {
//     marginRight: 4
//   },
// })

const ScrollLink = chakra(NakedButton, {
  baseStyle: {
    textAlign: "start",
    color: "primary",
    _active: {
      color: "primary",
    },
  },
})

const BuildContainer = styled(Container)`
  flex: 1;
  padding: 2rem;
  border-radius: none;
  border: none;
  background: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 2rem 0;
  }
`

const ScrollButtonSecondary = chakra("button", {
  baseStyle: {
    textDecoration: "none",
    display: "inline-block",
    paddingY: 2,
    paddingX: 8,
    marginTop: 4,
    fontSize: "md",
    borderRadius: 1,
    textAlign: "center",
    cursor: "pointer",
    color: "text",
    border: "1px solid",
    borderColor: "text",
    backgroundColor: "transparent",
    _hover: {
      color: "primary",
      borderColor: "primary",
      boxShadow: "cardBoxShadow",
      transform: "scale(1.05)",
      transition: "0.1s",
      fill: "buttonColor",
    },
    _active: {
      backgroundColor: "secondaryButtonBackgroundActive",
    },
  },
})

const DiscordIcon = chakra(Icon, {
  baseStyle: {
    fill: "buttonColor",
  },
})

const StakingCalloutContainer = chakra(SplitContent, {
  baseStyle: {
    background:
      "linear-gradient(262.78deg, rgba(152, 186, 249, 0.25) 0%, rgba(207, 177, 251, 0.25) 53.12%, rgba(151, 252, 246, 0.25) 100%)",
    width: "100%",
    padding: 8,
    flexDirection: { base: "column", md: "row" },
    gap: { base: 12, md: 20 },
  },
})

const Leslie = styled(GatsbyImage)`
  transform: scaleX(-1) scale(1.15) translateX(2rem);
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    transform: scaleX(-1) translateY(-3rem);
  }
`
//TODO
// const Leslie = chakra(GatsbyImage, {
//   baseStyle: {
//     transform: {
//       base: `scaleX(-1) scale(1.15) translateX(${8})`,
//       lg: `scaleX(-1) translateY(${-12})`,

//     },
//   },
// })

const StrongParagraph = chakra("p", {
  baseStyle: {
    fontSize: "150%",
    fontWeight: 600,
  },
})

interface RunANodeCard {
  image: typeof ChakraIcon
  title: TranslationKey
  preview: TranslationKey
  body: Array<TranslationKey>
  alt: TranslationKey
}

const RunANodePage = ({ data }: PageProps<Queries.RunANodePageQuery>) => {
  const intl = useIntl()
  const heroContent = {
    title: <Translation id="page-run-a-node-title" />,
    header: <Translation id="page-run-a-node-hero-header" />,
    subtitle: <Translation id="page-run-a-node-hero-subtitle" />,
    image: getImage(data.ethereumInside)!,
    alt: translateMessageId("page-run-a-node-hero-alt", intl),
    buttons: [
      {
        content: <Translation id="page-run-a-node-hero-cta-1" />,
        toId: "what-is-a-node",
      },
      {
        content: <Translation id="page-run-a-node-hero-cta-2" />,
        toId: "getting-started",
        variant: "outline",
      },
    ],
  }

  const whyRunANodeCards: Array<RunANodeCard> = [
    {
      image: PrivacyGlyphIcon,
      title: "page-run-a-node-privacy-title",
      preview: "page-run-a-node-privacy-preview",
      body: [
        "page-run-a-node-privacy-1",
        "page-run-a-node-privacy-2",
        "page-run-a-node-privacy-3",
      ],
      alt: "page-run-a-node-glyph-alt-privacy",
    },
    {
      image: MegaphoneGlyphIcon,
      title: "page-run-a-node-censorship-resistance-title",
      preview: "page-run-a-node-censorship-resistance-preview",
      body: [
        "page-run-a-node-censorship-resistance-1",
        "page-run-a-node-censorship-resistance-2",
      ],
      alt: "page-run-a-node-glyph-alt-censorship-resistance",
    },
    {
      image: EarthGlyphIcon,
      title: "page-run-a-node-participate-title",
      preview: "page-run-a-node-participate-preview",
      body: ["page-run-a-node-participate-1", "page-run-a-node-participate-2"],
      alt: "page-run-a-node-glyph-alt-earth",
    },
    {
      image: DecentralizationGlyphIcon,
      title: "page-run-a-node-decentralized-title",
      preview: "page-run-a-node-decentralized-preview",
      body: [
        "page-run-a-node-decentralized-1",
        "page-run-a-node-decentralized-2",
      ],
      alt: "page-run-a-node-glyph-alt-decentralization",
    },
    {
      image: VoteGlyphIcon,
      title: "page-run-a-node-voice-your-choice-title",
      preview: "page-run-a-node-voice-your-choice-preview",
      body: [
        "page-run-a-node-voice-your-choice-1",
        "page-run-a-node-voice-your-choice-2",
      ],
      alt: "page-run-a-node-glyph-alt-vote",
    },
    {
      image: SovereigntyGlyphIcon,
      title: "page-run-a-node-sovereignty-title",
      preview: "page-run-a-node-sovereignty-preview",
      body: ["page-run-a-node-sovereignty-1", "page-run-a-node-sovereignty-2"],
      alt: "page-run-a-node-glyph-alt-sovereignty",
    },
  ]

  return (
    <GappedPage>
      <PageMetadata
        title={translateMessageId("page-run-a-node-title", intl)}
        description={translateMessageId(
          "page-run-a-node-meta-description",
          intl
        )}
      />
      <HeroContainer>
        <Hero content={heroContent} isReverse />
      </HeroContainer>

      <Content id="what-is-a-node">
        <TwoColumnContent>
          <Width60>
            <h2>
              <Translation id="page-run-a-node-what-title" />
            </h2>
            <h3>
              <Translation id="page-run-a-node-what-1-subtitle" />
            </h3>
            <p>
              <Translation id="page-run-a-node-what-1-text" />
            </p>
            <h3>
              <Translation id="page-run-a-node-what-2-subtitle" />
            </h3>
            <p>
              <Translation id="page-run-a-node-what-2-text" />
            </p>
            <h3>
              <Translation id="page-run-a-node-what-3-subtitle" />
            </h3>
            <p>
              <Translation id="page-run-a-node-what-3-text" />
            </p>
          </Width60>
          <Width40>
            <GatsbyImage image={getImage(data.hackathon)!} alt="" />
          </Width40>
        </TwoColumnContent>
      </Content>

      <FlexContent>
        <ExpandableInfo
          alignSelf="center"
          width={{ base: "full", md: "90%" }}
          mb={{ base: 0, md: 4 }}
          image={getImage(data.impact)!}
          title={<Translation id="page-run-a-node-who-title" />}
          contentPreview={<Translation id="page-run-a-node-who-preview" />}
          background="runNodeGradient2"
          forceOpen
        >
          <p>
            <Translation id="page-run-a-node-who-copy-1" />
          </p>
          <p>
            <Translation id="page-run-a-node-who-copy-2" />
          </p>
          <p>
            <Translation id="page-run-a-node-who-copy-3" />
          </p>
          <StrongParagraph>
            <Translation id="page-run-a-node-who-copy-bold" />
          </StrongParagraph>
        </ExpandableInfo>
      </FlexContent>

      <Content>
        <h2>
          <Translation id="page-run-a-node-why-title" />
        </h2>
        <InfoGrid>
          {whyRunANodeCards.map(({ image, title, preview, body, alt }, idx) => {
            return (
              <ExpandableCard
                contentPreview={<Translation id={preview} />}
                title={translateMessageId(title, intl)}
                // TODO: make a11y svgs (using <title>)
                // @ts-ignore
                alt={translateMessageId(alt, intl)}
                svg={image}
                key={idx}
              >
                {body.map((item, idx) => (
                  <p key={idx}>{<Translation id={item} />}</p>
                ))}
              </ExpandableCard>
            )
          })}
        </InfoGrid>
      </Content>

      <Divider />

      <Content id="getting-started">
        <h2>
          <Translation id="page-run-a-node-getting-started-title" />
        </h2>
        <GappedContent>
          <SoftwareHighlight backgroundColor="homeBoxTurquoise">
            <ColumnFill>
              <p>
                <Translation id="page-run-a-node-getting-started-software-section-1" />
              </p>
              <p>
                <code>
                  <StyledEmoji text=":warning:" size={1} />
                  <Translation id="page-run-a-node-getting-started-software-section-1-alert" />
                </code>
              </p>
              <Link to="/developers/docs/nodes-and-clients/run-a-node/">
                <Translation id="page-run-a-node-getting-started-software-section-1-link" />
              </Link>
            </ColumnFill>
            <ColumnNarrow>
              <Terminal
                // TODO: make a11y svgs (using <title>)
                // @ts-ignore
                alt={translateMessageId(
                  "page-run-a-node-glyph-alt-terminal",
                  intl
                )}
              />
            </ColumnNarrow>
          </SoftwareHighlight>

          <SoftwareHighlight backgroundColor="homeBoxOrange">
            <ColumnFill>
              <p>
                <Translation id="page-run-a-node-getting-started-software-section-2" />
              </p>
            </ColumnFill>
            <ColumnNarrow>
              <Dappnode
                // TODO: make a11y svgs (using <title>)
                // @ts-ignore
                alt={translateMessageId(
                  "page-run-a-node-glyph-alt-dappnode",
                  intl
                )}
              />
            </ColumnNarrow>
          </SoftwareHighlight>

          <SoftwareHighlight backgroundColor="homeBoxPurple">
            <ColumnFill>
              <p>
                <Translation id="page-run-a-node-getting-started-software-section-3a" />
              </p>
              <p>
                <Translation id="page-run-a-node-getting-started-software-section-3b" />
              </p>
            </ColumnFill>
            <ColumnNarrow>
              <Dapptap
                // TODO: make a11y svgs (using <title>)
                // @ts-ignore
                alt={translateMessageId(
                  "page-run-a-node-glyph-alt-phone",
                  intl
                )}
              />
            </ColumnNarrow>
          </SoftwareHighlight>
        </GappedContent>
      </Content>

      <Content>
        <h2>
          <Translation id="page-run-a-node-choose-your-adventure-title" />
        </h2>
        <p>
          <Translation id="page-run-a-node-choose-your-adventure-1" />
        </p>
        <p>
          <Translation id="page-run-a-node-choose-your-adventure-2" />
        </p>
        <MarginFlex>
          <FullyLoaded>
            <div>
              <h3>
                <StyledEmoji text=":shopping_cart:" size={2} />
                <Translation id="page-run-a-node-buy-fully-loaded-title" />
              </h3>
              <p>
                <Translation id="page-run-a-node-buy-fully-loaded-description" />
              </p>
              <ul>
                <li>
                  <Translation id="page-run-a-node-buy-fully-loaded-note-1" />
                </li>
                <li>
                  <Translation id="page-run-a-node-buy-fully-loaded-note-2" />
                </li>
                <li>
                  <code>
                    <Translation id="page-run-a-node-buy-fully-loaded-note-3" />
                  </code>
                </li>
              </ul>
            </div>
            <ButtonContainer>
              <DappNodeButtonLink to="https://shop.dappnode.io/">
                <Translation id="page-run-a-node-shop-dappnode" />
              </DappNodeButtonLink>
              <AvadoButtonLink to="https://ava.do/">
                <Translation id="page-run-a-node-shop-avado" />
              </AvadoButtonLink>
            </ButtonContainer>
          </FullyLoaded>

          <FullyLoaded>
            <div>
              <h3>
                <StyledEmoji text=":building_construction:" size={2} />
                <Translation id="page-run-a-node-build-your-own-title" />
              </h3>
              <p>
                <Translation id="page-run-a-node-choose-your-adventure-build-1" />
              </p>
              <ul>
                <li>
                  <Translation id="page-run-a-node-choose-your-adventure-build-bullet-1" />
                </li>
                <li>
                  <Translation id="page-run-a-node-choose-your-adventure-build-bullet-2" />
                </li>
                <li>
                  <Translation id="page-run-a-node-choose-your-adventure-build-bullet-3" />
                </li>
              </ul>
            </div>
            <ScrollButtonSecondary
              onClick={() => scrollIntoView("build-your-own")}
            >
              <Translation id="page-run-a-node-choose-your-adventure-build-start" />
            </ScrollButtonSecondary>
          </FullyLoaded>
        </MarginFlex>
      </Content>

      <Content id="build-your-own">
        <h2>
          <Translation id="page-run-a-node-build-your-own-title" />
        </h2>

        <BuildContainer>
          <SvgTitle>
            <HardwareGlyphIcon
              // TODO: make a11y svgs (using <title>)
              // @ts-ignore
              alt={translateMessageId(
                "page-run-a-node-glyph-alt-hardware",
                intl
              )}
            />
            <h3>
              <Translation id="page-run-a-node-build-your-own-hardware-title" />
            </h3>
          </SvgTitle>

          <Flex>
            <BuildBox>
              <h4>
                <Translation id="page-run-a-node-build-your-own-minimum-specs" />
              </h4>
              <ul>
                <li>
                  <p>
                    <Translation id="page-run-a-node-build-your-own-min-ram" />
                  </p>
                  <p>
                    <ScrollLink
                      onClick={() => scrollIntoView("plan-on-staking")}
                    >
                      <Translation id="page-run-a-node-build-your-own-ram-note-1" />
                    </ScrollLink>
                  </p>
                  <p>
                    <ScrollLink onClick={() => scrollIntoView("rasp-pi")}>
                      <Translation id="page-run-a-node-build-your-own-ram-note-2" />
                    </ScrollLink>
                  </p>
                </li>
                <li>
                  <p>
                    <Translation id="page-run-a-node-build-your-own-min-ssd" />
                  </p>
                  <p>
                    <small>
                      <em>
                        <Translation id="page-run-a-node-build-your-own-ssd-note" />
                      </em>
                    </small>
                  </p>
                </li>
              </ul>
            </BuildBox>

            <BuildBox>
              <h4>
                <Translation id="page-run-a-node-build-your-own-recommended" />
              </h4>
              <ul>
                <li>
                  <Translation id="page-run-a-node-build-your-own-nuc" />
                  <p>
                    <small>
                      <Translation id="page-run-a-node-build-your-own-nuc-small" />
                    </small>
                  </p>
                </li>
                <li>
                  <Translation id="page-run-a-node-build-your-own-connection" />
                  <p>
                    <small>
                      <Translation id="page-run-a-node-build-your-own-connection-small" />
                    </small>
                  </p>
                </li>
                <li>
                  <Translation id="page-run-a-node-build-your-own-peripherals" />
                  <p>
                    <small>
                      <Translation id="page-run-a-node-build-your-own-peripherals-small" />
                    </small>
                  </p>
                </li>
              </ul>
            </BuildBox>
          </Flex>
        </BuildContainer>

        <BuildContainer>
          <SvgTitle>
            <DownloadGlyphIcon
              // TODO: make a11y svgs (using <title>)
              // @ts-ignore
              alt={translateMessageId(
                "page-run-a-node-glyph-alt-software",
                intl
              )}
            />
            <h3>
              <Translation id="page-run-a-node-build-your-own-software" />
            </h3>
          </SvgTitle>

          <Flex>
            <BuildBoxSpace>
              <div>
                <h4>
                  <Translation id="page-run-a-node-build-your-own-software-option-1-title" />
                </h4>
                <p>
                  <Translation id="page-run-a-node-build-your-own-software-option-1-description" />
                </p>
              </div>
              <ButtonContainer>
                <DappNodeButtonLink to="https://docs.dappnode.io">
                  <Translation id="page-run-a-node-build-your-own-software-option-1-button" />
                </DappNodeButtonLink>
              </ButtonContainer>
            </BuildBoxSpace>

            <BuildBoxSpace>
              <div>
                <h4>
                  <Translation id="page-run-a-node-build-your-own-software-option-2-title" />
                </h4>
                <p>
                  <Translation id="page-run-a-node-build-your-own-software-option-2-description-1" />
                </p>
                <p>
                  <Translation id="page-run-a-node-build-your-own-software-option-2-description-2" />
                </p>
              </div>
              <ButtonContainer>
                <ResponsiveButtonLink
                  to="/developers/docs/nodes-and-clients/run-a-node/#spinning-up-node"
                  variant="outline"
                >
                  <code>
                    <Translation id="page-run-a-node-build-your-own-software-option-2-button" />
                  </code>
                </ResponsiveButtonLink>
              </ButtonContainer>
            </BuildBoxSpace>
          </Flex>
        </BuildContainer>
      </Content>

      <Content>
        <SplitContent>
          <Column>
            <h2>
              <Translation id="page-run-a-node-community-title" />
            </h2>
            <p>
              <Translation id="page-run-a-node-community-description-1" />
            </p>
            <p>
              <Translation id="page-run-a-node-community-description-2" />
            </p>
            <ButtonContainer>
              <ResponsiveButtonLink to="https://discord.gg/c28an8dA5k">
                <DiscordIcon name="discord" />
                <Translation id="page-run-a-node-community-link-1" />
              </ResponsiveButtonLink>
              <ResponsiveButtonLink to="/community/online/" variant="outline">
                <Translation id="page-run-a-node-community-link-2" />
              </ResponsiveButtonLink>
            </ButtonContainer>
          </Column>
          <Column>
            <GatsbyImage image={getImage(data.community)!} alt="" />
          </Column>
        </SplitContent>
      </Content>

      <Content>
        <h2>
          <Translation id="page-run-a-node-further-reading-title" />
        </h2>
        <ul>
          <li>
            <Link to="https://github.com/ethereumbook/ethereumbook/blob/develop/03clients.asciidoc#should-i-run-a-full-node">
              <Translation id="page-run-a-node-further-reading-1-link" />
            </Link>{" "}
            -{" "}
            <i>
              <Translation id="page-run-a-node-further-reading-1-author" />
            </i>
          </li>
          <li>
            <Link to="https://ethereum-on-arm-documentation.readthedocs.io/en/latest/">
              <Translation id="page-run-a-node-further-reading-2-link" />
            </Link>
          </li>
          <li>
            <Link to="https://vitalik.ca/general/2021/05/23/scaling.html">
              <Translation id="page-run-a-node-further-reading-3-link" />
            </Link>{" "}
            -{" "}
            <i>
              <Translation id="page-run-a-node-further-reading-3-author" />
            </i>
          </li>
        </ul>
      </Content>

      <Divider />

      <StakingCalloutContainer>
        <Column>
          <Leslie image={getImage(data.leslie)!} alt="" />
        </Column>
        <Column>
          <h2>
            <Translation id="page-run-a-node-staking-title" />
          </h2>
          <p>
            <Translation id="page-run-a-node-staking-description" />
          </p>
          <ButtonContainer>
            <ResponsiveButtonLink to="/staking/">
              <Translation id="page-run-a-node-staking-link" />
            </ResponsiveButtonLink>
          </ButtonContainer>
        </Column>
      </StakingCalloutContainer>
      <Content>
        <h3 id="plan-on-staking">
          <StyledEmoji text=":cut_of_meat:" size={2} />
          <Translation id="page-run-a-node-staking-plans-title" />
        </h3>
        <p>
          <Translation id="page-run-a-node-staking-plans-description" />
        </p>
        <p>
          <Translation id="page-run-a-node-staking-plans-ethstaker-link-description" />{" "}
          -{" "}
          <Link to="https://youtu.be/C2wwu1IlhDc">
            <Translation id="page-run-a-node-staking-plans-ethstaker-link-label" />
          </Link>
        </p>
        <h3 id="rasp-pi">
          <StyledEmoji text=":pie:" size={2} />
          <Translation id="page-run-a-node-rasp-pi-title" />
        </h3>
        <p>
          <Translation id="page-run-a-node-rasp-pi-description" />
        </p>
        <ul>
          <li>
            <Link to="https://docs.dappnode.io/user/quick-start/Core/installation#arm">
              <Translation id="page-run-a-node-rasp-pi-note-1-link" />
            </Link>{" "}
            -{" "}
            <i>
              <Translation id="page-run-a-node-rasp-pi-note-1-description" />
            </i>
          </li>
          <li>
            <Link to="https://ethereum-on-arm-documentation.readthedocs.io/en/latest">
              <Translation id="page-run-a-node-rasp-pi-note-2-link" />
            </Link>{" "}
            -{" "}
            <i>
              <Translation id="page-run-a-node-rasp-pi-note-2-description" />
            </i>
          </li>
          <li>
            <Link to="/developers/tutorials/run-node-raspberry-pi">
              <Translation id="page-run-a-node-rasp-pi-note-3-link" />
            </Link>{" "}
            -{" "}
            <i>
              <Translation id="page-run-a-node-rasp-pi-note-3-description" />
            </i>
          </li>
        </ul>
      </Content>
      <Content>
        <FeedbackCard />
      </Content>
    </GappedPage>
  )
}

export default RunANodePage

export const query = graphql`
  query RunANodePage {
    ethereumInside: file(
      relativePath: { eq: "run-a-node/ethereum-inside.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 624
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    hackathon: file(relativePath: { eq: "hackathon_transparent.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 624
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    impact: file(relativePath: { eq: "impact_transparent.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    community: file(relativePath: { eq: "enterprise-eth.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 624
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    leslie: file(relativePath: { eq: "upgrades/upgrade_rhino.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 624
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
  }
`
