import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dog, Heart, Paw } from "lucide-react";

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Discover the World of Dogs</h1>
          <p className="text-xl mb-8">Man's best friend in all their furry glory</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Explore Breeds <Dog className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <Carousel className="mb-12">
          <CarouselContent>
            {dogImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={src} alt={`Dog ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2 h-6 w-6 text-blue-600" />
              What are Dogs?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              {["Loyal and affectionate", "Highly trainable", "Various sizes and breeds", "Excellent sense of smell", "Understand human emotions"].map((trait, index) => (
                <li key={index} className="flex items-center">
                  <Dog className="mr-2 h-5 w-5 text-blue-600" />
                  {trait}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              {["Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Beagle"].map((breed, index) => (
                <li key={index} className="flex items-center">
                  <Paw className="mr-2 h-5 w-5 text-blue-600" />
                  {breed}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => setLikes(likes + 1)}
          >
            <Heart className="mr-2 h-5 w-5" /> Like Dogs ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
