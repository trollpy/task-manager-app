import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import TasksPage from './pages/TasksPage';
import ApiDataPage from './pages/ApiDataPage';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Layout>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;