// Creating and appending the style element
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #3b3c36;
    color: white;
    margin: 0;
    padding: 0;
  }

  #dynamic-welcome h1, #dynamic-welcome h3 {
    color: #ffffff;
    opacity: 0;
    transition: opacity 2s;
  }

  #dynamic-welcome h1 {
    padding-top: 20px;
    text-align: center;
  }

  #dynamic-welcome h3 {
    padding-top: 5px;
    text-align: center;
  }

  #dynamic-about {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  #dynamic-about .arabic-container,
  #dynamic-about .english-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
  }

  #dynamic-about .arabic-container p,
  #dynamic-about .english-container p {
    flex: 2;
    padding: 10px;
    color: #ffffff;
    font-size: 18px;
    line-height: 1.6;
  }

  #dynamic-about .arabic-container img,
  #dynamic-about .english-container img {
    flex: 1;
    margin-left: 20px;
    max-width: 300px;
    border-radius: 10px;
  }

  #dynamic-cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  #dynamic-cards .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 250px;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    margin: 10px;
  }

  #dynamic-cards .card img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    #dynamic-about .arabic-container,
    #dynamic-about .english-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    #dynamic-cards {
      flex-direction: column;
      
      gap: 20px;
    }

    #dynamic-cards .card {
      width: 100%;
      max-width: 300px;
    }

    #dynamic-about .arabic-container img,
    #dynamic-about .english-container img {
      margin-left: 0;
      margin-top: 10px;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    #dynamic-cards {
      gap: 15px;
    }

    #dynamic-cards .card {
      max-width: 100%;
    }

    #dynamic-about .arabic-container p,
    #dynamic-about .english-container p {
      font-size: 16px;
    }
  }
`;

document.head.appendChild(style);

const background = document.body;
background.style.backgroundColor = "#3b3c36";
const dynamicWelcome = document.getElementById("dynamic-welcome");

const welcomeMessage = document.createElement("h1");
welcomeMessage.textContent = "مرحباً بكم في شركة مياه الرياض";
welcomeMessage.style.paddingTop = "20px";
welcomeMessage.style.textAlign = "center";
welcomeMessage.style.color = "#ffffff";
welcomeMessage.style.opacity = "0";
welcomeMessage.style.transition = "opacity 2s";
setTimeout(() => {
  welcomeMessage.style.opacity = "1";
}, 500);
dynamicWelcome.appendChild(welcomeMessage);

const sloganMessage = document.createElement("h3");
sloganMessage.textContent =
  "نحن نقدم أفضل خدمات نقل المياه الموثوقة في الرياض والمناطق المحيطة بها";
sloganMessage.style.paddingTop = "5px";
sloganMessage.style.textAlign = "center";
sloganMessage.style.color = "#ffffff";
sloganMessage.style.opacity = "0";
sloganMessage.style.transition = "opacity 2s";
setTimeout(() => {
  sloganMessage.style.opacity = "1";
}, 500);
dynamicWelcome.appendChild(sloganMessage);

const dynamicAbout = document.getElementById("dynamic-about");

const arabicContainer = document.createElement("div");
arabicContainer.style.display = "flex";
arabicContainer.style.flexDirection = "row";
arabicContainer.style.justifyContent = "space-between";
arabicContainer.style.alignItems = "center";
arabicContainer.style.padding = "20px";
arabicContainer.style.flexWrap = "wrap";

const arabicAbout = document.createElement("p");
arabicAbout.style.flex = "2";
arabicAbout.style.padding = "10px";
arabicAbout.style.color = "#ffffff";
arabicAbout.style.fontSize = "18px";
arabicAbout.style.lineHeight = "1.6";
arabicAbout.style.textAlign = "right";
arabicAbout.textContent = `
  أن نكون أفضل مزود لصهاريج المياه في منطقة الرياض بأكملها والتي تغطي مناطق شمال الرياض والرمال والمونسية وقرطبة واليرموك وغرناطة والقادسية.
  نحن ملتزمون بتزويد عملائنا بأعلى مستويات الجودة من المياه العذبة المتاحة. خدماتنا المتوفرة على مدار الساعة طوال أيام الأسبوع تجعل من السهل عليك العثور 
  على ناقلة إمداد المياه بالقرب منك، في أي وقت ليلاً أو نهارًا.
  
  في شركة وايت ووتر موردي في الرياض، ندرك أهمية الوصول إلى المياه النظيفة والعذبة. ولهذا السبب نتخذ إجراءات صارمة لمراقبة الجودة للتأكد من أن مياهنا تلبي 
  أعلى معايير النظافة والنقاء. يتم الحصول على مياهنا النقية من أفضل المصادر ويتم اختبارها بانتظام لضمان جودتها.
`;

const arabicImage = document.createElement("img");
arabicImage.src = "/static/images/truck2.jpeg"; 
arabicImage.alt = "Water Tanker Service - Arabic";
arabicImage.style.flex = "1";
arabicImage.style.marginLeft = "20px";
arabicImage.style.maxWidth = "300px";
arabicImage.style.borderRadius = "10px";

arabicContainer.appendChild(arabicAbout);
arabicContainer.appendChild(arabicImage);
dynamicAbout.appendChild(arabicContainer);

const englishContainer = document.createElement("div");
englishContainer.style.display = "flex";
englishContainer.style.justifyContent = "space-between";
englishContainer.style.alignItems = "center";
englishContainer.style.padding = "20px";
englishContainer.style.marginLeft ='20px'
englishContainer.style.flexDirection = "row";
englishContainer.style.flexWrap = "wrap";

const englishAbout = document.createElement("p");
englishAbout.style.flex = "2";
englishAbout.style.padding = "10px";
englishAbout.style.color = "#ffffff";
englishAbout.style.fontSize = "18px";
englishAbout.style.lineHeight = "1.6";
englishAbout.style.textAlign = "left";
englishAbout.textContent = `
  Being the best Water Tanker Supplier in the entire Riyadh covering areas of North Riyadh, Al-Rimal Al-Munisyah, Al-Qurtubah, Al-Yarmouk, Gharnata and Al-Qadsiyah.
  We are committed to providing our customers with the highest quality of fresh water available. Our 24/7 services make it easy for you to find Water Supply Tanker near 
  you, at any time of the day or night.
  
  At Riyadh Water Supply in Riyadh, we understand the importance of having access to clean and fresh water. That's why we take strict quality control measures to ensure 
  that our water meets the highest standards of cleanliness and purity. Our pure water is sourced from the best sources and is tested regularly to guarantee its quality.
`;

const englishImage = document.createElement("img");
englishImage.src = "/static/images/truck5.jpeg";
englishImage.alt = "Water Tanker Service - English";
englishImage.style.flex = "1";
englishImage.style.marginRight = "20px";
englishImage.style.maxWidth = "300px";
englishImage.style.height = "400px";
englishImage.style.borderRadius = "10px";

englishContainer.appendChild(englishImage);
englishContainer.appendChild(englishAbout);
dynamicAbout.appendChild(englishContainer);

const container = document.getElementById("dynamic-cards");
container.style.display = "flex";
container.style.gap = "20px";
container.style.alignItems ='center'
container.style.justifyContent = "center";
container.style.marginTop = "20px";
container.style.flexWrap = "wrap";
container.style.marginLeft = '3px';
container.style.marginRight ='10px'

const cardsData = [
  {
    title: "Emergency Water Supply",
    image:
      "https://cdn0.iconfinder.com/data/icons/vehicles-72/277/fire_truck_car_vehicle_firefighter_car-256.png",
    description:
      "Immediate water delivery during emergencies such as natural disasters, pipeline breaks, or fire incidents.",
  },
  {
    title: "Residential Water Services",
    image:
      "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/home-256.png",
    description:
      "Reliable water delivery for homes and housing societies facing low or inconsistent municipal supply.",
  },
  {
    title: "Agricultural Water Supply",
    image:
      "https://cdn2.iconfinder.com/data/icons/smart-home-2-0/64/16_--256.png",
    description:
      "Providing water to agricultural farms in need of regular water supply for irrigation and crop maintenance.",
  },
];

cardsData.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = cardData.image;
  cardImage.alt = cardData.title;
  card.appendChild(cardImage);

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = cardData.title;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.textContent = cardData.description;
  card.appendChild(cardDescription);

  container.appendChild(card);
});
