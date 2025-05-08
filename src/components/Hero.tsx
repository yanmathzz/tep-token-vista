
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToTokens = () => {
    const tokensSection = document.getElementById("tokens");
    if (tokensSection) {
      tokensSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Invista em empresas tokenizadas paraenses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Conecte sua carteira e comece a investir em tokens de empresas com potencial de crescimento.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Conectar Carteira
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={scrollToTokens}
              className="gap-2"
            >
              Explorar Tokens
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
