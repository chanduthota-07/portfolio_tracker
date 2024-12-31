import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { StockList } from './components/StockList';
import { StockForm } from './components/StockForm';
import type { Stock } from './types/stock';

// Temporary mock data
const mockStocks: Stock[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 10,
    purchase_price: 150.00,
    current_price: 175.50,
    created_at: new Date().toISOString(),
    user_id: 'user123'
  },
  {
    id: '2',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 5,
    purchase_price: 2800.00,
    current_price: 2950.75,
    created_at: new Date().toISOString(),
    user_id: 'user123'
  }
];

function App() {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | undefined>();

  const handleAddStock = (stockData: Partial<Stock>) => {
    const newStock: Stock = {
      id: Date.now().toString(),
      symbol: stockData.symbol!,
      name: stockData.name!,
      quantity: stockData.quantity!,
      purchase_price: stockData.purchase_price!,
      current_price: stockData.purchase_price!, // Temporary, will be updated with real data
      created_at: new Date().toISOString(),
      user_id: 'user123'
    };

    setStocks([...stocks, newStock]);
    setIsFormOpen(false);
  };

  const handleEditStock = (stockData: Partial<Stock>) => {
    if (!editingStock) return;

    const updatedStocks = stocks.map(stock => 
      stock.id === editingStock.id 
        ? { ...stock, ...stockData }
        : stock
    );

    setStocks(updatedStocks);
    setEditingStock(undefined);
    setIsFormOpen(false);
  };

  const handleDeleteStock = (id: string) => {
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Tracker</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Stock
          </button>
        </div>

        <Dashboard stocks={stocks} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Portfolio</h2>
          <StockList
            stocks={stocks}
            onEdit={(stock) => {
              setEditingStock(stock);
              setIsFormOpen(true);
            }}
            onDelete={handleDeleteStock}
          />
        </div>

        {isFormOpen && (
          <StockForm
            stock={editingStock}
            onSubmit={editingStock ? handleEditStock : handleAddStock}
            onClose={() => {
              setIsFormOpen(false);
              setEditingStock(undefined);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;