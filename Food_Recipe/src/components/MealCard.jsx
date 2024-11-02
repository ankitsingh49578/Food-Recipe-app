import React from "react";
import { NavLink } from "react-router-dom";

function MealCard({ detail }) {
  // console.log(detail);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-[240px] md:w-full mx-auto">
      {!detail
        ? <h2 className="md:translate-x-40 text-xl">Data Not Found</h2>
        : detail.map((item) => {
            return (
              <div className="min-h-[338px] w-[240px] bg-slate-50 rounded-xl shadow-lg hover:scale-105 transition-all duration-700">
                <img
                  src={item.strMealThumb}
                  alt="img.jpg"
                  width="240px"
                  className="rounded-t-xl"
                />
                <p className="my-3 font-semibold">{item.strMeal}</p>
                <NavLink to={`/${item.idMeal}`}>
                  <button className="border-black p-1 px-5 rounded-full bg-yellow-400 text-white font-semibold">
                    Recipe
                  </button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default MealCard;
