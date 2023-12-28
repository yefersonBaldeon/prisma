import Link from "next/link";
import React from "react";

const Nabvar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-10 flex justify-between items-center p-5">
        <h3 className="font-bold text-3xl">CarritoNext</h3>
        <ul className="flex gap gap-3">
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/">Products</Link>
          </li>

          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/new">New</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nabvar;
