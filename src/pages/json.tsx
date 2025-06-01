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
        fetch('../server/ricky.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setPersonagens(data.results); // Armazena os dados no estado
            });
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <h1>Personagem em Json</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {personagens.map((char, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <img src={char.image} alt={char.name} />
                        <h1>{char.name}</h1>
                        <p>{char.location.name}</p>
                        <p>{char.species}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Json;