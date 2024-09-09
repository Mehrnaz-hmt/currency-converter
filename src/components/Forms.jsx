import React from "react";

function Forms() {
  return (
    <>
      {/* <form className="exchange-form" onSubmit={handleSubmit}> */}
      <form className="exchange-form">
        <input
          //   value={title}
          //   onChange={(e) => setTitle(e.target.value)}
          //   className="text-field"
          //   name="name"
          //   type="text"
          placeholder="Enter the Value..."
        />
        <span className="equal-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </span>

        <input
          //   value={description}
          //   onChange={(e) => setDescription(e.target.value)}
          //   name="name"
          //   type="text"
          //   className="text-field"
          placeholder="Enter the value ..."
        />
      </form>
    </>
  );
}

export default Forms;
