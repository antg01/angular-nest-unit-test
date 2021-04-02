import { HeroesComponent } from "./heroes.component";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";
import { HeroService } from "../hero.service";
import { Component, Input } from "@angular/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HeroComponent", () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderSucker", strength: 1 },
      { id: 2, name: "SuperBelly", strength: 24 },
      { id: 3, name: "BatRaper", strenght: 15 },
    ];

    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHeroes",
      "deleteHero",
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("Should remove the indicated hero from the heroes list", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it("Should call deleteHero", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
