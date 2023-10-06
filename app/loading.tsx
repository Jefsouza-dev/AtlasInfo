const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
      <div className="ml-4 text-xl text-gray-700">Carregando...</div>
    </div>
  );
};

export default Loading;
