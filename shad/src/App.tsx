import './App.css'
import{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imagens from './imagens.json';

function App() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const pizzasFiltradas = imagens.filter((pizza) =>
    pizza.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <body>
      <header>
        <div className='Title'>
          <h1>SUA PIZZARIA</h1>
        </div>
        <div className='Button'>
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      <nav className='Form'>
        <div className="flex w-full max-w-sm items-center space-x-3">
          <Input
            type="text"
            placeholder="Pesquise por sabor..."
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
          <Button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </nav>
      <main>
        <section>
          <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {pizzasFiltradas.map((pizza) => (
                  <CarouselItem key={pizza.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className='Cardo'>
                        <CardContent className='Cardi'>
                          <h3 className="text-lg font-semibold mb-1">{pizza.nome}</h3>
                          <img src={pizza.url} alt={`Pizza ${pizza.id}`} className="PizzaImg" />
                          <p className="text-sm mt-2">R$ {pizza.preco.toFixed(2)}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
          </Carousel>

        </section>
        <article>
          <img className="Imagem" src="./src/assets/img/pizzaiolo.png" alt="pizzaiolo" />
        </article>
      </main>
      <footer>
          <h1>
            BY LUCAS VALE
          </h1>
      </footer>
    </body>
  );
}

export default App;
