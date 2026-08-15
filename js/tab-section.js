const services = {
  branding: {
    description:
      "Our team of experts specializes in creating unique and effective designs",

    detail:
      "We created marketing materials that were consistent with the new brand identity, such as business cards, brochures, and social media graphics.",

    balls: "../images/ico_ball_04.png",
  },

  design: {
    description:
      "Innovative and effective design solutions for business of our clients",

    detail:
      "We partnered with a technology startup to create a new website that would showcase their innovative product and attract investors.",

    balls: "../images/ico_ball_02.png",
  },

  marketing: {
    description:
      "Our team of experienced designers and marketing professionals work closely",

    detail:
      "We provided the brand with a detailed social media strategy that outlined how they could continue to grow their following and engage with their audience in the future.",

    balls: "../images/ico_ball_03.png",
  },
};

const tabs = document.querySelectorAll(".service-tab");

const ballsContainer = document.querySelector("#service-balls");
const descriptionElement = document.querySelector("#service-description");
const detailElement = document.querySelector("#service-detail");

function renderService(serviceName) {
  const service = services[serviceName];

  if (!service) {
    return;
  }

  descriptionElement.textContent = service.description;

  detailElement.textContent = service.detail;

  ballsContainer.innerHTML = "";

  const ball = document.createElement("img");

  ball.src = service.balls;
  ball.alt = "";

  ball.classList.add("ball");

  ballsContainer.appendChild(ball);

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.service === serviceName);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const serviceName = tab.dataset.service;

    renderService(serviceName);
  });
});

renderService("branding");
