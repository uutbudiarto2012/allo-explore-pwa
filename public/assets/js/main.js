const sidebarItem = document.querySelectorAll(".sidebar-item");
// if (sidebarItem) {
//   sidebarItem.forEach((item) => {
//     item.addEventListener("click", function () {
//       sidebarItem.forEach(el => {
//         el.classList.remove("active")
//       });
//       item.classList.add("active")
//     });
//   });
// }

const contentContainer = document.querySelector(".content");
contentContainer.addEventListener("scroll", function () {
  const ticket = document.querySelector("#ticket");
  const tikectPosition = ticket.getBoundingClientRect();
  if (tikectPosition.top <= 144 && tikectPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#ticket']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  const onlineShopping = document.querySelector("#online-shopping");
  const onlineShoppingPosition = onlineShopping.getBoundingClientRect();
  if (onlineShoppingPosition.top <= 144 && onlineShoppingPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#online-shopping']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // hyperMarket
  const hyperMarket = document.querySelector("#hyper-market");
  const hyperMarketPosition = hyperMarket.getBoundingClientRect();
  if (hyperMarketPosition.top <= 144 && hyperMarketPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#hyper-market']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // gadget
  const gadget = document.querySelector("#gadget");
  const gadgetPosition = gadget.getBoundingClientRect();
  if (gadgetPosition.top <= 144 && gadgetPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#gadget']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // homeLiving
  const homeLiving = document.querySelector("#home-living");
  const homeLivingPosition = homeLiving.getBoundingClientRect();
  if (homeLivingPosition.top <= 144 && homeLivingPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#home-living']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // healty
  const healty = document.querySelector("#healty");
  const healtyPosition = healty.getBoundingClientRect();
  if (healtyPosition.top <= 144 && healtyPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#healty']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // fashion
  const fashion = document.querySelector("#fashion");
  const fashionPosition = fashion.getBoundingClientRect();
  if (fashionPosition.top <= 144 && fashionPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#fashion']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // foods
  const foods = document.querySelector("#foods");
  const foodsPosition = foods.getBoundingClientRect();
  if (foodsPosition.top <= 144 && foodsPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#foods']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // themePark
  const themePark = document.querySelector("#theme-park");
  const themeParkPosition = themePark.getBoundingClientRect();
  if (themeParkPosition.top <= 144 && themeParkPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#theme-park']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // mallProperty
  const mallProperty = document.querySelector("#mall-property");
  const mallPropertyPosition = mallProperty.getBoundingClientRect();
  if (mallPropertyPosition.top <= 144 && mallPropertyPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#mall-property']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // banknd-finance
  const bankAndFinance = document.querySelector("#bank-and-finance");
  const bankAndFinancePosition = bankAndFinance.getBoundingClientRect();
  if (bankAndFinancePosition.top <= 144 && bankAndFinancePosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#bank-and-finance']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // mediaEntertainment
  const mediaEntertainment = document.querySelector("#media-entertainment");
  const mediaEntertainmentPosition = mediaEntertainment.getBoundingClientRect();
  if (
    mediaEntertainmentPosition.top <= 144 &&
    mediaEntertainmentPosition.top >= 113
  ) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#media-entertainment']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // mediaEntertainment
  const game = document.querySelector("#game");
  const gamePosition = game.getBoundingClientRect();
  if (gamePosition.top <= 144 && gamePosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#game']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // event
  const event = document.querySelector("#event");
  const eventPosition = event.getBoundingClientRect();
  if (eventPosition.top <= 144 && eventPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#event']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  // social
  const social = document.querySelector("#social");
  const socialPosition = social.getBoundingClientRect();
  if (socialPosition.top <= 144 && socialPosition.top >= 113) {
    sidebarItem.forEach((item) => {
      const linkNya = item.querySelector("a[href='#event']");
      if (linkNya) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

const inputSearch = document.querySelector("#input-search");
if (inputSearch) {
  const parentInput = inputSearch.parentElement;
  inputSearch.addEventListener("focus", function () {
    parentInput.classList.add("focused");
  });
  inputSearch.addEventListener("blur", function () {
    parentInput.classList.remove("focused");
  });

  inputSearch.addEventListener("keyup", function () {
    if (this.value.length >= 2) {
      let targetId = "";
      const pattern = this.value.toLowerCase();
      const elementTargets = document.querySelectorAll(".content-item");
      for (let i = 0; i < elementTargets.length; i++) {
        const text = elementTargets[i].querySelectorAll("h2");
        var index = text[0].innerText.toLowerCase().indexOf(pattern);
        if (index != -1) {
          targetId = elementTargets[i].id;
          document.getElementById(targetId).scrollIntoView();
          break;
        }
      }
    }
  });
}
