import { CheckBoxProps } from "@/types/ResultDataType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useState } from "react";

const getTodoHandler = async () => {
  const response = await axios.get(
    "https://assignment-todolist-api.vercel.app/api/yunyeji/items"
  );
  return response.data;
};

const useGetListTodo = () => {
  const [isComplete, setIsComplete] = useState(false);

  const filterIsCompleteN = useCallback(
    (data: CheckBoxProps[], isComplete: boolean) => {
      console.log(data);
      return isComplete ? data : data.filter((todo) => !todo.isCompleted);
    },
    []
  );

  const filterIsCompleteY = useCallback((data: CheckBoxProps[]) => {
    return data.filter((todo) => todo.isCompleted);
  }, []);

  // 조회
  const { data: todoList, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoHandler,
    select: (data) => filterIsCompleteN(data, isComplete),
  });

  const { data: todoListY } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoHandler,
    select: (data) => filterIsCompleteY(data),
  });

  return { todoList, todoListY, refetch, setIsComplete };
};

export default useGetListTodo;
