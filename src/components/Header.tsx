
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet, ExternalLink } from "lucide-react";

const Header = () => {
  const [walletConnected, setWalletConnected] = React.useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/95 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/8a3288d4-fab4-45e4-9079-8f136689dadd.png" 
              alt="TEP Logo" 
              className="h-9" 
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link to="/tokens" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Todos os Tokens
            </Link>
            <Link to="/portfolio" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Portfólio
            </Link>
            <Link to="/sobre" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Sobre
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={walletConnected ? "outline" : "default"}
            onClick={handleConnectWallet}
            className="hidden md:flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            {walletConnected ? "Carteira Conectada" : "Conectar Carteira"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={handleConnectWallet}
          >
            <Wallet className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
