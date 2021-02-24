import React from "react";
import details from "../data/json/detailjson.json";
import DetailsCard from "../components/DetailsCard";
import { Link } from "react-router-dom";
import "../components/Food.css";
import "./Detail.css";
import Explanation from "../components/Explanation";
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: details,
      currentPage: 1,
      foodsPerPage: 52,
      search: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  handleFilter(e) {
    if (e.key === "Enter") {
      this.setState({
        search: e.target.value,
      });
    }
  }
  handleGlass() {
    const glass = document.getElementById("searchfood");
    this.setState({
      search: glass.value,
    });
  }
  prec() {
    if (this.state.currentPage === 1) {
      this.setState({
        currentPage: Math.ceil(
          this.state.foods.filter((food) =>
            food.nom
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                this.state.search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
          ).length / this.state.foodsPerPage
        ),
      });
    } else {
      this.setState({
        currentPage: -1 + this.state.currentPage,
      });
    }
  }
  suiv() {
    if (
      this.state.currentPage ===
      Math.ceil(
        this.state.foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / this.state.foodsPerPage
      )
    ) {
      this.setState({
        currentPage: 1,
      });
    } else {
      this.setState({
        currentPage: 1 + this.state.currentPage,
      });
    }
  }
  first() {
    this.setState({ currentPage: 1 });
  }
  last() {
    this.setState({
      currentPage: Math.ceil(
        this.state.foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / this.state.foodsPerPage
      ),
    });
  }

  render() {
    const { foods, currentPage, foodsPerPage } = this.state;

    // Logic for displaying current foods
    const indexOfLastFood = currentPage * foodsPerPage;
    const indexOfFirstFood = indexOfLastFood - foodsPerPage;
    const currentfoods = foods
      .filter((food) =>
        food.nom
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            this.state.search
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
      .slice(indexOfFirstFood, indexOfLastFood);

    const renderfoods = currentfoods.map((food) => {
      return (
        <DetailsCard
          key={food.nom}
          value={food.nom}
          ef={food.ef}
          changeclim={food.changementclim}
          appozone={food.appauvozone}
          rayion={food.rayonion}
          formozone={food.formphotoozone}
          part={food.particule}
          acid={food.acidterreau}
          eut={food.euterre}
          eue={food.eueaudouce}
          eum={food.eumarine}
          sol={food.utilsol}
          eco={food.ecotoxeau}
          ee={food.epuieau}
          een={food.epuienerg}
          em={food.epuimine}
        />
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        foods.filter((food) =>
          food.nom
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              this.state.search
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        ).length / foodsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={`${this.state.currentPage === number ? "current" : ""} ${
            number < this.state.currentPage - 5 ||
            number > this.state.currentPage + 5
              ? "hidden"
              : ""
          }`}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="food">
        <Explanation />
        <div className="search">
          <input
            id="searchfood"
            type="search"
            placeholder="Rechercher un aliment"
            onKeyDown={this.handleFilter}
          />
          <button
            type="submit"
            className="noradius"
            onClick={this.handleGlass.bind(this)}
          >
            🔎
          </button>
          <Link
            to="/aliments"
            className="button"
            searchvalue={this.state.search}
          >
            Aliments simplifiés
          </Link>
        </div>
        {this.state.search === "" ? (
          <p className="block">Tous les aliments de la base de données.</p>
        ) : (
          <p className="block">Vous recherchez {this.state.search}.</p>
        )}
        {renderfoods}
        <ul id="page-numbers">
          <li onClick={this.first.bind(this)}>First</li>
          <li onClick={this.prec.bind(this)}>{"préc. <"}</li>
          {renderPageNumbers}
          <li onClick={this.suiv.bind(this)}>{"> suiv."}</li>
          <li onClick={this.last.bind(this)}>Last</li>
        </ul>
      </div>
    );
  }
}
export default Details;
