const WORK_PROJECTS = [
  {
    id: "restaurant-technology-reimagined",
    subTitle: "HEARD LABS",
    title: "Restaurant Technology Reimagined",
    prevProjectLink: "/work/gamified-sales-training-tool",
    nextProjectLink: "/work/higher-education-enrollment",
    phrase: [
      "Our software enables restaurants",
      "to regain direct relationships",
      "with their customers.",
    ],
    firstImage: "./assets/images/catering-vegan-022-saturated.jpg",
    secondImage: "./assets/images/mobil-heard-mockups.jpg",
    thirdImage: "./assets/images/monitors-image.jpg",
    firstPartOfArticle: [
      {
        title: "OVERVIEW",
        paragraphs: [
          `Heard! Labs is a joint venture between Radiant Interactive and Illegal Pete’s. Together, we create software 
          systems that unify digital order intake, processing, and fulfillment for the restaurant industry.`,
          `The restaurant industry is underserved by existing software solutions. Current solutions provide services 
          that are outdated, expensive or difficult to use.`,
          `Heard! Labs creates software that empowers restaurants, enableing restaurants to regain direct relationships 
          with their customers.`,
        ],
      },
    ],
    secondPartOfArticle: null,
    thirdPartOfArticle: [
      {
        title: "OUR APPROACH",
        paragraphs: [
          `As experts in the restaurant industry and in technology, together we identified the current pain points 
          and opportunities that exist within our ordering and fulfillment systems.`,
          `We zoomed in on aspects of the process like portion management, staff management and customer 
          communication to works towards an improved workflow for restaurant owners and staff.`,
          `In doing so, we designed and engineered software that automated processes that were previously manual 
          and time consuming - so that ultimately restaurant staff can spend more time on things that matter, 
          especially face to face customer service.`,
        ],
      },
    ],
    fourthPartOfArticle: [
      {
        title: "THE OUTCOME",
        paragraphs: [
          `Our launch product is an end to end catering application. This application intakes customer orders and 
          also provides valuable insights to catering managers. Our catering app automates portion ordering of 
          ingredients and dry goods. It also aggregates and surfaces valuable customer and sales data. Illegal 
          Pete’s is the pilot customer - but this app can be branded and customized for any restaurant.`,
        ],
      },
    ],
  },
  {
    id: "gamified-sales-training-tool",
    subTitle: "BRAND BUZZ",
    title: "Gamified Sales Training Tool",
    prevProjectLink: "/work/higher-education-enrollment",
    nextProjectLink: "/work/restaurant-technology-reimagined",
    phrase: [
      "We tailored approach decisions to the",
      "needs of the retail associates who",
      "would ultimatley be playing Brand Buzz.",
    ],
    firstImage: "./assets/images/iphones-image.jpg",
    secondImage: "./assets/images/mockups-image.jpg",
    thirdImage: null,
    firstPartOfArticle: [
      {
        title: "OVERVIEW",
        paragraphs: [
          `Premium Retail hired Radiant Interactive to create Brand Buzz, an app that trains retail employees on the 
          products they are selling.`,
          `The app features trivia style games, each game is sponsored by a product or brand. Each game features video 
          that is synced to a series of questions & possible answers. Retail employees can log in and play the games to 
          learn more about a product or brand, as well as win big ticket prizes.`,
          `To power the app, Radiant Interactive created a custom CMS that allows Premium Retail campaign managers to 
          configure the elements of each game.`,
        ],
      },
    ],
    secondPartOfArticle: [
      {
        title: "OUR APPROACH",
        paragraphs: [
          `We tailored architecture and approach decisions to the needs of the retail associates who would ultimatley 
          be playing Brand Buzz. For example, we decided to pre-record video instead of stream video because of 
          connectivity issues inside of retail partner locations. The learning experience is designed to feel rewarding. 
          It celebrates every question and answer, especially the correct ones.`,
        ],
      },
    ],
    thirdPartOfArticle: [
      {
        title: "THE OUTCOME",
        paragraphs: [
          `Premium Retail uplifts their product partners’ presence within retail environments and the Brand Buzz 
          app augments that offering in a unique way. In an attention economy, creating an engaging and rewarding 
          experience for retail associates ensures premium placement during shopper conversations.`,
        ],
      },
    ],
    fourthPartOfArticle: null,
  },
  {
    id: "higher-education-enrollment",
    subTitle: "PEARSON",
    title: "Higher Education Enrollment & Onboarding",
    prevProjectLink: "/work/restaurant-technology-reimagined",
    nextProjectLink: "/work/gamified-sales-training-tool",
    phrase: [
      "We created a system that increased enrollment",
      "and automated new student onboarding.",
    ],
    firstImage: "./assets/images/graduation-ceremony-image.jpg",
    secondImage: null,
    thirdImage: null,
    firstPartOfArticle: [
      {
        title: "OVERVIEW",
        paragraphs: [
          `Pearson created an advanced learning engine for Arizona State University’s online education program, and was 
          looking to bolster student enrollment. For Pearson, Radiant Interactive created a system that increased 
          enrollment and automated new student onboarding. This system includes data management, personalized targeting,
           digital marketing and post-enrollment communication.`,
        ],
      },
      {
        title: "OUR APPROACH",
        paragraphs: [
          `The data management funnel we created included injesting existing prospect data and aquiring new prospect 
          data from a microsite experience. That data was managed within Salesforce, which powered hyper targeted email 
          communication. Once students enrolled, the same infostructure was used to deliver onboarding communication
           - which ultimately reduced new student confusion. `,
        ],
      },
    ],
    secondPartOfArticle: null,
    thirdPartOfArticle: [
      {
        title: "THE OUTCOME",
        paragraphs: [
          `This system increased enrollment for Arizona State University and in addition, greatly reduced the cost 
          of onboarding a new student. The technical foundation we put in place enabled ASU staff improve their 
          email strategy over time and provide more relevant information to the right student groups. 
          And, through our partnership with Pearson, this system was adopted by other universities including 
          California State University.`,
        ],
      },
    ],
    fourthPartOfArticle: null,
  },
];

export function getWorkProject(id: string) {
  return WORK_PROJECTS.find((elem) => elem.id === id);
}
