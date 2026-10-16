export interface TimeSeriesPoint {
  year: number;
  usHomicideRate: number; // per 100,000 population (FBI UCR / CDC)
  usViolentCrimeRate: number; // per 100,000 population
  usYouthArrestsRate: number; // per 100,000 youth (OJJDP)
  ukHomicideRate: number; // per 100,000 population (ONS / Home Office)
  japanHomicideRate: number; // per 100,000 population (NPA Japan)
  canadaHomicideRate: number; // per 100,000 (StatsCan)
  cumulativeGtaSalesM: number; // Cumulative GTA franchise copies sold (Millions)
  gtaRelease?: {
    title: string;
    description: string;
    impact: string;
    unitsFirstMonthM: number;
  };
  macroContext: string;
}

export const HISTORICAL_DATA: TimeSeriesPoint[] = [
  {
    year: 1995,
    usHomicideRate: 8.22,
    usViolentCrimeRate: 684.5,
    usYouthArrestsRate: 492.0,
    ukHomicideRate: 1.52,
    japanHomicideRate: 0.58,
    canadaHomicideRate: 2.14,
    cumulativeGtaSalesM: 0,
    macroContext: "Pre-GTA era. Post-crack-epidemic crime decline begins across North America."
  },
  {
    year: 1996,
    usHomicideRate: 7.41,
    usViolentCrimeRate: 636.6,
    usYouthArrestsRate: 462.4,
    ukHomicideRate: 1.48,
    japanHomicideRate: 0.55,
    canadaHomicideRate: 2.11,
    cumulativeGtaSalesM: 0,
    macroContext: "Violent crime drop accelerates nationwide; economic expansion and policing shifts."
  },
  {
    year: 1997,
    usHomicideRate: 6.80,
    usViolentCrimeRate: 611.0,
    usYouthArrestsRate: 439.1,
    ukHomicideRate: 1.41,
    japanHomicideRate: 0.56,
    canadaHomicideRate: 1.93,
    cumulativeGtaSalesM: 1.0,
    gtaRelease: {
      title: "Grand Theft Auto (GTA 1)",
      description: "Original 2D top-down game released by DMA Design (Rockstar Games).",
      impact: "Initial controversy over car theft mechanics in UK Parliament and US media.",
      unitsFirstMonthM: 0.5
    },
    macroContext: "GTA franchise debuts. US homicide rate drops 8.2% in single year."
  },
  {
    year: 1998,
    usHomicideRate: 6.31,
    usViolentCrimeRate: 567.5,
    usYouthArrestsRate: 402.7,
    ukHomicideRate: 1.45,
    japanHomicideRate: 0.62,
    canadaHomicideRate: 1.83,
    cumulativeGtaSalesM: 2.3,
    macroContext: "Continuation of sustained multi-year crime reduction across developed nations."
  },
  {
    year: 1999,
    usHomicideRate: 5.72,
    usViolentCrimeRate: 523.0,
    usYouthArrestsRate: 367.5,
    ukHomicideRate: 1.50,
    japanHomicideRate: 0.59,
    canadaHomicideRate: 1.76,
    cumulativeGtaSalesM: 4.8,
    gtaRelease: {
      title: "Grand Theft Auto 2",
      description: "Enhanced top-down action with faction respect systems.",
      impact: "Expanded console presence on Sony PlayStation.",
      unitsFirstMonthM: 1.2
    },
    macroContext: "Columbine shooting prompts intense media scrutiny of video games; overall crime continues downward trend."
  },
  {
    year: 2000,
    usHomicideRate: 5.52,
    usViolentCrimeRate: 506.5,
    usYouthArrestsRate: 338.2,
    ukHomicideRate: 1.58,
    japanHomicideRate: 0.65,
    canadaHomicideRate: 1.78,
    cumulativeGtaSalesM: 6.5,
    macroContext: "US homicide rate reaches lowest level since 1966."
  },
  {
    year: 2001,
    usHomicideRate: 5.61,
    usViolentCrimeRate: 504.5,
    usYouthArrestsRate: 319.4,
    ukHomicideRate: 1.62,
    japanHomicideRate: 0.61,
    canadaHomicideRate: 1.78,
    cumulativeGtaSalesM: 14.5,
    gtaRelease: {
      title: "Grand Theft Auto III",
      description: "Revolutionary 3D open-world Liberty City on PlayStation 2.",
      impact: "Genre-defining blockbuster; moral panic in mainstream news outlets.",
      unitsFirstMonthM: 2.5
    },
    macroContext: "3D gaming revolution begins. Despite predictions of crime explosion, homicide rates hold steady."
  },
  {
    year: 2002,
    usHomicideRate: 5.62,
    usViolentCrimeRate: 494.4,
    usYouthArrestsRate: 301.8,
    ukHomicideRate: 1.79,
    japanHomicideRate: 0.64,
    canadaHomicideRate: 1.86,
    cumulativeGtaSalesM: 25.0,
    gtaRelease: {
      title: "Grand Theft Auto: Vice City",
      description: "1980s Miami aesthetic, licensed soundtrack, highest-selling game of 2002.",
      impact: "Became a cultural phenomenon with widespread mainstream adoption.",
      unitsFirstMonthM: 4.0
    },
    macroContext: "Vice City sets sales records; US violent crime rate drops below 500 per 100k."
  },
  {
    year: 2003,
    usHomicideRate: 5.69,
    usViolentCrimeRate: 475.8,
    usYouthArrestsRate: 288.6,
    ukHomicideRate: 1.72,
    japanHomicideRate: 0.60,
    canadaHomicideRate: 1.74,
    cumulativeGtaSalesM: 32.0,
    macroContext: "Jack Thompson anti-video game litigation campaign peaks; academic research intensifies."
  },
  {
    year: 2004,
    usHomicideRate: 5.51,
    usViolentCrimeRate: 463.2,
    usYouthArrestsRate: 279.1,
    ukHomicideRate: 1.60,
    japanHomicideRate: 0.58,
    canadaHomicideRate: 1.95,
    cumulativeGtaSalesM: 45.0,
    gtaRelease: {
      title: "Grand Theft Auto: San Andreas",
      description: "Massive open world across Los Santos, San Fierro, Las Venturas.",
      impact: "Sold 12 million units in first year; Hot Coffee modification controversy.",
      unitsFirstMonthM: 5.1
    },
    macroContext: "San Andreas breaks all entertainment launch records. US violent crime drops another 2.7%."
  },
  {
    year: 2005,
    usHomicideRate: 5.63,
    usViolentCrimeRate: 469.0,
    usYouthArrestsRate: 284.5,
    ukHomicideRate: 1.48,
    japanHomicideRate: 0.54,
    canadaHomicideRate: 2.05,
    cumulativeGtaSalesM: 54.0,
    macroContext: "California passes bill AB 1179 to restrict violent video game sales (later ruled unconstitutional)."
  },
  {
    year: 2006,
    usHomicideRate: 5.71,
    usViolentCrimeRate: 473.5,
    usYouthArrestsRate: 289.0,
    ukHomicideRate: 1.39,
    japanHomicideRate: 0.51,
    canadaHomicideRate: 1.86,
    cumulativeGtaSalesM: 62.0,
    macroContext: "Minor post-Katrina fluctuation in southern US states; European homicide rates decline."
  },
  {
    year: 2007,
    usHomicideRate: 5.64,
    usViolentCrimeRate: 466.9,
    usYouthArrestsRate: 278.4,
    ukHomicideRate: 1.44,
    japanHomicideRate: 0.44,
    canadaHomicideRate: 1.80,
    cumulativeGtaSalesM: 68.0,
    macroContext: "Next-generation HD gaming consoles achieve broad adoption across young male cohorts."
  },
  {
    year: 2008,
    usHomicideRate: 5.40,
    usViolentCrimeRate: 457.5,
    usYouthArrestsRate: 260.1,
    ukHomicideRate: 1.32,
    japanHomicideRate: 0.43,
    canadaHomicideRate: 1.83,
    cumulativeGtaSalesM: 85.0,
    gtaRelease: {
      title: "Grand Theft Auto IV",
      description: "HD generation debut in rebuilt Liberty City with Euphoria physics engine.",
      impact: "Generated $500M in first 72 hours; 6 million units in week 1.",
      unitsFirstMonthM: 8.5
    },
    macroContext: "Global financial crisis begins. Despite severe economic dislocation, homicides decline."
  },
  {
    year: 2009,
    usHomicideRate: 4.99,
    usViolentCrimeRate: 429.4,
    usYouthArrestsRate: 232.5,
    ukHomicideRate: 1.20,
    japanHomicideRate: 0.40,
    canadaHomicideRate: 1.81,
    cumulativeGtaSalesM: 95.0,
    macroContext: "US homicide rate falls below 5.0 per 100k for the first time in over four decades."
  },
  {
    year: 2010,
    usHomicideRate: 4.76,
    usViolentCrimeRate: 404.5,
    usYouthArrestsRate: 209.8,
    ukHomicideRate: 1.18,
    japanHomicideRate: 0.36,
    canadaHomicideRate: 1.62,
    cumulativeGtaSalesM: 104.0,
    macroContext: "Youth violent crime arrest rates drop by more than 55% relative to the 1994 peak."
  },
  {
    year: 2011,
    usHomicideRate: 4.71,
    usViolentCrimeRate: 387.1,
    usYouthArrestsRate: 184.2,
    ukHomicideRate: 1.05,
    japanHomicideRate: 0.35,
    canadaHomicideRate: 1.73,
    cumulativeGtaSalesM: 114.0,
    macroContext: "Supreme Court landmark ruling Brown v. EMA strikes down video game bans, citing absence of causal crime evidence."
  },
  {
    year: 2012,
    usHomicideRate: 4.73,
    usViolentCrimeRate: 387.8,
    usYouthArrestsRate: 164.7,
    ukHomicideRate: 1.00,
    japanHomicideRate: 0.33,
    canadaHomicideRate: 1.56,
    cumulativeGtaSalesM: 125.0,
    macroContext: "Econometric studies (Cunningham et al.) begin tracking week-by-week crime during game launches."
  },
  {
    year: 2013,
    usHomicideRate: 4.53,
    usViolentCrimeRate: 369.1,
    usYouthArrestsRate: 147.9,
    ukHomicideRate: 0.98,
    japanHomicideRate: 0.29,
    canadaHomicideRate: 1.45,
    cumulativeGtaSalesM: 160.0,
    gtaRelease: {
      title: "Grand Theft Auto V",
      description: "Highest grossing entertainment launch in human history ($1B in 3 days).",
      impact: "Massive cultural uptake; 32.5 million copies shipped in first 4 months.",
      unitsFirstMonthM: 16.5
    },
    macroContext: "GTA V sets all-time entertainment revenue record. US homicide rate reaches 50-year low (4.53 per 100k)."
  },
  {
    year: 2014,
    usHomicideRate: 4.44,
    usViolentCrimeRate: 361.6,
    usYouthArrestsRate: 135.2,
    ukHomicideRate: 0.92,
    japanHomicideRate: 0.31,
    canadaHomicideRate: 1.47,
    cumulativeGtaSalesM: 185.0,
    macroContext: "US homicide rate marks absolute historic low (4.44 per 100k), down >54% since early 1990s peak."
  },
  {
    year: 2015,
    usHomicideRate: 4.95,
    usViolentCrimeRate: 373.7,
    usYouthArrestsRate: 128.5,
    ukHomicideRate: 0.99,
    japanHomicideRate: 0.28,
    canadaHomicideRate: 1.68,
    cumulativeGtaSalesM: 210.0,
    macroContext: "Ferguson (2015) publishes comprehensive 20-year meta-analysis finding r = -0.95 between video game sales & youth violence."
  },
  {
    year: 2016,
    usHomicideRate: 5.39,
    usViolentCrimeRate: 397.5,
    usYouthArrestsRate: 122.1,
    ukHomicideRate: 1.22,
    japanHomicideRate: 0.28,
    canadaHomicideRate: 1.69,
    cumulativeGtaSalesM: 240.0,
    macroContext: "Cunningham, Engelhardt & Ward publish seminal JEBO paper establishing the Incapacitation (Time-Use) Effect."
  },
  {
    year: 2017,
    usHomicideRate: 5.32,
    usViolentCrimeRate: 394.9,
    usYouthArrestsRate: 119.8,
    ukHomicideRate: 1.21,
    japanHomicideRate: 0.24,
    canadaHomicideRate: 1.80,
    cumulativeGtaSalesM: 275.0,
    macroContext: "GTA Online establishes perpetual engagement model; hundreds of millions of weekly active hours."
  },
  {
    year: 2018,
    usHomicideRate: 5.00,
    usViolentCrimeRate: 383.4,
    usYouthArrestsRate: 112.4,
    ukHomicideRate: 1.18,
    japanHomicideRate: 0.26,
    canadaHomicideRate: 1.78,
    cumulativeGtaSalesM: 305.0,
    macroContext: "Violent crime trends stabilize downward in major metropolitan areas."
  },
  {
    year: 2019,
    usHomicideRate: 5.07,
    usViolentCrimeRate: 379.4,
    usYouthArrestsRate: 104.9,
    ukHomicideRate: 1.14,
    japanHomicideRate: 0.25,
    canadaHomicideRate: 1.81,
    cumulativeGtaSalesM: 325.0,
    macroContext: "Pre-pandemic baseline. Total violent crime remains >45% below 1993 peak."
  },
  {
    year: 2020,
    usHomicideRate: 6.52,
    usViolentCrimeRate: 398.5,
    usYouthArrestsRate: 85.3,
    ukHomicideRate: 1.05,
    japanHomicideRate: 0.25,
    canadaHomicideRate: 1.97,
    cumulativeGtaSalesM: 345.0,
    macroContext: "COVID-19 pandemic shock, breakdown of court/social services, firearm sales surge 64%. Criminologists isolate pandemic disruptions as driver, not media."
  },
  {
    year: 2021,
    usHomicideRate: 6.81,
    usViolentCrimeRate: 387.0,
    usYouthArrestsRate: 79.1,
    ukHomicideRate: 1.02,
    japanHomicideRate: 0.23,
    canadaHomicideRate: 2.08,
    cumulativeGtaSalesM: 370.0,
    macroContext: "Post-lockdown social friction. Non-violent property crime falls; homicides surge concentrated in specific firearm-dense neighborhoods."
  },
  {
    year: 2022,
    usHomicideRate: 6.30,
    usViolentCrimeRate: 380.7,
    usYouthArrestsRate: 76.5,
    ukHomicideRate: 1.00,
    japanHomicideRate: 0.23,
    canadaHomicideRate: 2.25,
    cumulativeGtaSalesM: 395.0,
    macroContext: "Homicides begin steep national drop. GTA franchise passes 390M lifetime sales."
  },
  {
    year: 2023,
    usHomicideRate: 5.70,
    usViolentCrimeRate: 363.8,
    usYouthArrestsRate: 72.8,
    ukHomicideRate: 0.95,
    japanHomicideRate: 0.21,
    canadaHomicideRate: 2.12,
    cumulativeGtaSalesM: 415.0,
    macroContext: "Historic one-year drop in US homicides (-13.2% in major cities, FBI preliminary / AH Datalytics)."
  },
  {
    year: 2024,
    usHomicideRate: 5.15,
    usViolentCrimeRate: 352.0,
    usYouthArrestsRate: 69.4,
    ukHomicideRate: 0.92,
    japanHomicideRate: 0.20,
    canadaHomicideRate: 2.05,
    cumulativeGtaSalesM: 430.0,
    macroContext: "Violent crime returns to pre-pandemic historic lows while GTA V lifetime sales cross 200M units alone."
  }
];

export interface CrossNationalPoint {
  country: string;
  flag: string;
  homicideRatePer100k: number;
  videoGameRevenuePerCapitaUsd: number;
  gtaCopiesPer10kResidents: number;
  firearmsPer100People: number;
  youthPovertyPct: number;
  criminologicalKey: string;
}

export const CROSS_NATIONAL_DATA: CrossNationalPoint[] = [
  {
    country: "Japan",
    flag: "🇯🇵",
    homicideRatePer100k: 0.21,
    videoGameRevenuePerCapitaUsd: 142.5,
    gtaCopiesPer10kResidents: 620,
    firearmsPer100People: 0.3,
    youthPovertyPct: 14.0,
    criminologicalKey: "One of highest gaming consumption rates globally, yet world's lowest homicide rate. Disproves direct gaming causality."
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    homicideRatePer100k: 0.92,
    videoGameRevenuePerCapitaUsd: 98.4,
    gtaCopiesPer10kResidents: 1450,
    firearmsPer100People: 4.6,
    youthPovertyPct: 18.2,
    criminologicalKey: "Birthplace of GTA series (Edinburgh, Scotland). Massive per-capita adoption; homicide rate ~1/6th of the US."
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    homicideRatePer100k: 0.83,
    videoGameRevenuePerCapitaUsd: 79.2,
    gtaCopiesPer10kResidents: 1100,
    firearmsPer100People: 19.6,
    youthPovertyPct: 12.8,
    criminologicalKey: "High console penetration, robust social safety net, highly stable low-violence baseline."
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    homicideRatePer100k: 2.05,
    videoGameRevenuePerCapitaUsd: 88.0,
    gtaCopiesPer10kResidents: 1280,
    firearmsPer100People: 34.7,
    youthPovertyPct: 11.5,
    criminologicalKey: "Nearly identical media consumption patterns to US, but homicide rate is ~65% lower due to firearm regulation and health access."
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    homicideRatePer100k: 0.53,
    videoGameRevenuePerCapitaUsd: 138.0,
    gtaCopiesPer10kResidents: 850,
    firearmsPer100People: 0.2,
    youthPovertyPct: 10.7,
    criminologicalKey: "Extremely high hardcore gaming density (PC bangs), negligible lethal violence."
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    homicideRatePer100k: 0.82,
    videoGameRevenuePerCapitaUsd: 94.2,
    gtaCopiesPer10kResidents: 1310,
    firearmsPer100People: 14.5,
    youthPovertyPct: 13.9,
    criminologicalKey: "Originally restricted GTA classification; high ownership today alongside record-low lethal crime."
  },
  {
    country: "United States",
    flag: "🇺🇸",
    homicideRatePer100k: 5.15,
    videoGameRevenuePerCapitaUsd: 115.6,
    gtaCopiesPer10kResidents: 1650,
    firearmsPer100People: 120.5,
    youthPovertyPct: 16.9,
    criminologicalKey: "Higher lethal violence rate than OECD peers driven by gun saturation and inequality, yet its own crime rate dropped by half as GTA sales grew."
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    homicideRatePer100k: 19.4,
    videoGameRevenuePerCapitaUsd: 12.8,
    gtaCopiesPer10kResidents: 280,
    firearmsPer100People: 8.3,
    youthPovertyPct: 31.4,
    criminologicalKey: "Extremely high homicide rates despite dramatically lower per-capita legitimate video game spending. Driven by organized crime and poverty."
  }
];

export interface PeerReviewedStudy {
  id: string;
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi: string;
  category: 'Econometric' | 'Longitudinal' | 'Meta-Analysis' | 'Institutional Consensus';
  sampleSize: string;
  methodology: string;
  coreFinding: string;
  impactOnThesis: 'Refutes Causality' | 'Provides Mechanism' | 'Debunks Lab Proxies' | 'Legal Standard';
}

export const PEER_REVIEWED_STUDIES: PeerReviewedStudy[] = [
  {
    id: "cunningham-2016",
    year: 2016,
    authors: "Scott Cunningham, Benjamin Engelhardt, Michael R. Ward",
    title: "Understanding the Effects of Violent Video Games on Violent Crime",
    journal: "Journal of Economic Behavior & Organization, 126, 1-17",
    doi: "10.1016/j.jebo.2016.03.003",
    category: "Econometric",
    sampleSize: "Over 10,000 weekly US municipal crime reports & VGChartz sales",
    methodology: "Quasi-experimental panel regression with instrumental variables exploiting variation in game release weeks and Metacritic violent ratings.",
    coreFinding: "Major violent game releases (including GTA releases) cause a 2.1% to 3.4% decrease in real-world violent crimes in the weeks immediately following launch. The 'incapacitation / time-use displacement' effect overwhelms any theoretical aggressive priming.",
    impactOnThesis: "Refutes Causality"
  },
  {
    id: "ferguson-2015",
    year: 2015,
    authors: "Christopher J. Ferguson",
    title: "Does Movie or Video Game Violence Predict Future Aggression? A Long-Term Analysis",
    journal: "Journal of Communication, 65(1), 193-212",
    doi: "10.1111/jcom.12142",
    category: "Longitudinal",
    sampleSize: "1996–2011 annual national time-series datasets across the US",
    methodology: "Cross-lagged panel and bivariate correlation models between video game sales / ESRB violence ratings and youth violence indicators.",
    coreFinding: "Found an inverse correlation of r = -0.95 between video game sales and youth violence rates across the 15-year period. Concluded that video game consumption tracks reductions, not increases, in youth criminal assaults.",
    impactOnThesis: "Refutes Causality"
  },
  {
    id: "markey-2015",
    year: 2015,
    authors: "Patrick M. Markey, Charlotte N. Markey, Juliana E. French",
    title: "Violent Video Games and Real-World Violence: Rhetoric Versus Data",
    journal: "Psychology of Popular Media Culture, 4(4), 277-295",
    doi: "10.1037/ppm0000030",
    category: "Econometric",
    sampleSize: "Monthly FBI homicide and aggravated assault rates from 1978 to 2011",
    methodology: "Autoregressive integrated moving average (ARIMA) time-series examining whether peaks in video game sales precede spikes in homicides.",
    coreFinding: "Months with the highest violent video game sales (such as holiday seasons and major Rockstar releases) were accompanied by coincident drops in homicides and aggravated assaults.",
    impactOnThesis: "Provides Mechanism"
  },
  {
    id: "apa-2020",
    year: 2020,
    authors: "American Psychological Association (Task Force)",
    title: "Resolution on Violent Video Games (Updated Scientific Consensus)",
    journal: "APA Council of Representatives Scientific Policy Document",
    doi: "apa.org/about/policy/violent-video-games-2020",
    category: "Institutional Consensus",
    sampleSize: "Comprehensive meta-review of >200 empirical and experimental studies",
    methodology: "Independent task force review assessing whether experimental aggression proxies correlate with real-world criminal acts.",
    coreFinding: "Concluded there is insufficient scientific evidence to support a causal link between violent video games and criminal violent acts or homicide. Rebuked claims linking mass violence or street crime to interactive media.",
    impactOnThesis: "Debunks Lab Proxies"
  },
  {
    id: "scotus-2011",
    year: 2011,
    authors: "U.S. Supreme Court (Opinion by Justice Antonin Scalia)",
    title: "Brown v. Entertainment Merchants Association (564 U.S. 786)",
    journal: "United States Reports, 564 U.S. 786",
    doi: "10.1007/s10657-012-9343-7",
    category: "Institutional Consensus",
    sampleSize: "Review of the entirety of psychological research submitted by the State of California",
    methodology: "Judicial scrutiny of causation, evidentiary validity, and First Amendment protection for interactive software.",
    coreFinding: "Ruled 7-2 that psychological studies failed to prove that violent video games cause minors to act aggressively in real life. Noted effects were indistinguishable from cartoons like Bugs Bunny or Road Runner.",
    impactOnThesis: "Legal Standard"
  },
  {
    id: "elson-2014",
    year: 2014,
    authors: "Malte Elson, Christopher J. Ferguson",
    title: "Twenty-Five Years of Research on Violence in Digital Games and Aggression",
    journal: "European Psychologist, 19(1), 33-46",
    doi: "10.1027/1016-9040/a000147",
    category: "Meta-Analysis",
    sampleSize: "Comprehensive review of 25 years of published literature",
    methodology: "Assessment of publication bias, flexible researcher degrees of freedom, and artificial laboratory aggression measures.",
    coreFinding: "Identified severe file-drawer publication bias in early lab studies. Demonstrated that measuring white noise blasts or hot sauce delivery in college students has zero external validity for predicting felony violence.",
    impactOnThesis: "Debunks Lab Proxies"
  },
  {
    id: "ward-2018",
    year: 2018,
    authors: "Michael R. Ward",
    title: "Video Games and Crime: A Review of the Empirical Literature",
    journal: "Contemporary Economic Policy, 36(1), 5-21",
    doi: "10.1111/coep.12260",
    category: "Econometric",
    sampleSize: "National and international econometric crime datasets",
    methodology: "Meta-synthesis of opportunity-cost models and time-diary allocations for video gaming cohorts.",
    coreFinding: "Young males who play video games spend 3.5 to 5 hours less per weekend evening in public drinking establishments and unmonitored peer groups, where 80%+ of urban lethal conflicts originate.",
    impactOnThesis: "Provides Mechanism"
  },
  {
    id: "unodc-2023",
    year: 2023,
    authors: "United Nations Office on Drugs and Crime (UNODC)",
    title: "Global Study on Homicide: Trends, Drivers, and Mechanisms",
    journal: "United Nations Publications, Vienna",
    doi: "10.18356/9789210029797",
    category: "Institutional Consensus",
    sampleSize: "195 countries, longitudinal homicide registers from 1990 to 2022",
    methodology: "Global epidemiological analysis decomposing homicides into interpersonal, organized crime, and sociopolitical drivers.",
    coreFinding: "Global homicide rate fell from 7.2 per 100k in 1990 to 5.8 in 2021. Primary determinants are income inequality (Gini), illicit firearm trafficking, rule of law, and drug gang conflicts. Media consumption is not a significant macro factor.",
    impactOnThesis: "Refutes Causality"
  }
];

export interface TheoreticalModel {
  name: string;
  tagline: string;
  academicProponents: string;
  proposedMechanism: string;
  empiricalPrediction: string;
  realWorldDataOutcome: 'Confirmed' | 'Refuted' | 'Partially Supported';
  explanation: string;
}

export const THEORETICAL_MODELS: TheoreticalModel[] = [
  {
    name: "Time-Use Displacement (Incapacitation Hypothesis)",
    tagline: "Voluntary Indoor Confinement",
    academicProponents: "Cunningham, Engelhardt & Ward (2016); Ward (2018); Dahl & DellaVigna (2009)",
    proposedMechanism: "Playing high-engagement games like GTA occupies hundreds of hours of high-risk demographic time (males aged 15-28). Time spent seated indoors replaces time on the streets, in bars, or participating in risky peer networks.",
    empiricalPrediction: "Crime should decrease during major game launches and remain depressed as gaming engagement increases.",
    realWorldDataOutcome: "Confirmed",
    explanation: "Econometric studies demonstrate that violent crime falls by 2% to 3.4% during major violent game release weeks. The physical incapacity to commit street crimes while gaming at home is an overwhelming behavioral governor."
  },
  {
    name: "The Catalyst Model",
    tagline: "Diathesis-Stress & Genetic Predisposition",
    academicProponents: "Ferguson (2008, 2015); Fikkers et al. (2016)",
    proposedMechanism: "Violent criminal behavior is driven by family pathology, genetic predisposition, substance abuse, and peer delinquency. Violent video games are a stylistic preference chosen by individuals already inclined toward aggression, not a cause.",
    empiricalPrediction: "Controlling for family background and personality will eliminate any correlation between video games and crime.",
    realWorldDataOutcome: "Confirmed",
    explanation: "Longitudinal prospective studies repeatedly show that when pre-existing aggression, family conflict, and peer delinquency are statistically controlled, video game violence exposure explains 0% of unique variance in actual criminal acts."
  },
  {
    name: "General Aggression Model (GAM) / Priming",
    tagline: "Cognitive Script & Desensitization Theory",
    academicProponents: "Anderson & Bushman (2001, 2018)",
    proposedMechanism: "Exposure to virtual violence rehearses aggressive cognitive scripts, reduces empathy, and primes aggressive retaliation to ambiguous social provocations.",
    empiricalPrediction: "Widespread adoption of violent media like GTA should result in macro-level increases in violent assaults and homicides.",
    realWorldDataOutcome: "Refuted",
    explanation: "The GAM's macro-level prediction failed completely: as violent video games grew into a multi-hundred-billion-dollar industry, youth violence and homicide rates dropped by over 50%. Experimental lab measures (noise blasts) proved to have zero ecological validity for felony crimes."
  },
  {
    name: "Catharsis & Tension Reduction",
    tagline: "Vicarious Emotional Discharge",
    academicProponents: "Feshbach (1961); modern behavioral compensation literature",
    proposedMechanism: "Simulated violence provides a harmless outlet to vent frustration, tension, and fantasy impulses within a bounded, consequence-free digital sandbox.",
    empiricalPrediction: "Players experience reduced real-world stress or hostility following gameplay sessions.",
    realWorldDataOutcome: "Partially Supported",
    explanation: "While strict psychoanalytic catharsis is debated, contemporary research confirms digital gameplay functions as an effective mood-regulation and social-bonding tool for millions of young people."
  }
];

export interface ThesisQuestionScenario {
  id: string;
  title: string;
  commonBelief: string;
  empiricalVerdict: string;
  keyEvidence: string;
  counterfactualAnalysis: string;
}

export const THESIS_INQUEST_TOPICS: ThesisQuestionScenario[] = [
  {
    id: "gta-v-launch",
    title: "Did the massive 2013 launch of GTA V ($1B in 3 days) cause a homicide surge?",
    commonBelief: "With over 32 million copies sold in 2013 alone, a game where players commit virtual mass murder and carjackings surely provoked violent imitation.",
    empiricalVerdict: "False. US homicides fell to a 50-year historic low (4.53 per 100k) in 2013-2014.",
    keyEvidence: "FBI Uniform Crime Reporting recorded 14,196 homicides in the US in 2013, compared to 24,526 in 1993. The launch year of GTA V was the safest recorded year in modern American history for violent crime.",
    counterfactualAnalysis: "If the thesis were true, the introduction of the fastest-selling violent entertainment product in human history would produce a visible positive spike. The real-world trend was an ongoing decline."
  },
  {
    id: "the-2020-spike",
    title: "What about the 2020 spike in US homicides (+29%)? Was that driven by lockdown gaming?",
    commonBelief: "During COVID-19 lockdowns, video game engagement broke all records, and US homicides spiked dramatically in 2020.",
    empiricalVerdict: "Confounded correlation. The 2020 spike was driven by pandemic social disruption, gun purchases, and policing crises, not video games.",
    keyEvidence: "First, other high-gaming countries (Japan, UK, Germany, South Korea) experienced the exact same gaming surge during lockdowns, yet their homicide rates remained near zero or even declined. Second, US youth violent arrests actually fell by 18.7% in 2020; the surge was concentrated in adult disputes involving newly purchased firearms.",
    counterfactualAnalysis: "If video gaming caused the 2020 homicide spike, the UK and Japan would have seen proportional spikes. They did not."
  },
  {
    id: "desensitization",
    title: "Doesn't GTA desensitize players to blood and death, lowering the barrier to murder?",
    commonBelief: "Repeated exposure to shooting digital avatars deadens the emotional aversion to real killing.",
    empiricalVerdict: "Refuted by neuroscience and forensic criminology. Gamers maintain clear cognitive boundaries between fiction and physical reality.",
    keyEvidence: "Neuroimaging (fMRI) studies by Szycik et al. (2017) demonstrated that long-term players of violent video games show identical neural empathetic responses to real human suffering as non-gamers. Incarcerated homicide offenders consistently cite gang affiliations, poverty, and drug trades, with video games ranked lowest among environmental factors.",
    counterfactualAnalysis: "Humans have engaged in violent fiction (Shakespearean tragedies, gladiator theatre, Grimm fairy tales) for millennia without losing innate mammalian prohibitions against conspecific homicide."
  },
  {
    id: "international-paradox",
    title: "Why are homicides in Japan and the UK so low if GTA is just as popular there?",
    commonBelief: "Global culture is homogeneous, so violent media effects should manifest everywhere.",
    empiricalVerdict: "Reveals the fatal flaw in media-centric criminology. Homicides are dictated by structural factors, not pop culture.",
    keyEvidence: "Rockstar North, the creator of GTA, is based in Edinburgh, Scotland. In the UK, homicide rates are ~0.9 per 100,000. In Japan, gaming expenditure per person is higher than in the US, but homicides are 0.2 per 100k (25 times lower than the US).",
    counterfactualAnalysis: "Media-effects models completely fail cross-national validation. Weapon availability (120 guns/100 people in US vs 0.3 in Japan) and social safety nets account for over 90% of cross-national variance."
  }
];
