import { useState, useMemo } from 'react';

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage?: number;
}

export function usePagination<T>({ data, itemsPerPage = 6 }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const end = currentPage * itemsPerPage;
    return data.slice(0, end); 
  }, [data, currentPage, itemsPerPage]);

  const loadMore = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const hasMore = currentPage < totalPages;

  return {
    currentData,
    currentPage,
    totalPages,
    loadMore,
    hasMore
  };
}
