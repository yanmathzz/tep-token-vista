
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [walletConnected, setWalletConnected] = React.useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/95 border-b">
      <div className="container flex h-20 items-center justify-between"> {/* Increased height from h-16 to h-20 */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/cc33767b-d4b9-4ceb-81c9-7db2af277e19.png" 
              alt="TEP Logo" 
              className="h-12" /* Increased logo height from h-9 to h-12 */
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
          {walletConnected && (
            <div className="hidden md:flex items-center gap-4 mr-2">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">R$ 5.250,00</span>
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Token favorito:</span>
                  <Badge variant="outline" className="ml-1 text-xs">ABC</Badge>
                </div>
              </div>
            </div>
          )}
          
          <Button
            variant={walletConnected ? "outline" : "default"}
            onClick={handleConnectWallet}
            className="hidden md:flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            {walletConnected ? "Carteira Conectada" : "Conectar Carteira"}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
              >
                <Wallet className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sua Carteira</DropdownMenuLabel>
              {walletConnected ? (
                <>
                  <DropdownMenuItem className="flex flex-col items-start">
                    <span className="font-medium">Saldo: R$ 5.250,00</span>
                    <span className="text-xs text-muted-foreground">Token favorito: ABC</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleConnectWallet}>
                    Desconectar Carteira
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem onClick={handleConnectWallet}>
                  Conectar Carteira
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
