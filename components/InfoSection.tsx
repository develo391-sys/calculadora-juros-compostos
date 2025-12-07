import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="mt-12 text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Passo a passo para usar a calculadora de juros compostos</h2>
        <p className="mb-4">
          Usar a calculadora de juros compostos para fazer cálculos financeiros é fácil e intuitivo. Confira o passo a passo:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2C3FA5]/20 text-[#2C3FA5] font-bold mr-3">1</span>
            <p><strong className="font-semibold text-gray-900">Passo 1:</strong> Preencha o campo “valor inicial” com a quantia que você irá investir inicialmente. Caso não tenha nada para começar, pode deixar como 0.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2C3FA5]/20 text-[#2C3FA5] font-bold mr-3">2</span>
            <p><strong className="font-semibold text-gray-900">Passo 2:</strong> No campo “valor mensal”, coloque o quanto você pretende investir por mês de forma recorrente.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2C3FA5]/20 text-[#2C3FA5] font-bold mr-3">3</span>
            <p><strong className="font-semibold text-gray-900">Passo 3:</strong> No campo “taxa de juros”, informe a rentabilidade esperada. Lembre-se de selecionar se a taxa é mensal ou anual.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2C3FA5]/20 text-[#2C3FA5] font-bold mr-3">4</span>
            <p><strong className="font-semibold text-gray-900">Passo 4:</strong> Preencha o campo “período” com o tempo que você deixará o dinheiro rendendo.</p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#2C3FA5]/20 text-[#2C3FA5] font-bold mr-3">5</span>
            <p><strong className="font-semibold text-gray-900">Passo 5:</strong> Clique em “Calcular” para ver o resultado detalhado em gráficos e tabelas.</p>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">O que são Juros Compostos?</h3>
          <p className="mb-4">
            Os juros compostos são conhecidos popularmente como "juros sobre juros". Diferente dos juros simples, onde a taxa incide apenas sobre o valor inicial, nos compostos a taxa incide sobre o montante acumulado (capital + juros passados).
          </p>
          <p>
            Essa dinâmica cria um efeito "bola de neve", acelerando o crescimento do seu patrimônio de forma exponencial ao longo do tempo. É a base da maioria dos investimentos de longo prazo.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">A Fórmula</h3>
          <p className="mb-4">A fórmula básica para cálculo de montante único é:</p>
          <div className="bg-gray-100 p-4 rounded text-center font-mono text-lg font-bold text-gray-800 mb-4">
            M = C (1 + i)<sup>t</sup>
          </div>
          <ul className="text-sm space-y-2">
            <li><strong>M:</strong> Montante acumulado (Valor final)</li>
            <li><strong>C:</strong> Capital investido</li>
            <li><strong>i:</strong> Taxa de juros (decimal)</li>
            <li><strong>t:</strong> Tempo da aplicação</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2C3FA5]/10 p-8 rounded-lg border border-[#2C3FA5]/30">
        <h3 className="text-xl font-bold text-[#2C3FA5] mb-4">O Poder do Longo Prazo</h3>
        <p className="mb-4">
          Como Albert Einstein supostamente disse: <em>"juros compostos são a oitava maravilha do mundo"</em>. 
        </p>
        <p>
          A diferença entre juros simples e compostos se torna brutal com o passar dos anos. Para investimentos de 20 ou 30 anos, a maior parte do seu patrimônio virá dos juros rendidos, e não do dinheiro que você tirou do bolso. Use a calculadora acima para simular prazos longos e veja a curva exponencial no gráfico!
        </p>
      </div>
    </div>
  );
};

export default InfoSection;