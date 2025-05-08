
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-8">
              Sobre a TEP
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                A <strong>TEP - Tokenização Empresarial Paraense</strong> é uma iniciativa pioneira que conecta investidores a empresas paraenses por meio da tecnologia blockchain.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa Missão</h2>
              <p>
                Democratizar o acesso a investimentos em empresas da região amazônica, promovendo o desenvolvimento econômico sustentável através da tokenização de ativos empresariais.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">O que é tokenização?</h2>
              <p>
                A tokenização é o processo de converter direitos sobre um ativo do mundo real em tokens digitais em uma blockchain. No contexto da TEP, transformamos ações e participações em empresas paraenses em tokens digitais, permitindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Investimentos a partir de valores acessíveis</li>
                <li>Liquidez em ativos tradicionalmente ilíquidos</li>
                <li>Transparência nas operações e resultados</li>
                <li>Eliminação de intermediários</li>
                <li>Negociação global 24/7</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Sustentabilidade</h3>
                  <p>Priorizamos empresas com compromisso ambiental e práticas sustentáveis na Amazônia.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Transparência</h3>
                  <p>Todas as operações são registradas em blockchain, garantindo rastreabilidade e auditabilidade.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Inovação Regional</h3>
                  <p>Apoiamos projetos que valorizam conhecimentos tradicionais aliados à tecnologia.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Inclusão Financeira</h3>
                  <p>Permitimos que pequenos investidores participem de oportunidades antes restritas.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Segurança e Conformidade</h2>
              <p>
                A TEP opera em conformidade com as regulamentações da CVM e segue as melhores práticas de segurança digital. Todos os tokens são emitidos em uma blockchain segura e auditável, garantindo a integridade das transações e a proteção dos investidores.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
