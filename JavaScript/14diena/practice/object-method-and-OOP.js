const company = {
  name: "Tesla",
  foundationDate: new Date("2020"),
  workers: 100,
  foundingCapital: 1_000_000,

  showCompanyData: () => {
    console.log(company.name);

    console.log(
      `We are ${company.name} from ${company.foundationDate}. We count ${company.workers} workers. Capital: ${company.foundingCapital}`
    );
  },
};

console.log(company);

company.showCompanyData();

// OOP
// function constructor - tokiu atveju pavadinimą rašome iš didžiosios raidės

function Phone(hardware, processor, screenSize) {
  this.hardware = hardware;
  this.processor = processor;
  this.screenSize = screenSize;
}

const iPhone = new Phone("intel", 2.4, 7.1);

console.log({ iPhone });

const phones = [];

for (let i = 0; i < 5; i++) {
  const phone = new Phone("intel", `${i}GHz`, i * 2);

  phones.push(phone);
}

console.log(phones);
