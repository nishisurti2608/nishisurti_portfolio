import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full dark:bg-gray-800 bg-white dark:text-white text-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  text-center ">
        <h2 className="text-4xl sm:text-7xl font-bold py-2">About Me</h2>
        <h1 className="dark:text-gray-300 text-gray-600 ">
          Proffesional Hint <br />
          <span className="dark:text-gray-400 text-gray-700 py-4">
            When not secretly being an evil tech ninja, I enjoy photography. So
            please say Cheese 📸
          </span>
        </h1>
        <span className="dark:text-gray-400  text-gray-700  py-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
          pariatur exercitationem cumque autem nemo quae vitae voluptas hic
          libero, animi molestiae et reprehenderit a totam, quos corrupti. Nobis
          doloribus cupiditate unde corporis. Ea incidunt recusandae quia
          molestiae natus eaque possimus obcaecati dolor impedit, exercitationem
          fugiat alias eveniet quo perferendis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sequi sapiente deleniti molestias illo
          dolor tempore nihil, obcaecati consequuntur fugit, est beatae tenetur
          ex mollitia pariatur?
        </span>
        <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 dark:text-gray-300 text-gray-800">
                  Still honing my coding skills
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-slate-500 text-slate-600 sm:text-5xl">
                  4+ Years
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 dark:text-gray-300 text-gray-800">
                  Lines of code still writting
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-slate-500 text-slate-600 sm:text-5xl">
                  100K
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 dark:text-gray-300 text-gray-800">
                  Cup of coffee already drank
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tightdark:text-slate-500 text-slate-600 sm:text-5xl">
                  1K
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
