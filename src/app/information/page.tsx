"use client";

import { useEffect, useState } from "react";
interface Props {
  id: number;
  name: string;
  email: string;
  message: string;
}

export default function Page() {
  const [data, setData] = useState<Props[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAllContacts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/contacts`,
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-2xl font-bold">Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-200 bg-white shadow-md">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="border-b px-4 py-3">Nombre</th>
              <th className="border-b px-4 py-3">Email</th>
              <th className="border-b px-4 py-3">Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={3} className="py-4 text-center">
                  Cargando data...
                </td>
              </tr>
            )}

            {!isLoading && data && data.length === 0 && (
              <tr>
                <td colSpan={3} className="py-4 text-center">
                  No hay datos
                </td>
              </tr>
            )}

            {!isLoading &&
              data &&
              data.map((contact) => (
                <tr key={contact.id}>
                  <td className="border-b px-4 py-3">{contact.name}</td>
                  <td className="border-b px-4 py-3">{contact.email}</td>
                  <td className="border-b px-4 py-3">{contact.message}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
