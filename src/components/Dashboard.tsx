import React from 'react';
import { TrendingUp, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Stock } from '../types/stock';

interface DashboardProps {
  stocks: Stock[];
}

export function Dashboard({ stocks }: DashboardProps) {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.current_price * stock.quantity, 0);
  const totalInvestment = stocks.reduce((sum, stock) => sum + stock.purchase_price * stock.quantity, 0);
  const totalGain = totalValue - totalInvestment;
  const percentageGain = (totalGain / totalInvestment) * 100;

  const bestPerformer = stocks.reduce((best, current) => {
    const currentGain = (current.current_price - current.purchase_price) / current.purchase_price;
    const bestGain = (best.current_price - best.purchase_price) / best.purchase_price;
    return currentGain > bestGain ? current : best;
  }, stocks[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Portfolio Value</p>
            <h3 className="text-2xl font-bold">${totalValue.toFixed(2)}</h3>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Gain/Loss</p>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              ${Math.abs(totalGain).toFixed(2)}
              {totalGain >= 0 ? (
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              ) : (
                <ArrowDownRight className="w-5 h-5 text-red-500" />
              )}
            </h3>
            <p className={`text-sm ${totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {percentageGain.toFixed(2)}%
            </p>
          </div>
          <div className={`p-3 rounded-full ${totalGain >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
            <PieChart className={`w-6 h-6 ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`} />
          </div>
        </div>
      </div>

      {bestPerformer && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Best Performer</p>
              <h3 className="text-2xl font-bold">{bestPerformer.symbol}</h3>
              <p className="text-sm text-green-500">
                {(((bestPerformer.current_price - bestPerformer.purchase_price) / bestPerformer.purchase_price) * 100).toFixed(2)}%
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <ArrowUpRight className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}