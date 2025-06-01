'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Json from "./json";

const Api: React.FC = () => {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);

    interface Personagem {
        image: string;
        name: string;
        origin: {
            name: string;
        };
        species: string;
        status: string;
        gender: string;
    }

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPersonagens(data.results);
            })
    }, [])

    return (
        <>
            <div className="flex flex-col items-center min-h-screen p-12">
                <h1 className="text-4xl font-bold pb-24">
                    <Link href="/json" className="hover:underline">The Rick and Morty API</Link>
                </h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8" id="personagens">
                    {personagens.map((char, index) => (
                        <div className="flex flex-col">
                            <img src={char.image} alt={char.name} />
                            <h2 className="font-semibold text-center">{char.name}</h2>
                            <p>{char.origin.name}</p>
                            <p>{char.species}</p>
                            <p>{char.status}</p>
                            <p>{char.gender}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Api;