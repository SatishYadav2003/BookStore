import React from "react";

function Cards({ item, padder }) {
  return (
    <>
      <div
        className={`md:p-6 m-3 md:hover:scale-105 duration-200 ${padder} md:mx-0  dark:text-black`}
      >
        <div className="card w-90 md:w-96 bg-fuchsia-100 shadow-md md:shadow-xl">
          <figure>
            <img
              src={item.imageUrl}
              className="mt-5 rounded-md duration-200"
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-center">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">{item.status}</div>
              </h2>
            </div>
            <p className="text-center">{item.name}</p>
            <div className="card-actions justify-evenly mt-3">
              <div className="badge badge-outline px-4 py-3">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-500 px-3 py-3 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
