"use client";

import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video-player";
import { ArrowLeft, Heart, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FilmePage() {
	// URL do vídeo que você quer reproduzir
	const videoUrl =
		"https://www.dropbox.com/scl/fi/of3xkrt44rp8quf18ppqw/mem-rias-niver-mary.mp4?rlkey=4x9pvqjcn9jrk68tyezixo1k7&st=3fhb2v0y&dl=1";

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Barra de navegação */}
			<header className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/80 to-transparent">
				<div className="container mx-auto px-4 py-4 flex items-center">
					<Link href="/" className="mr-auto">
						{/* <ArrowLeft className="h-8 w-8 text-white absolute left-14 top-8" /> */}
					</Link>
					<Image
						src="/mary.jpg"
						alt="Maryana Card"
						width={120}
						height={40}
						className="object-contain border-2 border-gray-600 rounded-md"
						draggable="false" // Impede o arrasto da imagem
						priority // Carrega a imagem com prioridade
						onContextMenu={(e) => e.preventDefault()}
					/>
				</div>
			</header>

			{/* Hero com imagem do filme */}
			<div className="relative h-[70vh] w-full">
				<Image
					src="/casal2.jpg"
					alt="Capa do Filme"
					fill
					className="object-cover"
					priority
					draggable="false" // Impede o arrasto da imagem
					onContextMenu={(e) => e.preventDefault()}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

				<div className="absolute bottom-0 left-0 w-full p-8 max-w-3xl">
					<h1 className="text-5xl font-bold mb-4">
						The day of the Maryana (O dia da Maryana)
					</h1>
					<div className="flex items-center gap-2 mb-4">
						<span className="text-green-500 font-semibold">
							97% de compatibilidade
						</span>
						<span className="text-gray-400">2025</span>
						<span className="border border-gray-600 px-1 text-xs">15</span>
						<span className="text-gray-400">12:50s</span>
					</div>

					<div className="flex gap-3 mb-6">
						<VideoPlayer videoUrl={videoUrl} title="Vídeo Especial" />

						<Button
							variant="outline"
							className="border-gray-600 hover:bg-gray-800"
						>
							<Heart className="h-5 w-5" />
						</Button>
						<Button
							variant="outline"
							className="border-gray-600 hover:bg-gray-800"
						>
							<Info className="h-5 w-5" />
						</Button>
					</div>

					<p className="text-lg max-w-3xl text-justify">
						Cada momento ao seu lado é um capítulo inesquecível da nossa
						história. Lembro com carinho dos risos compartilhados, dos dias,
						tardes e noites tranquilas e das aventuras que enfrentamos juntos,
						sempre de mãos dadas. Nosso amor é a base que fortalece meus dias, e
						cada olhar seu me faz acreditar ainda mais no nosso futuro. Tenho
						certeza de que o melhor está por vir e, com você, ao meu lado, cada
						sonho se tornará realidade. Mal posso esperar para construir ainda
						mais memórias incríveis e seguir com você por toda a vida, sempre
						mais unidos.
					</p>
				</div>
			</div>

			{/* Detalhes do filme */}
			<div className="container mx-auto px-4 py-12 max-w-full ml-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="col-span-2">
						<h2 className="text-2xl font-bold mb-4">Sobre o nosso filme</h2>
						<p className="text-gray-300 mb-6 text-justify">
							Nos conhecemos na mesma empresa onde trabalhamos, mas não foi de
							imediato que nossos corações se alinharam. Passamos por algumas
							etapas até o tão sonhado dia em que você aceitou sair comigo, e
							desde então, nossa jornada juntos tem sido uma linda aventura. Os
							momentos que mais me marcam são aqueles que vivemos só nós dois,
							quando o tempo parece parar. Nossas conversas profundas, risadas e
							carinhos, e as idas para a praia, onde podemos apenas ser nós
							mesmos. Cada passo que damos juntos, como a conquista do nosso
							apartamento, me lembra o quão abençoado sou por ter você ao meu
							lado. Sorrir ao seu lado e compartilhar a vida é algo
							indescritível, e cada dia ao seu lado é mais uma página desse
							livro incrível que estamos escrevendo. A cada momento, vejo como
							nosso amor se fortalece, e como estamos construindo algo que é só
							nosso, tão especial e único.
						</p>

						<div className="mb-6">
							<h3 className="text-xl font-semibold mb-2">Elenco principal</h3>
							<p className="text-gray-300 text-justify">
								Gabriel: O personagem que traz a força do amor, a dedicação e a
								capacidade de transformar os momentos simples em aventuras
								inesquecíveis. Sempre ao lado de sua amada, construindo uma
								história cheia de risos, carinho e superações.
								<br />
								<br />
								Maryana: A musa que ilumina cada capítulo, com seu charme,
								inteligência e coração aberto. Juntos, ela e o protagonista
								enfrentam as adversidades da vida, criam momentos especiais e
								tornam cada dia uma nova oportunidade para fortalecer o amor que
								compartilham.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-2">Gêneros</h3>
							<p className="text-gray-300 text-justify">
								Romance, Aventura, Comédia, Drama Cada momento juntos é uma
								mistura de emoções: a doçura dos romances inesperados, as
								aventuras que vocês compartilham, as risadas nas comédias da
								vida e as lições e superações nos dramas que tornam o
								relacionamento ainda mais forte.
							</p>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-2">Momentos especiais</h3>
						<ul className="text-gray-300 space-y-2">
							<li>• Primeiro encontro</li>
							<li>• Primeiro beijo</li>
							<li>• Primeira viagem juntos</li>
							<li>• Aniversário de namoro</li>
							<li>• Planos para o futuro</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
