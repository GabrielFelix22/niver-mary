"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const route = useRouter();

	const handleClick = () => {
		const audio = new Audio("/tudum-netflix-sound.mp3");
		audio.play();
		audio.volume = 0.5; // Ajuste o volume conforme necessário

		setTimeout(() => {
			route.push("/filme");
		}, 100);
	};

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="container mx-auto px-4 py-16">
				<div className="flex justify-center mb-12">
					<Image
						src="/logo-nf.png?height=60&width=180"
						alt="Netflix Logo"
						width={180}
						height={60}
						className="object-contain"
					/>
				</div>

				<h1 className="text-3xl font-bold text-center mb-10">
					Quem está assistindo?
				</h1>

				<div className="flex justify-center">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div onClick={handleClick} className="group cursor-pointer">
						<div className="flex flex-col items-center">
							<div className="w-32 h-32 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition duration-200">
								<Image
									src="/mary.jpg?height=128&width=128"
									alt="Perfil da Namorada"
									width={128}
									height={128}
									className="object-cover w-full h-full"
									onContextMenu={(e) => e.preventDefault()}
									draggable="false" // Impede o arrasto da imagem
								/>
							</div>
							<p className="mt-2 text-gray-400 group-hover:text-white transition duration-200">
								Maryana
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
