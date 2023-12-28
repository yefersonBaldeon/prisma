"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [foto, setfoto] = useState("");
  const [name, setname] = useState("");
  const [file, setfile] = useState(null);


  useEffect(() => {
    if (params.id) {
      fetch(`/api/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setnombre(data.nombre);
          setdescription(data.descripcion);
          setprice(data.price);
          setfoto(data.foto);
        });
    }
  }, []);

  const router = useRouter();


  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/products/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ nombre, descripcion, price, foto }),
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({ nombre, descripcion, price, foto }),
      });
      const data = await res.json();
      //   console.log(data);
    }

    const form = new FormData();
    form.set("file", file);

    if (!file) return;
    const a = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    // const b = await a.json();
    // console.log(b);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="" className=" font-bold">
          Nombre del producto
        </label>
        <input
          type="text"
          className="p-2 w-full mb-4 text-black rounded-lg"
          id="name"
          onChange={(e) => setnombre(e.target.value)}
          value={nombre}
        />
        <label htmlFor="" className=" font-bold">
          Descripción del producto
        </label>
        <textarea
          name=""
          id="descripcion"
          rows="3"
          className="p-2 w-full mb-4 text-black rounded-lg"
          onChange={(e) => setdescription(e.target.value)}
          value={descripcion}
        ></textarea>
        <label htmlFor="" className=" font-bold">
          Precio
        </label>
        <input
          type="text"
          className="p-2 w-full mb-4 text-black rounded-lg"
          id="precio"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
        <label htmlFor="" className=" font-bold">
          Foto
        </label>
        <input
          type="text"
          className="p-2 w-full mb-4 text-black rounded-lg"
          id="foto"
          onChange={(e) => setfoto(e.target.value)}
          value={foto}
        />
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
            setname(e.target.files[0].name)
            setfoto(e.target.files[0].name)
          }}
        />

        <button className="bg-blue-500 hover:bg-blue-900 p-3 m-2 rounded-lg">click</button>

        {params.id && (
          <button type="button"
            className="bg-red-500 hover:bg-red-900 p-3 m-2 rounded-lg"
            onClick={async () => {
              const res = await fetch(`/api/products/${params.id}`, {
                method: "DELETE",
              });
              const data = await res.json();
              console.log(data);
              router.push("/");
              router.refresh();
            }}
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPage;
