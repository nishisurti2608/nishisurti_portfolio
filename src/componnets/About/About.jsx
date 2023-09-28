import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from black via-slate-800 to bg-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  text-center h-screen ">
        <h2 className="text-4xl sm:text-7xl font-bold py-2">About Me</h2>
        <h1 className="text-gray-300 ">
          Proffesional Hint <br />
          <span className="text-gray-400 py-4">
            When not secretly being an evil tech ninja, I enjoy photography. So
            please say Cheese 📸
          </span>
        </h1>
        <span className="text-gray-400 py-24">
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

        <div className="bg-bg-gradient-to-b from black via-slate-800 to bg-gray-800 scroll-py-44 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">
                  Still honing my coding skills
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-500 sm:text-5xl">
                  4+ Years
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">
                  Lines of code still writting
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight  text-slate-500 sm:text-5xl">
                  100K
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">
                  Cup of coffee
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-500 sm:text-5xl">
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
