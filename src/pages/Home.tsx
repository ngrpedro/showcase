import React from "react";

const projects = [1, 2, , 3, 4];

const Home = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 px-6 md:px-16 gap-16">
          <div className="flex items-start justify-start gap-16">
            <div
              className="rounded-2xl bg-gray-200 w-[10rem] h-[10rem]
              origin-center rotate-45"
            ></div>
            <div className="space-y-8 max-w-xl">
              <h1 className="text-4xl">
                Hey there :)<span className="block mt-2">I'm Pedro</span>
              </h1>
              <div className="space-y-4">
                <p className="text-sm">
                  Aute veniam eu labore consectetur dolor deserunt nostrud.
                  Occaecat irure mollit laborum mollit sint. Aliqua non dolor
                  magna veniam magna aute commodo elit occaecat.
                </p>
                <p className="text-sm">
                  Aute veniam eu labore consectetur dolor deserunt nostrud.
                  Occaecat irure mollit laborum mollit sint. Aliqua non dolor
                  magna veniam magna aute commodo elit occaecat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-6 md:px-16">
          <p className="text-2xl font-bold mb-10">
            Aqui estão alguns projetos meus::
          </p>
          <div className="grid grid-cols-2 items-start justify-center gap-5 flex-wrap">
            {projects.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-gray-200 p-4 rounded-lg space-y-4"
                >
                  <h1>Project Name</h1>
                  <p>
                    Ipsum do nulla veniam nulla irure sint esse ad eiusmod
                    eiusmod laborum esse. Sit sit officia amet voluptate labore
                    eu aliquip ex dolor laboris tempor nulla non laborum.
                    Nostrud ad laborum
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
