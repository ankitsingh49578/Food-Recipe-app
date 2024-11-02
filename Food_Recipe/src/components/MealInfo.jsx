import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const [info, setInfo] = useState(null);
  const { mealId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    if (mealId) {
      getInfo();
    }
  }, [mealId]);

  return (
    <div>
      {!info ? (
        <h2 className="pt-10 text-xl ">Data Not Found</h2>
      ) : (
        <div className="flex flex-col md:flex-row p-[35px] min-h-[96vh] items-center bg-yellow-300 gap-6 md:gap-24">
          <div className="">
            <h1 className="text-3xl font-bold pb-4">Recipe Details</h1>
            <button className="p-2 bg-orange-600 rounded-md font-semibold my-4">{info.strMeal}</button>
            <h1 className="font-bold text-2xl mb-4">Instructions</h1>
            <p className="text-sm md:text-[16px]">{info.strInstructions}</p>
          </div>
          <img src={info.strMealThumb} alt={info.strMeal} className="md:w-[400px] md:h-[400px] h-[230px] w-[300px] rounded-lg"/>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
