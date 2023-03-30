import { useEffect } from "react";

export default function Login({ getRecipes }) {
  async function fetchRecipe() {
    let response = await fetch("http://localhost:5000/", {
      method: "POST",

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <div className="grid h-screen w-screen place-items-center bg-slate-800 px-4 text-sm font-medium">
        <h1 className="text-white text-4xl">Recipe Frontend</h1>
        <div className="w-full max-w-sm rounded-lg bg-slate-700/30 shadow">
          <form className="p-4 md:p-5 lg:p-6">
            <div className="grid gap-y-3">
              <input
                className="focus:border-blue-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400"
                placeholder="Name Of Recipe"
              />
              <input
                className="focus:border-blue-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400"
                placeholder="Description"
              />
              <div className="relative">
                <a
                  className="w-full inline-block pt-2 pr-5 pb-2 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                rounded-xl transition duration-200 hover:bg-indigo-600 ease"
                >
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
