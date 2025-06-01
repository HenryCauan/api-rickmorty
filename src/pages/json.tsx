'use client'
import { useEffect, useState } from "react";

interface Personagem {
    image: string;
    name: string;
    location: {
        name: string;
    };
    species: string;
}

const Json: React.FC = () => {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);

    useEffect(() => {
        fetch('/ricky.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setPersonagens(data.results); // Armazena apenas o array de resultados
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col p-12 items-center">
            <h1 className="text-4xl font-bold">Personagem em Json</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {personagens.map((personagem) => (
                    <div className="flex flex-col items-center justify-center">
                        <img src={personagem.image} alt={personagem.name} />
                        <h1>{personagem.name}</h1>
                        <p>{personagem.location.name}</p>
                        <p>{personagem.species}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Json;