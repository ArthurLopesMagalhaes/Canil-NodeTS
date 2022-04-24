import { Request, Response } from "express";
import { creatMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAllPets();

  res.render("pages/page", {
    list,
    menu: creatMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
  });
};
export const dogs = (req: Request, res: Response) => {
  let list = Pet.getPetsByType("dog");

  res.render("pages/page", {
    list,
    menu: creatMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
  });
};
export const cats = (req: Request, res: Response) => {
  let list = Pet.getPetsByType("cat");

  res.render("pages/page", {
    list,
    menu: creatMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
  });
};
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getPetsByType("fish");

  res.render("pages/page", {
    list,
    menu: creatMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
  });
};
